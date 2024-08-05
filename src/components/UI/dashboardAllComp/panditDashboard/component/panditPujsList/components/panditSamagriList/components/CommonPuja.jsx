import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Chip,
  TextField,
  Typography,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import EditSamagriDialog from "./EditSamagriDialog";
import { pujaSamagriList } from "../../../../../../../../../data";

export default function CommonPuja({ user, updadteUserFn }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = ({ user, updadteUserFn }) => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // for edit section

  // const samagriAddHandle = () => {

  // }

  return (
    <Box>
      <Button
        variant="contained"
        color="secondary"
        sx={{ float: "right" }}
        onClick={handleClickOpen}
      >
        Edit
      </Button>
      <Box
        sx={{ padding: "2rem", display: "flex", flexWrap: "wrap", gap: "1rem" }}
      >
        {user.mySamagriList?.myCommonSamariList &&
          Object.entries(user.mySamagriList.myCommonSamariList).map(
            ([key, value], index) => (
              <Chip color="secondary" key={index} label={`${key}: ${value}`} />
            )
          )}
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="lg" // Set maximum width
      >
        <EditSamagriDialog
          user={user}
          updadteUserFn={updadteUserFn}
          open={open}
          handleClose={handleClose}
          samagriCatagory="1"
          pujaSamagriList={pujaSamagriList}
        />
      </Dialog>
    </Box>
  );
}
