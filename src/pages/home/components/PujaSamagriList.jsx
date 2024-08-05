import { Box, Card, Stack, Typography } from "@mui/material";
import React from "react";
import { Button } from "react-bootstrap";
import { Margin } from "@mui/icons-material";
import { allPujaSamagri } from "../../../data";
import PujaSamagriCard from "../../../components/UI/component/PuajSamagriCard/PujaSamagriCard";

export default function PujaSamagriList() {
  const Month = ["june", "july", "August", "Septembar"];
  return (
    <Box
      sx={{
        display: "flex",
        gap: ".5rem",
        overflowX: "scroll",
        whiteSpace: "nowrap",
      }}
    >
      {allPujaSamagri.map((item, index) => (
        <Box
          sx={{
            display: "inline-block",
            width: "300px",
            height: "28rem",
            marginLeft: "1.5rem",
          }}
          key={index}
        >
          <PujaSamagriCard pujaSamagri={item} />
        </Box>
      ))}
    </Box>
  );
}
