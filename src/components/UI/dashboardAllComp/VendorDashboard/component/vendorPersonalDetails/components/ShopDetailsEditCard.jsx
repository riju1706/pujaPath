import React, { useEffect } from "react";
import { Box, Card, CardContent, Stack, TextField } from "@mui/material";

export default function ShopDetailsEditCard({ user, valueFn }) {
  const [userDetails, setUserDetails] = React.useState(user);

  useEffect(() => {
    valueFn(user);
  }, []);

  const editHandelChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((i) => ({ ...i, [name]: value }));
    valueFn({ ...userDetails, [name]: value });
  };
  return (
    <Box sx={{ marginTop: "1.5rem" }}>
      <Card sx={{ padding: "1rem" }}>
        <CardContent
          sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          <TextField
            label="Shop Name"
            name="shopName"
            varient="outlined"
            value={userDetails.shopName}
            onChange={editHandelChange}
          />
          <TextField
            label="Owner Name"
            name="ownerName"
            varient="outlined"
            value={userDetails.ownerName}
            onChange={editHandelChange}
          />
          <TextField
            label="Manager Name"
            name="managerName"
            varient="outlined"
            value={userDetails.managerName}
            onChange={editHandelChange}
          />
          <TextField
            label="Email"
            value={userDetails.email}
            name="email"
            onChange={editHandelChange}
          />

          <TextField
            label="Phone"
            value={userDetails.phone}
            onChange={editHandelChange}
            name="phone"
          />

          <TextField
            label="Whatsapp"
            value={userDetails.whatsApp}
            name="whatsApp"
            onChange={editHandelChange}
          />
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
          <TextField
            label="Website"
            varient="outlined"
            value={userDetails.website}
            name="website"
            onChange={editHandelChange}
          />
        </CardContent>
      </Card>
    </Box>
  );
}
