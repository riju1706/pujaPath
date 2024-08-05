import {
  Box,
  Button,
  Checkbox,
  Chip,
  DialogContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { pujaSamagriList } from "../../../../../../../../data";

export default function StepTwo({ samagriWithPujaHandeler, samagriWithPuja }) {
  const [samagriDetails, setSamagriDetails] = useState({});
  console.log(samagriDetails);

  useEffect(() => {
    const details = Object.values(samagriWithPuja);
    setSamagriDetails(details[0]);
    // }
  }, []);

  const handleCheckboxChange = (item) => {
    if (samagriDetails[item]) {
      // Destructure samagriDetails and remove the item
      const { [item]: deletedItem, ...updatedDetails } = samagriDetails;
      // Set the updated state without the deleted item
      setSamagriDetails(updatedDetails);
    } else {
      setSamagriDetails((prev) => ({ ...prev, [item]: ["", ""] }));
    }
  };

  ////////////////////
  const quantityHandler = (event, item, isSelect = false) => {
    const value = event.target.value;

    setSamagriDetails((prev) => {
      // Ensure prev[item] is initialized as an array if it's not already
      const updatedItem = Array.isArray(prev[item]) ? [...prev[item]] : [];
      const pujaName = Object.keys(samagriWithPuja)[0];

      if (isSelect) {
        updatedItem[1] = value; // Update the second element for Select component
      } else {
        updatedItem[0] = value; // Update the first element for TextField component
      }
      console.log(samagriWithPuja);
      const samagri = { ...prev, [item]: updatedItem };
      samagriWithPujaHandeler(pujaName, {
        ...samagriWithPuja[pujaName],
        ...samagri,
      });
      return samagri;
    });
  };

  return (
    <Box sx={{ maxHeight: "40vh", overflowY: "scroll" }}>
      <DialogContent sx={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
        {pujaSamagriList.map((item, index) => (
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
                    // checked={
                    //   mySamagri &&
                    //   Object.entries(mySamagri)
                    //     .map((i) => {
                    //       const [key] = i;
                    //       return key;
                    //     })
                    //     .includes(item)
                    // }
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
            {Object.entries(samagriDetails)
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
                  name="quantity"
                  onChange={(event) => quantityHandler(event, item)}
                  value={samagriDetails[item][0]}
                />
                <FormControl>
                  <InputLabel id="demo-simple-select-label">Unit</InputLabel>
                  <Select
                    label="Unit"
                    name="unit"
                    size="small"
                    sx={{ width: "85px" }}
                    value={samagriDetails[item][1]}
                    onChange={(event) => quantityHandler(event, item, true)}
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
      {/* <DialogContent
        sx={{ display: "flex", alignItems: "center", gap: ".5rem" }}
      >
        <TextField
          label="Add Item"
          // onChange={(e) => setNewItem(e.target.value)}
        />
        <Button
          variant="contained"
          color="secondary"
          // onClick={newItemAddHandeler}
        >
          Add
        </Button>
      </DialogContent> */}
    </Box>
  );
}
