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
import PujaTypeDetails from "../home/components/PujaTypeDetails";
import PujaTypeCard from "../home/components/PujaTypeCard";
import PujaTypeList from "../home/components/pujaTypeList/PujaTypeList";

export default function PujaType() {
  const [open, setOpen] = React.useState(false);
  const [pujaDetails, setPujaDetails] = useState({});

  const setPujaDetailsFn = (details) => {
    setPujaDetails(details);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
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
      <PujaTypeList />

      <PujaTypeDetails
        handleClose={handleClose}
        open={open}
        pujaDetails={pujaDetails}
      />
    </Stack>
  );
}
