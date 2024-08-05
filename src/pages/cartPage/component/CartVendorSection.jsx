import {
  Avatar,
  Box,
  Button,
  styled,
  Link,
  Stack,
  Typography,
  Dialog,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import CartEditSamagriListDialog from "./CartEditSamagriListDialog";
import AddExtraSamagriSideDialog from "./AddExtraSamagriSideDialog";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function CartVendorSection({
  vendorAndSamagri,
  samagriTotal,
  checkOut,
}) {
  // hook =================================================
  const [open, setOpen] = React.useState(false);

  // for mui drawer ===========================================
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ marginBottom: "1.5rem" }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          alignItems: "center",
          gap: " 2rem",
          width: "100%",
          justifyItems: "center",
          paddingRight: "1rem",
          position: "relative",
        }}
      >
        <Avatar
          alt="Vendor"
          src={vendorAndSamagri?.vendorDetails?.url}
          sx={{ width: 80, height: 80 }}
        />

        <Typography varient="h6">
          {vendorAndSamagri?.vendorDetails?.shopName}
        </Typography>

        <Button onClick={handleClickOpen}>Samargi List</Button>
        {checkOut || (
          <AddExtraSamagriSideDialog vendorAndSamagri={vendorAndSamagri} />
        )}

        <Typography varient="h6">
          Total Price:
          {samagriTotal}
        </Typography>

        <Stack
          sx={{
            gap: ".5rem",
            alignItems: "center",
            color: "red",
          }}
        >
          {checkOut || (
            <Button
              sx={{ height: "50%", borderRadius: "20px" }}
              variant="outLined"
              // onClick={() => dispatch(removeToCart(i.user.id))}
            >
              <DeleteIcon />
              Delete
            </Button>
          )}
        </Stack>
      </Box>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <CartEditSamagriListDialog
          handleClose={handleClose}
          vendorAndSamagri={vendorAndSamagri}
        />
      </BootstrapDialog>
    </Box>
  );
}
