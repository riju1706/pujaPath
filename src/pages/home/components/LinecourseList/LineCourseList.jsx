import React from "react";
import { Box, Card, Stack, Typography } from "@mui/material";
// import { allPuja } from "../../../../data";
import CourdeCard from "../../../../components/UI/dashboardAllComp/component/CourseCard/CourseCard";
import { allCourses } from "../../../../data";

export default function LineCourseList() {
  return (
    <Box
      sx={{
        gap: ".5rem",
        overflowX: "scroll",
        whiteSpace: "nowrap",
      }}
    >
      <Box sx={{ display: "flex", padding: "2rem", gap: "1rem" }}>
        {allCourses.map((item, index) => (
          <Box width="18rem" key={index}>
            <CourdeCard course={item} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
