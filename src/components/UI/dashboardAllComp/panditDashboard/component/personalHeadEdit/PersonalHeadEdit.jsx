import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  FormControlLabel,
  Paper,
  Rating,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";

export default function PersonalHeadEdit({ user }) {
  const [bio, setBio] = useState("");
  return (
    <Paper sx={{ padding: "2rem" }}>
      <Stack direction="row" sx={{ justifyContent: "center", gap: "1.5rem" }}>
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
          }}
          gutterBottom
        >
          Pandit {user.fName} {user.lName}
        </Typography>
      </Stack>
      <Stack
        direction="row"
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1rem",
        }}
      >
        <Typography color="#000" variant="h5">
          <PlaceOutlinedIcon style={{ fontSize: "30px" }} />
          Agartala
        </Typography>
        <Rating precision={0.5} value="4.5" readOnly />
      </Stack>
      <TextField
        label="Bio"
        value={bio}
        // name="bio"
        multiline
        maxRows={4}
        sx={{ width: "100%" }}
        onChange={(e) => {
          setBio(e.target.value);
        }}
      />
    </Paper>
  );
}
