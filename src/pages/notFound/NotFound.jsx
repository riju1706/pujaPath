import { Box, Typography } from "@mui/material";
import React from "react";

export default function NotFound() {
  return (
    <Box sx={{ width: "100%", height: "100vh" }}>
      <Typography variant="h4" sx={{ textAlign: "center", marginTop: "1rem" }}>
        404: Not Found: Please check url
      </Typography>
    </Box>
  );
}
