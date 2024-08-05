import { Box, Stack, TextField } from "@mui/material";
import React from "react";
import { allCourses } from "../../data";
import { Outlet } from "react-router-dom";
import CourseCard from "../../components/UI/dashboardAllComp/component/CourseCard/CourseCard";

export default function Course() {
  const searchHandle = (event) => {
    // setOpenSuggetion(true);
    // handleClick(event);
    // const response = hinduPujaList.filter((item) =>
    // item.toLowerCase().includes(event.target.value.toLowerCase())
    // setSuggetions(response);
  };
  return (
    <div style={{ backgroundColor: "#eee", height: "100vh" }}>
      <Stack sx={{ alignItems: "center" }}>
        <TextField
          fullWidth
          label="Search Course"
          onChange={searchHandle}
          // onClick={handleClick}
          sx={{
            width: "70%",
            marginTop: ".5rem",

            borderRadius: "40px",
            backgroundColor: "#fff",
            outline: "none",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                border: "none",
                outline: "none",
              },
              "&:hover fieldset": {
                border: "none",
              },
              "&.Mui-focused fieldset": {
                border: "none",
              },
            },
          }}
        />
      </Stack>
      <Box
        sx={{
          display: "flex",
          gap: "1rem",
          justifyContent: "space-around",
          flexWrap: "wrap",
          padding: "1rem",
        }}
      >
        {allCourses.map((item, index) => (
          <CourseCard course={item} />
        ))}
      </Box>
      <Outlet />
    </div>
  );
}
