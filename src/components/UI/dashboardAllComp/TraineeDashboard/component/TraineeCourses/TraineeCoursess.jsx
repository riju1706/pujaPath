import React from "react";
import { allCourses } from "../../../../../../data";
import CourseCard from "../../../component/CourseCard/CourseCard";
import { Box, Stack } from "@mui/material";

export default function TraineeCoursess() {
  return (
    <Box sx={{ padding: "1rem" }}>
      <Stack
        direction="row"
        sx={{
          flexWrap: "wrap",
          gap: "1rem",
          justifyContent: "space-evenly",
        }}
      >
        {allCourses.map((item, index) => (
          <CourseCard key={index} course={item} />
        ))}
      </Stack>
    </Box>
  );
}
