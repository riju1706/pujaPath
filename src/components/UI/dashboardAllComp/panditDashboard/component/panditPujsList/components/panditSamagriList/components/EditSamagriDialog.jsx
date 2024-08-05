import React, { useEffect, useState } from "react";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import {
  Box,
  Button,
  Checkbox,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

export default function EditSamagriDialog({
  user,
  updadteUserFn,
  handleClose,
  samagriCatagory,
  pujaSamagriList,
}) {
  const [pujaItems, setPujaItems] = useState({});
  const [pujaSamagriListData, setPujaSamagriListData] =
    useState(pujaSamagriList);
  const [newItem, setNewItem] = useState("");
  const [mySamagri, setMySamagri] = useState();
  const [samagriQuantity, setSamagriQuantity] = useState([]);

  //
  useEffect(() => {
    if (user.mySamagriList) {
      if (samagriCatagory == 1) {
        setMySamagri(user.mySamagriList?.myCommonSamariList);
      } else if (samagriCatagory == 2) {
        setMySamagri(user.mySamagriList?.myHavanSamagriList);
      } else {
        setMySamagri(
          user.mySamagriList?.myPujaWiseSamagriList[samagriCatagory]
        );
      }
    }
  }, []);

  // forn new item add in masterlist
  const refreshData = () => {
    setPujaSamagriListData([...pujaSamagriList]); // Create a new array to trigger re-render
  };
  const newItemAddHandeler = () => {
    pujaSamagriList.push(newItem);
    refreshData();
  };

  // for checkbox check/uncheck
  const handleCheckboxChange = (item) => {
    setMySamagri((prev) => {
      const newSamagri = { ...prev };

      if (item in newSamagri) {
        // If the item is in the list, remove it
        delete newSamagri[item];
      } else {
        // If the item is not in the list, add it with a default value
        newSamagri[item] = ["", ""];
      }

      return newSamagri;
    });
  };

  // for imput after check element
  const addNewinputHandeler = (event, item, isSelect = false) => {
    const value = event.target.value;

    setMySamagri((prev) => {
      const updatedItem = [...prev[item]]; // Make a copy of the current array for the item

      if (isSelect) {
        updatedItem[1] = value; // Update the second element for Select component
      } else {
        updatedItem[0] = value; // Update the first element for TextField component
      }
      console.log(updatedItem);
      return { ...prev, [item]: updatedItem };
    });
  };

  const EditMySamagriHandeler = () => {
    console.log(user.mySamagriList);
    if (samagriCatagory == "1") {
      const updatedUserValue = {
        ...user,
        mySamagriList: { ...user.mySamagriList, myCommonSamariList: mySamagri },
      };
      console.log(updatedUserValue);
      updadteUserFn({
        ...updatedUserValue,
      });
    } else if (samagriCatagory == "2") {
      const updatedUserValue = {
        ...user,
        mySamagriList: { ...user.mySamagriList, myHavanSamagriList: mySamagri },
      };
      console.log(updatedUserValue);
      updadteUserFn({
        ...updatedUserValue,
      });
    } else {
      const updatedUserValue = {
        ...user,
        mySamagriList: {
          ...user.mySamagriList,
          myPujaWiseSamagriList: {
            ...user.mySamagriList.myPujaWiseSamagriList,
            [samagriCatagory]: mySamagri,
          },
        },
      };
      updadteUserFn({
        ...updatedUserValue,
      });
    }
    handleClose();
  };
  console.log(mySamagri);

  return (
    <div>
      <DialogTitle id="alert-dialog-title">
        {samagriCatagory == 1 && "Edit Common Samagri"}
        {samagriCatagory == 2 && "Edit Havan Samagri"}
        {samagriCatagory == 1 ||
          samagriCatagory == 2 ||
          `Edit ${samagriCatagory} Puja Samagri`}
      </DialogTitle>
      <DialogContent sx={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
        {pujaSamagriListData.map((item, index) => (
          <Box
            key={index}
            sx={{
              border: "1px solid gray",
              padding: ".5rem 1rem",
              display: "flex",
              justifyContent: "space-around",
              flexDirection: "row",
              gap: ".5rem",
              alignItems: "center",
              borderRadius: "20px",
            }}
          >
            <Chip
              color="secondary"
              label={
                <Box display="flex" alignItems="center">
                  <Checkbox
                    checked={
                      mySamagri &&
                      Object.entries(mySamagri)
                        .map((i) => {
                          const [key] = i;
                          return key;
                        })
                        .includes(item)
                    }
                    onChange={() => handleCheckboxChange(item)}
                    size="small"
                    sx={{
                      padding: 0,
                      marginRight: 1,
                      color: "white",
                      "&.Mui-checked": {
                        color: "white",
                      },
                      "& .MuiSvgIcon-root": {
                        fill: "white",
                      },
                    }}
                  />
                  {item}
                </Box>
              }
            />
            {mySamagri &&
              Object.entries(mySamagri)
                .map((i) => {
                  const [key] = i;
                  return key;
                })
                .includes(item) && (
                <>
                  <TextField
                    size="small"
                    label="quantity"
                    sx={{ width: "70px" }}
                    onChange={(event) => addNewinputHandeler(event, item)}
                    value={mySamagri[item][0]}
                  />
                  <FormControl>
                    <InputLabel id="demo-simple-select-label">Unit</InputLabel>
                    <Select
                      label="Unit"
                      size="small"
                      sx={{ width: "85px" }}
                      value={mySamagri[item][1]}
                      onChange={(event) =>
                        addNewinputHandeler(event, item, true)
                      }
                    >
                      <MenuItem value="Pcs">Pcs</MenuItem>
                      <MenuItem value="kg">kg</MenuItem>
                      <MenuItem value="g">g</MenuItem>
                    </Select>
                  </FormControl>
                </>
              )}
          </Box>
        ))}
      </DialogContent>
      <DialogContent
        sx={{ display: "flex", alignItems: "center", gap: ".5rem" }}
      >
        <TextField
          label="Add Item"
          onChange={(e) => setNewItem(e.target.value)}
        />
        <Button
          variant="contained"
          color="secondary"
          onClick={newItemAddHandeler}
        >
          Add
        </Button>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={handleClose}>
          Cancel
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={EditMySamagriHandeler}
          autoFocus
        >
          Done
        </Button>
      </DialogActions>
    </div>
  );
}
