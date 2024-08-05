import { StackedBarChart } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

export default function ReviewsCard() {
  return (
    <Card sx={{ marginBottom: ".5rem", borderRadius: "20px" }}>
      <CardContent>
        <Stack
          direction="row"
          sx={{
            alignItems: "center",
            width: "100%",
            justifyContent: "space-between",
            borderBottom: "1px solid #333",
          }}
        >
          <Stack direction="row" sx={{ alignItems: "center", gap: "1rem" }}>
            <Avatar
              alt="Remy Sharp"
              src="/img/user.png"
              sx={{ width: 60, height: 60, border: ".5px solid black" }}
            />{" "}
            <Typography variant="h6">Rik Mukherjee</Typography>
          </Stack>
          <Stack direction="row" sx={{ alignItems: "center", gap: "1rem" }}>
            <Typography variant="h6">14 th Aug, 2023</Typography>
            <Rating name="read-only" value={4.5} readOnly precision={0.5} />
          </Stack>
        </Stack>
        <Typography variant="body1" sx={{ marginTop: "1rem" }}>
          I recently had the pleasure of engaging Pandit [Name] for a puja
          ceremony, and I couldn't have been more impressed with his expertise
          and professionalism. From start to finish, Pandit Rik demonstrated a
          deep understanding of the rituals and traditions associated with the
          puja, making the entire experience truly memorable.
        </Typography>
      </CardContent>
    </Card>
  );
}
