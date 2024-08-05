import React, { useState } from "react";
import { Box, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import PujaTypeDetails from "../PujaTypeDetails";
import { allPuja } from "../../../../data";
import PujaTypeCard from "../PujaTypeCard";

export default function PujaTypeList() {
  const [open, setOpen] = React.useState(false);
  const [pujaDetails, setPujaDetails] = useState({});

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  console.log(allPuja);
  return (
    <Stack
      direction="row"
      sx={{
        padding: "2rem",
        width: "100%",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "2rem",
      }}
    >
      {allPuja.map((item, index) => (
        <PujaTypeCard
          handleClickOpen={handleClickOpen}
          puja={item}
          key={index}
        />
      ))}
    </Stack>
  );
}
