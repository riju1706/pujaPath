import {
  Avatar,
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
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
import SamagriTreeView from "./SamagriTreeView";

export default function VendorBookingCard({ order, updadteUserFn }) {
  console.log(order);
  return (
    <Box
      sx={{
        marginBottom: "1rem",
        backgroundColor: "#fff",
        padding: ".5rem",
        width: "100%",
        borderRadius: "20px",
      }}
    >
      <Stack
        direction="row"
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <Typography gutterBottom varient="h1" component="div">
          <strong>Price:</strong> {order.samagriTotal}
        </Typography>
        <Typography gutterBottom varient="h1" component="div">
          <strong>Date:</strong> {order.date}
        </Typography>
        <Stack sx={{ gap: ".5rem" }}>
          <Button variant="outlined" size="small">
            Dispatched
          </Button>
          <Button variant="contained" color="secondary" size="small">
            Delivered
          </Button>
        </Stack>
      </Stack>
      <Stack
        direction="row"
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          padding: ".5rem 1.5rem",
        }}
      >
        <SamagriTreeView samagri={order.samagri} />
        <Box sx={{ width: "30%" }}>
          <Typography gutterBottom varient="h1" component="div">
            <strong>Delivery Address:</strong> {order.samagriAddress.fName}{" "}
            {order.samagriAddress.lName}, {order.samagriAddress.address1},{" "}
            {order.samagriAddress.city}, {order.samagriAddress.state},{" "}
            {order.samagriAddress.country}, {order.samagriAddress.zip}
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}
