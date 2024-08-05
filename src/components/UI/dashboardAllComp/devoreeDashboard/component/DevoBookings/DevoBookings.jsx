import { Box, Card, Stack, Typography } from "@mui/material";
import React from "react";
import BookingCard from "../../../component/BookingCard/BookingCard";
import DevoteePanditBookingsCard from "./component/DevoteePanditBookingsCard";
import DevoteeSamagriBookingsCard from "./component/DevoteeSamagriBookingsCard";
import { CardTitle } from "react-bootstrap";

export default function DevoBookings({ user }) {
  return (
    <Box sx={{ padding: ".5rem" }}>
      <Typography variant="h5" sx={{ textAlign: "center" }} gutterBottom>
        <strong> My Bookings</strong>
      </Typography>
      <Stack sx={{ gap: "2rem" }}>
        {user?.bookings?.newBookings.map((item, index) => {
          console.log(item.samagri.samagriList);
          return (
            <Card
              sx={{
                padding: "1rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                borderRadius: "20px",
              }}
              elevation={4}
            >
              <DevoteePanditBookingsCard
                pandit={item.pandit}
                puja={item.puja}
                date={item.date}
                time={item.time}
                panditPrice={item.panditPrice}
                address={item.pujaAddress}
              />
              <DevoteeSamagriBookingsCard
                date={item.date}
                address={item.samagriAddress}
                samagri={item.samagri.samagriList}
                vendor={item.samagri.vendorDetails}
              />
            </Card>
          );
        })}
      </Stack>
    </Box>
  );
}
