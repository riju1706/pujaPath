import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Select, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { pujaSamagriList } from "../../../../../../../data";

const Unit = ["pcs", "kg", "g"];

export default function AddSamagriDialog({
  open,
  handleClose,
  user,
  updadteUserFn,
  editItem,
  setEditItem,
}) {
  const [pujaSamagri, setPujaSamagri] = React.useState({
    selectItem: "",
    quantity: "",
    unit: "",
    perUnit: "",
  });
  console.log(editItem);

  React.useEffect(() => {
    if (editItem.selectItem) {
      console.log("edit");
      setPujaSamagri(editItem);
    } else {
      setPujaSamagri({
        selectItem: "",
        quantity: "",
        unit: "",
        perUnit: "",
      });
    }
  }, [editItem]);

  // for add item
  const handleAddItem = (e) => {
    const { name, value } = e.target;
    setPujaSamagri((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmitItem = () => {
    console.log(Date.now());
    updadteUserFn({
      ...user,
      pujaSamagri: [
        ...(user.pujaSamagri || []),
        { id: Date.now(), ...pujaSamagri },
      ],
    });

    handleClose();
  };

  // for editHandeler
  const handleEditItem = () => {
    // Find the index of the item to edit
    const itemIndex = user.pujaSamagri.findIndex(
      (item) => item.id === pujaSamagri.id
    );

    if (itemIndex === -1) {
      // Item not found, handle error or return
      return;
    }

    // Create a copy of the pujaSamagri array
    const updatedPujaSamagri = [...user.pujaSamagri];

    // Replace the item at the found index with the updated item
    updatedPujaSamagri[itemIndex] = {
      ...pujaSamagri, // Updated item
      id: pujaSamagri.id, // Retain the original ID
    };

    // Update the user object with the updated pujaSamagri array
    updadteUserFn({
      ...user,
      pujaSamagri: updatedPujaSamagri,
    });

    handleClose();
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Add new item</DialogTitle>
        <DialogContent
          sx={{
            display: "flex",
            gap: "1rem",
            margin: "2rem 0",
            overflow: "visible",
          }}
        >
          <FormControl fullWidth>
            <InputLabel id="select-item-label">Select Item</InputLabel>
            <Select
              labelId="select-item-label"
              value={pujaSamagri.selectItem}
              label="Select Item"
              name="selectItem"
              onChange={handleAddItem}
            >
              {pujaSamagriList.map((item, index) => (
                <MenuItem key={index} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            label="Total Quantity"
            name="quantity"
            value={pujaSamagri.quantity}
            onChange={handleAddItem}
            sx={{ width: "35rem" }}
          />
          <FormControl fullWidth>
            <InputLabel id="unit-label">Unit</InputLabel>
            <Select
              labelId="unit-label"
              value={pujaSamagri.unit}
              label="Unit"
              name="unit"
              onChange={handleAddItem}
              sx={{ width: "5rem" }}
            >
              {Unit.map((item, index) => (
                <MenuItem key={index} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            label="Price"
            name="price"
            value={pujaSamagri.price}
            onChange={handleAddItem}
            sx={{ width: "30rem" }}
          />
          <FormControl fullWidth>
            <InputLabel id="unit-label2">Unit</InputLabel>
            <Select
              labelId="unit-label2"
              value={pujaSamagri.perUnit}
              label="PerUnit"
              name="perUnit"
              onChange={handleAddItem}
            >
              {Unit.map((item, index) => (
                <MenuItem key={index} value={item}>
                  Per {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={editItem.selectItem ? handleEditItem : handleSubmitItem}
            autoFocus
          >
            {editItem.selectItem ? "Save" : "Add"}
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
