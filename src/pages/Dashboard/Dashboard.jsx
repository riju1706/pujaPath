import React, { useEffect, useReducer, useState } from "react";
import PanditDashboard from "../../components/UI/dashboardAllComp/panditDashboard/PanditDashboard";
import axios from "axios";
import DevoteeDashboard from "../../components/UI/dashboardAllComp/devoreeDashboard/DevoteeDashboard";
import TraineeDashboard from "../../components/UI/dashboardAllComp/TraineeDashboard/TraineeDashboard";
import { useSelector } from "react-redux";
import VendorDashboard from "../../components/UI/dashboardAllComp/VendorDashboard/VendorDashboard";
import TrainerDashboard from "../../components/UI/dashboardAllComp/TrainerDashboard/TrainerDashboard";

export default function Dashboard({ updadteUserFn, fetchUser }) {
  const User = JSON.parse(window.sessionStorage.getItem("user"));

  // for redux add user
  const user = useSelector((i) => i.user);

  // useEffect(() => {
  //   fetchUser();
  // }, []);
  // console.log(user);

  // for image update =================================================
  const handleImageUploadSubmit = async (imgSet) => {
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
    } catch (error) {
      console.error("Error uploading image:", error);
    }
    fetchUser();
  };

  return (
    <>
      {User.userType == 2 && (
        <DevoteeDashboard
          user={user}
          updadteUserFn={updadteUserFn}
          handleImageUploadSubmit={handleImageUploadSubmit}
        />
      )}
      {User.userType == 1 && (
        <PanditDashboard
          user={user}
          updadteUserFn={updadteUserFn}
          handleImageUploadSubmit={handleImageUploadSubmit}
        />
      )}
      {User.userType == 3 && (
        <VendorDashboard
          user={user}
          updadteUserFn={updadteUserFn}
          handleImageUploadSubmit={handleImageUploadSubmit}
        />
      )}
      {User.userType == 4 && (
        <TrainerDashboard
          user={user}
          updadteUserFn={updadteUserFn}
          handleImageUploadSubmit={handleImageUploadSubmit}
        />
      )}
      {User.userType == 5 && (
        <TraineeDashboard
          user={user}
          updadteUserFn={updadteUserFn}
          handleImageUploadSubmit={handleImageUploadSubmit}
        />
      )}
    </>
  );
}
