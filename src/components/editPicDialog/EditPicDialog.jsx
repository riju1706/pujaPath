import React, { useRef, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Avatar, Box, Button, Paper, Stack, Typography } from "@mui/material";
import CameraEnhanceOutlinedIcon from "@mui/icons-material/CameraEnhanceOutlined";

export default function EditPicDialog({
  handleClose,
  handleClickOpen,
  open,
  user,
  handleImageUploadSubmit,
  fullScreen,
}) {
  const [profileImgView, setProfileImgView] = useState("");
  const [imgSet, setImgSet] = useState(null);

  const fileInputRef = useRef(null);
  const handleFileSelect = (event) => {
    // handleClickOpen();
    const file = event.target.files[0];
    const reader = new FileReader();

    if (file) {
      // Process the selected file (e.g., upload to server, display preview, etc.)

      reader.onload = () => {
        const dataURL = reader.result;
        setProfileImgView(dataURL);
        handleClickOpen();
        setImgSet(file);
      };
      reader.readAsDataURL(file);
    }
  };
  // Function to trigger file input click
  const handleDialogAvatarClick = () => {
    fileInputRef.current.click();
    // setOpen(true);
  };
  return (
    <div>
      {" "}
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"view you Photo"}
        </DialogTitle>
        <DialogContent sx={{ width: "30rem" }}>
          <Stack
            direction="row"
            sx={{
              gap: ".5rem",
              justifyContent: "right",
              marginBottom: "1rem",
              cursor: "pointer",
            }}
          >
            <CameraEnhanceOutlinedIcon />
            <Typography>Add Picture from camera</Typography>
          </Stack>
          <input
            type="file"
            accept="image/*"
            style={{
              position: "absolute",
              right: 0,
              bottom: "2rem",
              width: "200px",
              display: "none",
            }}
            ref={fileInputRef}
            onChange={handleFileSelect}
          />
          <Avatar
            alt="Remy Sharp"
            src={profileImgView ? profileImgView : user.url}
            sx={{
              width: 260,
              height: 260,
              border: "3px solid black",
              margin: "auto",
            }}
            onClick={handleDialogAvatarClick}
          />
        </DialogContent>
        <DialogActions>
          <Button autoFocus variant="outlined" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              handleImageUploadSubmit(imgSet);
              handleClose();
            }}
            autoFocus
          >
            Upload
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
