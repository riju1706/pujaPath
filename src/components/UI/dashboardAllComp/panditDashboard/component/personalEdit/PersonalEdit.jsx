import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  FormControlLabel,
  Paper,
  Rating,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

export default function PersonalEdit({ user }) {
  // console.log(user);
  const [userDetails, setUserDetails] = React.useState({
    email: "",
  });
  const editHandelChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((i) => ({ ...i, [name]: value }));
    valueFn({ ...userDetails, [name]: value });
  };
  return (
    <Stack direction="row" sx={{ justifyContent: "space-between" }}>
      <Box width="48%" gutterBottom sx={{ marginTop: "1.5rem" }}>
        <Card sx={{ padding: "1rem" }}>
          <CardContent
            sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <Stack direction="row" sx={{ gap: "1rem" }}>
              <TextField
                label="First Name"
                name="fName"
                varient="outlined"
                value={userDetails.fName}
                onChange={editHandelChange}
              />
              <TextField
                label="Last name"
                name="lName"
                varient="outlined"
                value={userDetails.lName}
                onChange={editHandelChange}
              />
            </Stack>
            <TextField
              label="Email"
              value={userDetails.email}
              name="email"
              onChange={editHandelChange}
            />

            <TextField
              label="Phone"
              value={userDetails.phone}
              onChange={editHandelChange}
              name="phone"
            />

            <TextField
              label="Whatsapp"
              value={userDetails.whatsApp}
              name="whatsApp"
              onChange={editHandelChange}
            />
          </CardContent>
        </Card>
      </Box>
      {/* <Box width="48%" gutterBottom sx={{ marginTop: "1.5rem" }}>
    <Card sx={{ padding: ".5rem" }}>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Stack
            direction="row"
            sx={{
              gap: ".5rem",
              alignItems: "center",
              marginTop: ".5rem",
              marginBottom: "1.5rem",
            }}
          >
            <InputLabel htmlFor="outlined-input">Experience:</InputLabel>
            <OutlinedInput
              id="outlined-adornment-weight"
              name="experience"
              value={userDetails.experience}
              onChange={editHandelChange}
              endAdornment={
                <InputAdornment position="end">Years</InputAdornment>
              }
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
            />
          </Stack>
          <FormControl
            sx={{
              m: 1,
              width: 300,
            }}
          >
            <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              value={pujaName}
              onChange={handleChange}
              input={<OutlinedInput label="Tag" />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
              sx={{ marginBottom: "1rem" }}
            >
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={pujaName.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
            {pujaName.map((i, a) => (
              <Stack
                direction="row"
                key={a}
                sx={{ marginBottom: "1rem", gap: ".5rem" }}
              >
                <TextField
                  label={`${i} price`}
                  name={i}
                  onChange={handlePujaPrice}
                  value={pujaPrice[i]}
                />
              </Stack>
            ))}
            <FormControlLabel
              control={<Checkbox />}
              label="Havan"
              labelPlacement="start"
              onChange={() => {
                setHaven(!havan);
              }}
              checked={havan}
            />
            {havan && (
              <TextField
                label="Havan Price"
                name="havan"
                onChange={(e) => setHavanPrice(e.target.value)}
                value={havanPrice}
              />
            )}
            <TextField
              type="number"
              label="Short Notice Puja Price"
              name="shortNoticePrice"
              sx={{ marginTop: "1rem" }}
              value={userDetails.shortNoticePrice}
              onChange={editHandelChange}
            />
          </FormControl>
        </Box>
      </CardContent>
    </Card>
  </Box> */}
    </Stack>
  );
}
