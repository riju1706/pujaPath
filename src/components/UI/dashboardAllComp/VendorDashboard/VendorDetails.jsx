import {
  Box,
  Button,
  Card,
  CardContent,
  Paper,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";

export default function VendorDetails({ profileViewEditFn, user }) {
  return (
    <Box sx={{ padding: "1rem", position: "relative" }}>
      <Button
        sx={{ position: "absolute", top: "1.5rem", right: "1.5rem" }}
        variant="contained"
        color="secondary"
        onClick={() => {
          profileViewEditFn("edit");
        }}
      >
        Edit
      </Button>
      <Card sx={{ padding: "2rem", borderRadius: "20" }}>
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
          }}
          gutterBottom
        >
          Roy and Roy varieties
        </Typography>
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
            {user.city} {user.state} {user.country}
          </Typography>
          <Typography variant="h5">Owner - Bappa Roy</Typography>
          <Rating precision={0.5} value={4.5} readOnly />
        </Stack>
        <Typography variant="h6">{user.bio}</Typography>
      </Card>
      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}
      >
        <Card sx={{ padding: "2rem", borderRadius: "20px" }}>
          <CardContent>
            <Typography variant="h6">
              <strong>Shop Name:</strong> Roy and Roy varieties
            </Typography>
            <Typography variant="h6">
              <strong>Owner Name:</strong> Bappa Roy {user.lName}
            </Typography>
            <Typography variant="h6">
              <strong>Manager Name:</strong> Bappa Roy {user.lName}
            </Typography>

            <Typography variant="h6">
              <strong>Phone:</strong> {user.phone}
            </Typography>
            <Typography variant="h6">
              <strong>WhatsApp:</strong> {user.whatsApp}
            </Typography>
            <Typography variant="h6">
              <strong>Email:</strong> {user.email}
            </Typography>
            <Typography variant="h6">
              <strong> Address:</strong> {user.address1} {user.city}
              {user.state} {user.country} {user.zip}
            </Typography>

            <Typography variant="h6">
              <strong>Website:</strong> {user.website}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
