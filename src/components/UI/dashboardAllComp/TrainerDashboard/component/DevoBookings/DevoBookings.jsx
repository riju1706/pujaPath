import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import BookingCard from "../../../component/BookingCard/BookingCard";

export default function DevoBookings() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        paddingY: ".5rem",
      }}
    >
      <BookingCard />
      <BookingCard />
      <BookingCard />
      <BookingCard />
      <BookingCard />
    </Box>
  );
}
