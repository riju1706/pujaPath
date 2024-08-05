import { Box, Card, Stack, Typography } from "@mui/material";
import React from "react";
import { allPuja } from "../../../../data";
import PujaTypeCard from "../PujaTypeCard";
import { Button } from "react-bootstrap";
import { Margin } from "@mui/icons-material";

export default function DateWisePujaList() {
  const Month = ["june", "july", "August", "Septembar"];
  return (
    <Box
      sx={{
        gap: ".5rem",
        overflowX: "scroll",
        whiteSpace: "nowrap",
      }}
    >
      {Month.map((i, index) => (
        <Box
          sx={{
            display: "inline-block",
            width: "600px",
            height: "28rem",

            marginLeft: "1.5rem",
          }}
          key={index}
        >
          <Card elevation={4} sx={{ padding: "1rem", width: "100%" }}>
            <Typography variant="h5" sx={{ textAlign: "center" }}>
              {i}
            </Typography>
            <Box sx={{ display: "flex", padding: ".5rem", gap: "1rem" }}>
              {allPuja.slice(0, 2).map((item, index) => (
                <PujaTypeCard puja={item} key={index} />
              ))}
            </Box>
            <Button
              variant="text"
              sx={{ margin: "0 auto", height: "auto", width: "auto" }}
            >
              View More
            </Button>
          </Card>
        </Box>
      ))}
    </Box>
  );
}
