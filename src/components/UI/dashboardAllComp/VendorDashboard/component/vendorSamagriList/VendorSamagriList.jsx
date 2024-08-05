import React, { useState } from "react";
import VendorSamagriCard from "./component/VendorSamagriCard";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import AddSamagriDialog from "./component/AddSamagriDialog";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function VendorSamagriList({ user, updadteUserFn }) {
  const [open, setOpen] = React.useState(false);
  const [editItem, setEditItem] = useState({});

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setEditItem({});
    setOpen(false);
  };
  // for edit item
  const editItemHandeler = (item) => {
    setOpen(true);
    setEditItem(item);
  };

  // for deleter item

  const handleDeleteItem = (itemToDelete) => {
    // Filter out the item to be deleted
    const updatedPujaSamagri = user.pujaSamagri.filter(
      (item) => item.id !== itemToDelete.id
    );

    // Update the user object with the updated pujaSamagri array
    updadteUserFn({
      ...user,
      pujaSamagri: updatedPujaSamagri,
    });
  };

  return (
    <Box sx={{ padding: "1rem" }}>
      <Stack>
        <Box
          onClick={handleClickOpen}
          sx={{
            width: "5rem",
            height: "5rem",
            backgroundColor: "#fff",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AddCircleOutlineRoundedIcon
            style={{ width: "70px", height: "70px", color: "secondary" }}
          />
        </Box>
      </Stack>
      <Stack>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            justifyItems: "center",
            backgroundColor: "secondary.dark",
            color: "#fff",
          }}
        >
          <div></div>
          <Typography varient="h6">Product Name</Typography>
          <Typography varient="h6">Total Quantity</Typography>

          <Typography varient="h6">Price:</Typography>

          <div></div>
        </Box>
        {user.pujaSamagri &&
          user.pujaSamagri.map((item, index) => (
            <Card key={index}>
              <CardContent
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(5, 1fr)",
                  justifyItems: "center",
                }}
              >
                <Avatar
                  alt={item.selectItem}
                  src="/static/images/avatar/3.jpg"
                />

                <Typography varient="h6">{item.selectItem}</Typography>
                <Typography varient="h6">
                  {item.quantity} {item.unit}
                </Typography>

                <Typography varient="h6">
                  {item.price} / {item.perUnit}
                </Typography>
                <Stack direction="row" sx={{ gap: ".5rem" }}>
                  <EditIcon
                    color="secondary"
                    sx={{ cursor: "pointer" }}
                    onClick={() => editItemHandeler(item)}
                  />
                  <DeleteIcon
                    color="secondary"
                    sx={{ cursor: "pointer" }}
                    onClick={() => handleDeleteItem(item)}
                  />
                </Stack>
              </CardContent>
            </Card>
          ))}
        {/* <VendorSamagriCard />
        <VendorSamagriCard /> */}
      </Stack>
      <AddSamagriDialog
        open={open}
        handleClose={handleClose}
        updadteUserFn={updadteUserFn}
        user={user}
        editItem={editItem}
        setEditItem={setEditItem}
      />
    </Box>
  );
}
