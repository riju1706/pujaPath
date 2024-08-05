import React from "react";
import "./profileEdit.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import PanditProfileEdit from "../../panditProfileEdit/PanditProfileEdit";
import CloseIcon from "@mui/icons-material/Close";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import ListGroup from "react-bootstrap/ListGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { useState } from "react";
import { CloudinaryContext, Image, Transformation } from "cloudinary-react";
import axios from "axios";
import { json } from "react-router-dom";

export default function ProfileEdit({ setProfileEdits, user, profileEditFn }) {
  console.log(user);
  const [imageUrl, setImageUrl] = useState(null);
  const [imgSet, setImgSet] = useState(null);
  const [profileImgView, setProfileImgView] = useState(false);

  // handeler
  const handleImageUpload = async (event) => {
    console.log(event);
    const file = event.target.files[0];
    setProfileImgView(true);

    console.log("ok");
    const reader = new FileReader();

    if (file) {
      setImgSet(file);
      reader.onload = () => {
        const dataURL = reader.result;
        setProfileImgView(dataURL);
      };
      reader.readAsDataURL(file);
    }
  };

  //
  const handleImageUploadSubmit = async (event) => {
    setProfileImgView(false);
    console.log("ok");

    const formData = new FormData();
    formData.append("file", imgSet);
    formData.append("upload_preset", "rmd7vv26"); // replace with your upload preset

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/djabzrlh1/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      await setImageUrl(data.url);
      console.log(data.url);
      console.log("kljljlj");
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  //
  const handelProEditSubmit = async () => {
    const res = await axios.put(`http://localhost:8000/posts/${user.id}`, {
      ...user,
      url: imageUrl,
    });
    await sessionStorage.setItem(
      "user",
      JSON.stringify({
        ...user,
        url: imageUrl,
      })
    );
    await setProfileEdits(false);
    await profileEditFn(Date.now());
  };
  return (
    <div className="editPopUp">
      <div className="editPopUp1">
        <center>
          <h1>Edit Profile</h1>
        </center>

        <div className="imageEdit" style={{ position: "relative" }}>
          <img
            src={imageUrl ? imageUrl : "/img/noProfile.jpg"}
            width="100%"
            style={{ borderRadius: "50%" }}
          />
          <div
            style={{
              position: "absolute",
              right: 0,
              transform: "translate(20%, -100%)",
              zIndex: 5,
            }}
          >
            <CameraAltIcon />
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageUpload(e)}
              style={{
                transform: "translate(-100%, -10%)",
                opacity: 0,
                cursor: "pointer",
                width: "50px",
                zIndex: 3,
              }}
            />
          </div>
        </div>
        <div className="profileImgViewContainer">
          {profileImgView && (
            <div className="profilePicViewer">
              <img
                src={profileImgView ? profileImgView : "/img/noProfile.jpg"}
              />
              <button
                className="btn btn-primary"
                onClick={handleImageUploadSubmit}
              >
                Upload
              </button>
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: "8rem",
                  cursor: "pointer",
                }}
                onClick={() => setProfileImgView(setProfileImgView(false))}
              >
                <CloseIcon style={{ fontSize: "24px" }} />
              </div>
            </div>
          )}
        </div>
        <hr />
        <div className="personalContainer">
          <h3
            style={{
              textDecoration: "underline",
              marginBottom: "2rem",
              color: "red",
            }}
          >
            Personal Information
          </h3>
          <div className="d-flex ">
            <div className="d-flex ">
              <h4>First Name</h4>
              <Form.Group className=" ms-5 mb-3" controlId="formBasicEmail">
                <Form.Control type="text" />
              </Form.Group>
            </div>
            <div className="d-flex ">
              <h4>Last Name</h4>
              <Form.Group className=" ms-5 mb-3" controlId="formBasicEmail">
                <Form.Control type="text" />
              </Form.Group>
            </div>
          </div>
          <div className="d-flex ">
            <h4>Phone No: </h4>
            <Form.Group className=" ms-5 mb-3" controlId="formBasicEmail">
              <Form.Control type="text" />
            </Form.Group>
          </div>
          <div className="d-flex ">
            <h4>WhatsApp No:</h4>
            <Form.Group className=" ms-5 mb-3" controlId="formBasicEmail">
              <Form.Control type="text" />
            </Form.Group>
          </div>
          <div className="d-flex ">
            <h4>Email: </h4>
            <Form.Group className=" ms-5 mb-3" controlId="formBasicEmail">
              <Form.Control type="text" />
            </Form.Group>
          </div>

          {/* Address =================================== */}
          <h3>Address</h3>
          <div>
            <Form.Group className=" ms-5 mb-3" controlId="formBasicEmail">
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className=" ms-5 mb-3" controlId="formBasicEmail">
              <Form.Control type="text" />
            </Form.Group>
            <div className="d-flex">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>State</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>ZIP Code:</Form.Label>
                <Form.Control type="number" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Country:</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </div>
            <hr />
          </div>
        </div>
        <PanditProfileEdit />
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => handelProEditSubmit()}
        >
          Submit
        </button>
      </div>
      <div
        className="profileEditCloseBtn"
        onClick={() => setProfileEdits(false)}
      >
        <CloseIcon style={{ fontSize: "24px" }} />
      </div>
    </div>
  );
}
