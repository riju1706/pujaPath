import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Avatar, Card, Stack, Typography } from "@mui/material";

const steps = [
  "Pandit Booked",
  "watting for Pandit Confirmation",
  "Puja Status",
];

export default function DevoteeSamagriBookingsCard({
  date,

  address,
  samagri,
  vendor,
}) {
  // console.log(date.date);
  // console.log(address);
  // console.log(samagri);
  // console.log(vendor);
  return (
    <Card
      sx={{
        width: "100%",
        // backgroundImage: "linear-gradient(to right, #ec407a,#fff)",
        padding: "1rem",
        borderRadius: "20px",
      }}
      elevation={4}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr 2fr 4fr ",
          marginBottom: "1.5rem",
          alignItems: "center",
        }}
      >
        <Avatar
          alt="Remy Sharp"
          src={vendor?.url}
          sx={{ width: 56, height: 56 }}
        />
        <Typography variant="body1">{vendor?.shopName}</Typography>
        <Typography variant="body1">Arrives before {date}</Typography>
        {/* <Typography variant="body1">Price: {panditPrice}</Typography> */}
        <Typography variant="body1">
          Address:{" "}
          {Object.entries(address).map(([key, value], index) => ` ${value},`)}
        </Typography>
      </Box>
      <Stepper activeStep={1} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Card>
  );
}
