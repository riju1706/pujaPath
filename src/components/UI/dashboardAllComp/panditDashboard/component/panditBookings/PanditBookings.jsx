import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import BookingCard from "../../../component/BookingCard/BookingCard";
import AcceptedCard from "./component/AcceptedCard";

export default function PanditBookings({ user, updadteUserFn }) {
  return (
    <div>
      <Stack sx={{ height: "100%", padding: ".5rem" }}>
        <Box>
          <Typography variant="h5">Upcoming Puja:</Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
              paddingY: ".5rem",
            }}
          >
            {user.bookings ? (
              user?.bookings.map((item, index) => {
                if (item?.panditStatus == 3) {
                  return (
                    <AcceptedCard
                      key={index}
                      details={item}
                      user={user}
                      updadteUserFn={updadteUserFn}
                    />
                  );
                }
              })
            ) : (
              <Typography variant="h6">No Puja Available</Typography>
            )}
          </Box>
        </Box>
        <Box>
          <Typography variant="h5">Users Puja request:</Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
              paddingY: ".5rem",
            }}
          >
            {user.bookings ? (
              user.bookings.map((item, index) => {
                if (item?.panditStatus == 1) {
                  return (
                    <BookingCard
                      key={index}
                      details={item}
                      user={user}
                      updadteUserFn={updadteUserFn}
                    />
                  );
                }
              })
            ) : (
              <Typography variant="h6">No Puja Available</Typography>
            )}
          </Box>
        </Box>
      </Stack>
    </div>
  );
}
