import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import AddSamagriDialog from "./AddSamagriDialog";

export default function VendorSamagriCard() {
  return (
    <div>
      <Card>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Typography varient="h6">Bel Pata</Typography>
          <Typography varient="h6">100 pcs</Typography>

          <Typography varient="h6">rs: 1/pcs</Typography>

          <Typography varient="h6">Bel Pata</Typography>
        </CardContent>
      </Card>
    </div>
  );
}
