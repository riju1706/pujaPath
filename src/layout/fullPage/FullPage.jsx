import React from "react";
import NavComp from "../navComp/NavComp";
import Footer from "../footer";
import SpreedDial from "../spreedDial/SpreedDial";
import { Box } from "@mui/material";

export default function FullPage({ children }) {
  return (
    <Box sx={{ position: "relative", minHeight: "100vh" }}>
      <NavComp />

      <Box sx={{ flexGrow: 1 }}>{children}</Box>

      <Box
        sx={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 9999,
        }}
      >
        <SpreedDial />
      </Box>

      <Footer />
    </Box>
  );
}
