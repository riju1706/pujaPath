import {
  Box,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { Button, Card } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

export default function CompletedCard({ details, updadteUserFn, user }) {
  return (
    <Box width="300px" sx={{ marginBottom: "1rem" }}>
      <Card sx={{ borderRadius: "15px" }}>
        <CardMedia
          height="200rem"
          component="img"
          image={details.user.url}
          alt="user image"
        />
        <CardContent>
          <Stack sx={{ alignItems: "flex-end" }}></Stack>
          <Typography gutterBottom varient="h1" component="div">
            <strong>Puja Type:</strong> {details.id}
          </Typography>

          <Typography gutterBottom varient="h1" component="div">
            <strong>Name: </strong> {details.user.fName}
            {details.user.lName}
            {}
          </Typography>

          <Typography gutterBottom varient="h1" component="div">
            <strong>Puja Type:</strong> {details.puja} Puja
          </Typography>
          <Typography gutterBottom varient="h1" component="div">
            <strong> Place: </strong>
            {details.pujaAddress.address1} {details.pujaAddress.state}{" "}
            {details.pujaAddress.country} {details.pujaAddress.zip}{" "}
            {details.pujaAddress.phone}
          </Typography>
          <Typography gutterBottom varient="h1" component="div">
            <strong> Date:</strong> {details.date}
          </Typography>
          <Typography gutterBottom varient="h1" component="div">
            <strong> Time:</strong> {details.time}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
