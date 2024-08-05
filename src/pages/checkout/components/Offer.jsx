import { Button, Stack, TextField } from "@mui/material";
import React from "react";

export default function Offer() {
  return (
    <Stack direction="row" sx={{ gap: "1rem", padding: "1rem" }}>
      <TextField label="Enter your Cupon Code" size="small" />
      <Button variant="contained" color="secondary" size="small">
        Apply
      </Button>
    </Stack>
  );
}
