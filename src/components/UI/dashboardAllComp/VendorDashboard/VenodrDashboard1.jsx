import React, { useContext, useEffect, useRef, useState } from "react";

import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CameraEnhanceOutlinedIcon from "@mui/icons-material/CameraEnhanceOutlined";
import {
  AppBar,
  Avatar,
  Box,
  Paper,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Reviews } from "@mui/icons-material";

import Footer from "../../../layout/footer";
import VendorDetails from "./VendorDetails";
import VenorDetailsEdit from "./VendorDetailsEdit";
import { closeContext } from "../../../closeContext/closeContext";

export default function VendorDashboard() {
  const closeContexts = useContext(closeContext);
  const { imageUpdateFn, imgUpdate } = useContext(closeContext);

  const [user, setUser] = useState("");
  const [profileEdits, setProfileEdits] = useState(false);
  const [profileEditMsz, setProfileEditMsz] = useState("");
  const [dashboardTab, setDashboardTab] = useState(0);
  const [profileViewEdit, setProfileViewEdit] = useState("view");
  const [profileImgView, setProfileImgView] = useState("");
  const [imgSet, setImgSet] = useState(null);

  const navigate = useNavigate();

  // const { imageUpdateFn, imgUpdate } = useContext(closeContext);

  const fileInputRef = useRef(null);
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const fetchUser = async () => {
      const res = sessionStorage.getItem("user");
      const usera = JSON.parse(res);

      const userData = await axios.get(
        `http://localhost:8000/posts/${usera.id}`
      );
      await setUser(userData.data);
    };
    fetchUser();
  }, [closeContexts.userLogin, profileViewEdit, imgUpdate]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const profileEditFn = (props) => {
    setProfileEditMsz(props);
    // setProfileEditMsz(false);
    console.log(props);
  };

  //
  const handelChange = (a, b) => {
    setDashboardTab(b);
  };
  const profileViewEditFn = (value) => {
    setProfileViewEdit(value);
  };

  // Function to handle file selection
  const handleFileSelect = (event) => {
    // handleClickOpen();
    const file = event.target.files[0];
    const reader = new FileReader();
    if (file) {
      // Process the selected file (e.g., upload to server, display preview, etc.)

      console.log("Selected file:", file);
      reader.onload = () => {
        const dataURL = reader.result;
        setProfileImgView(dataURL);
        handleClickOpen();
        setImgSet(file);
      };
      reader.readAsDataURL(file);
    }
  };
  // Function to trigger file input click
  const handleClick = () => {
    fileInputRef.current.click();
    // setOpen(true);
  };

  // submit to image save in cloudinary
  const handleImageUploadSubmit = async (event) => {
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
      // await setImageUrl(data.url);

      await axios.put(`http://localhost:8000/posts/${user.id}`, {
        ...user,
        url: data.url,
      });
      // imageUpdateFn(!imgUpdate);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
    handleClose();
  };
  console.log(user);
  return (
    <>
      <Paper>
        <Stack direction="row">
          <Box
            bgcolor="secondary.dark"
            sx={{
              width: 1.3 / 8,
            }}
          >
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{ marginTop: "1.5rem", position: "relative" }}
            >
              <input
                type="file"
                accept="image/*"
                style={{
                  position: "absolute",
                  right: 0,
                  bottom: "2rem",
                  width: "200px",
                  display: "none",
                }}
                ref={fileInputRef}
                onChange={handleFileSelect}
              />
              <Avatar
                alt="Remy Sharp"
                src={user.url || "/img/male.png"}
                sx={{ width: 160, height: 160, border: "3px solid black" }}
                onClick={handleClickOpen}
              />
            </Box>
            <Typography color="white" variant="h6" sx={{ textAlign: "center" }}>
              {user.fName} {user.lName}
            </Typography>
            <Typography
              color="white"
              variant="body2"
              sx={{ textAlign: "center" }}
            >
              <PlaceOutlinedIcon />
              {user.city}
            </Typography>
            <Box>
              <TabContext value={dashboardTab}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <Tabs
                    orientation="vertical"
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                      marginTop: "1.5rem",
                    }}
                    onChange={handelChange}
                    value={dashboardTab}
                  >
                    <Tab
                      label="Shop Information"
                      sx={{
                        color: dashboardTab === 0 ? "black" : "white",
                        backgroundColor:
                          dashboardTab === 0 ? "#ddd" : "inherit",
                      }}
                      value={0}
                    />
                    <Tab
                      label="Product List"
                      sx={{
                        color: dashboardTab === 1 ? "black" : "white",
                        backgroundColor:
                          dashboardTab === 1 ? "#ddd" : "inherit",
                      }}
                      value={1}
                    />
                    <Tab
                      label="Notification"
                      sx={{
                        color: dashboardTab === 2 ? "black" : "white",
                        backgroundColor:
                          dashboardTab === 2 ? "#ddd" : "inherit",
                      }}
                      value={2}
                    />
                  </Tabs>
                </Box>
              </TabContext>
            </Box>
          </Box>
          {/* <AppBar position="static"></AppBar> */}

          <Box
            bgcolor="#ddd"
            sx={{
              width: 6.7 / 8,
            }}
          >
            {profileViewEdit == "view" ? (
              <>
                {dashboardTab == 0 && (
                  <VendorDetails
                    user={user}
                    profileViewEditFn={profileViewEditFn}
                  />
                )}
              </>
            ) : (
              <>
                {dashboardTab == 0 && (
                  <VenorDetailsEdit
                    user={user}
                    profileViewEditFn={profileViewEditFn}
                  />
                )}
              </>
            )}
            {/* {dashboardTab == 1 && <PanditBookings />}
            {dashboardTab == 2 && <Booked />}
            {dashboardTab == 3 && <Reviews />} */}
          </Box>
        </Stack>
      </Paper>
      <Box>
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">
            {"view you Photo"}
          </DialogTitle>
          <DialogContent sx={{ width: "30rem" }}>
            <Stack
              direction="row"
              sx={{
                gap: ".5rem",
                justifyContent: "right",
                marginBottom: "1rem",
                cursor: "pointer",
              }}
            >
              <CameraEnhanceOutlinedIcon />{" "}
              <Typography>Add Picture from camera</Typography>
            </Stack>
            <Avatar
              alt="Remy Sharp"
              src={profileImgView ? profileImgView : user.url}
              sx={{
                width: 260,
                height: 260,
                border: "3px solid black",
                margin: "auto",
              }}
              onClick={handleClick}
            />
          </DialogContent>
          <DialogActions>
            <Button autoFocus variant="outlined" onClick={handleClose}>
              Cancel
            </Button>
            <Button
              variant="contained"
              onClick={handleImageUploadSubmit}
              autoFocus
            >
              Upload
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
      <Footer />
    </>
  );
}
