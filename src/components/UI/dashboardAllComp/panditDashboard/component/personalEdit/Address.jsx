import React from "react";
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

export default function Address({ user }) {
  const [userDetails, setUserDetails] = React.useState({ email: "" });

  const editHandelChange = (e) => {
    console.log("editHandelChange");
    const { name, value } = e.target;
    setUserDetails((i) => ({ ...i, [name]: value }));
  };
  return (
    <>
      <TextField
        label="Address"
        name="address1"
        value={userDetails.address1}
        onChange={editHandelChange}
      />
      <TextField
        label="City"
        name="city"
        value={userDetails.city}
        onChange={editHandelChange}
      />

      <Stack direction="row" sx={{ gap: "1rem" }}>
        <TextField label="City" varient="outlined" value={user.city} />
        <TextField
          label="State"
          name="state"
          varient="outlined"
          value={userDetails.state}
          onChange={editHandelChange}
        />
      </Stack>

      <Stack direction="row" sx={{ gap: "1rem" }}>
        <TextField
          label="Country"
          name="country"
          varient="outlined"
          value={userDetails.country}
          onChange={editHandelChange}
        />
        <TextField
          label="Zip code"
          name="zip"
          varient="outlined"
          value={userDetails.zip}
          onChange={editHandelChange}
        />
      </Stack>
    </>
  );
}
