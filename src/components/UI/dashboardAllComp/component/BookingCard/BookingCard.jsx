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

export default function BookingCard({ details, updadteUserFn, user }) {
  console.log(user);
  // accept users request handeler ==========================================
  const acceptHandeler = () => {
    const newBookings = user.bookings.map((item) => {
      console.log(item);
      if (item.id == details.id) {
        return { ...item, panditStatus: 3 };
      } else {
        return item;
      }
    });
    console.log(newBookings);
    updadteUserFn({
      ...user,
      bookings: newBookings,
    });
  };
  // reject users request handeler ==========================================
  const rejectHandeler = () => {
    console.log("aaaa");
    const newBookings = user.bookings.map((item) => {
      console.log(item);
      if (item.id == details.id) {
        return { ...item, panditStatus: 2 };
      } else {
        return item;
      }
    });
    console.log(newBookings);
    updadteUserFn({
      ...user,
      bookings: newBookings,
    });
  };
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
        <CardActions sx={{ display: "flex", justifyContent: "space-evenly" }}>
          <Button variant="outlined" onClick={rejectHandeler}>
            Reject
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={acceptHandeler}
          >
            Accept
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
