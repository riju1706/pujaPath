import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

export default function VendorCard({ vendor }) {
  return (
    <>
      <Card sx={{ width: 300, borderRadius: "20px" }} elevation={4}>
        <CardMedia
          sx={{ height: 150 }}
          image={vendor.url ? vendor.url : "/img/shop.jpg"}
          itle="green iguana"
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <strong>Shop Name:</strong>
            {vendor.shopName}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "end", margin: "0 .5rem .5rem 0" }}>
          <Button
            variant="contained"
            size="small"
            sx={{
              backgroundColor: "secondary",
              "&:hover": {
                backgroundColor: "secondary",
              },
            }}
          >
            Select
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
