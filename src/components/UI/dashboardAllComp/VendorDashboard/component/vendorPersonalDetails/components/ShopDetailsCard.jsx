import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

export default function ShopDetailsCard({ user }) {
  return (
    <>
      <Card sx={{ padding: "1rem", borderRadius: "20px", width: "48%" }}>
        <CardContent>
          <Typography variant="h6">
            <strong>Shop Name:</strong> {user.shopName}
          </Typography>
          <Typography variant="h6">
            <strong>Owner Name:</strong> {user.ownerName}
          </Typography>
          <Typography variant="h6">
            <strong>Manager Name:</strong> {user.managerName}
          </Typography>
          <Typography variant="h6">
            <strong>Shop Phone No:</strong> {user.phone}
          </Typography>
          <Typography variant="h6">
            <strong>Shop Whatsapp:</strong> {user.whatsApp}
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
    </>
  );
}
