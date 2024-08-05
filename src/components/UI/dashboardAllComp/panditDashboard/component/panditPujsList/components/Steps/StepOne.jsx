import React, { useEffect, useState } from "react";
import DialogContent from "@mui/material/DialogContent";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { Stack, TextField, Typography } from "@mui/material";
import { allPuja, pujaSamagriList } from "../../../../../../../../data";

export default function StepOne({ samagriWithPujaHandeler, samagriWithPuja }) {
  const [selectPUjaName, setSelectPujaName] = useState("");
  const [details, setDetails] = useState({ duration: "" });

  useEffect(() => {
    const pujaName = Object.keys(samagriWithPuja);
    if (pujaName.length) {
      setSelectPujaName(pujaName);
      setDetails({
        duration: samagriWithPuja[pujaName].duration,
        price: samagriWithPuja[pujaName].price,

        shortTimePrice: samagriWithPuja[pujaName].shortTimePrice,
        duration: samagriWithPuja[pujaName].duration,
        Unit: samagriWithPuja[pujaName].Unit,
      });
    }
  }, []);

  const changeHandeler = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => {
      const newDetails = {
        [selectPUjaName]: {
          ...samagriWithPuja[selectPUjaName],
          ...prev,
          [name]: value,
        },
      };
      console.log(newDetails);
      samagriWithPujaHandeler(selectPUjaName, {
        ...newDetails[selectPUjaName],
      });

      return { ...prev, [name]: value };
    });

    // console.log( [selectPUjaName]: { ...samagriWithPuja[selectPUjaName], ...details })

    const newDetails = {
      [selectPUjaName]: { ...samagriWithPuja[selectPUjaName], ...details },
    };
  };
  return (
    <DialogContent
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "1rem",
        paddin: "1rem",
        margin: "2rem",
      }}
    >
      {selectPUjaName ? (
        <Typography variant="h6" sx={{ margin: "auto" }}>
          <strong> Puja Name:</strong> {selectPUjaName} Puja
        </Typography>
      ) : (
        <FormControl>
          <InputLabel sx={{ marginTop: ".3rem" }} id="demo-simple-select-label">
            Select Puja
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectPUjaName}
            label="Select Puja"
            onChange={(e) => setSelectPujaName(e.target.value)}
          >
            {allPuja.map((item, index) => {
              return (
                <MenuItem key={index} value={item.pujaName}>
                  {item.pujaName}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      )}
      {selectPUjaName && (
        <>
          <TextField
            label="price"
            name="price"
            sx={{ marginTop: ".3rem" }}
            onChange={changeHandeler}
            value={details.price}
          />
          <TextField
            label="Short Time Price"
            sx={{ marginTop: ".3rem" }}
            name="shortTimePrice"
            value={details.shortTimePrice}
            onChange={changeHandeler}
          />
          <Stack direction="row" sx={{ gap: ".5rem" }}>
            <TextField
              label="Duration"
              sx={{ marginTop: ".3rem" }}
              name="duration"
              value={details.duration}
              onChange={changeHandeler}
            />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Unit</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={details.Unit}
                label="Unit"
                name="Unit"
                onChange={changeHandeler}
              >
                <MenuItem value="Min">Min</MenuItem>
                <MenuItem value="Hr">Hr</MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </>
      )}
    </DialogContent>
  );
}
