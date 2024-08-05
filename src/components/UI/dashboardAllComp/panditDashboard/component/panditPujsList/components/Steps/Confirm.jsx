import { Box, Chip, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function Confirm({ samagriWithPuja }) {
  const [pujaName, setPujaName] = useState(Object.keys(samagriWithPuja)[0]);
  const [pujaDetails, setPujaDetails] = useState(
    Object.values(samagriWithPuja)[0]
  );
  // useEffect(() => {
  //   console.log(Object.keys(samagriWithPuja)[0]);
  // }, []);
  console.log(pujaDetails);
  return (
    <Box sx={{ padding: "1rem" }}>
      <Stack direction="row" sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6">
          <strong>{pujaName} Puja</strong>
        </Typography>
        <Typography variant="h6">
          <strong>
            Duration: {pujaDetails.duration} {pujaDetails.Unit}
          </strong>
        </Typography>
        <Typography variant="h6">
          <strong>Price: {pujaDetails.price}</strong>
        </Typography>
      </Stack>
      <Box
        sx={{ padding: "2rem", display: "flex", flexWrap: "wrap", gap: "1rem" }}
      >
        {Object.entries(samagriWithPuja[pujaName]).map(
          ([key, value], index) => {
            if (
              key !== "price" &&
              key !== "Duration" &&
              key !== "duration" &&
              key !== "Unit" &&
              key !== "shortTimePrice"
            ) {
              return (
                <Chip
                  color="secondary"
                  key={index}
                  label={`${key}: ${value}`}
                />
              );
            }
          }
        )}
      </Box>
    </Box>
  );
}
