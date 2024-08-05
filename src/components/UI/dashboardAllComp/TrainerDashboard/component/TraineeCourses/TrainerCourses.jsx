import React, { useState } from "react";
import { allCourses } from "../../../../../../data";
import CourseCard from "../../../component/CourseCard/CourseCard";
import { Box, Stack } from "@mui/material";
import AddCourseDialiog from "./component/AddCourseDialiog";

export default function TrainerCourses({ user, updadteUserFn }) {
  console.log(user);
  return (
    <Box sx={{ padding: "1rem" }}>
      <Stack
        direction="row"
        sx={{
          flexWrap: "wrap",
          gap: "1rem",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        {/* {allCourses.map((item, index) => (
          <CourseCard key={index} course={item} />
        ))} */}
        {user.courses &&
          user.courses.map((item, index) => {
            console.log(item);
            return <CourseCard key={index} course={item} />;
          })}

        <AddCourseDialiog user={user} updadteUserFn={updadteUserFn} />
      </Stack>
    </Box>
  );
}
