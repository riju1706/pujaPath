import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

export default function PersonalInfoCard({ user, item }) {
  console.log(item);
  return (
    <>
      <Card sx={{ padding: "1rem", borderRadius: "20px", width: "48%" }}>
        <CardContent>
          {item.fName && (
            <Typography variant="h6">
              <strong>Name:</strong> {item.fName} {item.lName}
            </Typography>
          )}
          {(item.address1 ||
            item.city ||
            item.zip ||
            item.state ||
            item.country) && (
            <Typography variant="h6">
              <strong> Address:</strong> {item.address1} {item.city}
              {item.state} {item.country} {item.zip}
            </Typography>
          )}
          <Typography variant="h6">
            <strong>Phone:</strong> {user.phone}
          </Typography>
          <Typography variant="h6">
            <strong>WhatsApp:</strong> {user.whatsApp}
          </Typography>{" "}
          <Typography variant="h6">
            <strong>Experience:</strong> {user.experience} years
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
