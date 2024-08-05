import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import VendorBookingCard from "./component/VendorBookingsCard";

export default function VendorBookings({ user, updadteUserFn }) {
  return (
    <Box
      sx={{
        padding: ".5rem",
      }}
    >
      <Stack>
        {user.orderList &&
          user.orderList.map((item, index) => {
            return (
              <VendorBookingCard order={item} updadteUserFn={updadteUserFn} />
            );
          })}
      </Stack>
    </Box>
  );
}
