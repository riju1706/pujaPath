import React, { useState } from "react";
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Stack,
  TextField,
} from "@mui/material";
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
import { allPuja } from "../../data";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import PujaTypeCard from "../home/components/PujaTypeCard";
// for a to z array ==============================================
const alphabetArray = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(65 + i)
);
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function PujaOffering() {
  const [open, setOpen] = React.useState(false);
  const [pujaDetails, setPujaDetails] = useState({});
  const [selectAlphabet, setSelectAlpahabet] = useState(null);
  const date = new Date();
  const [month, setMonth] = React.useState(monthNames[date.getMonth() + 1]);

  const setPujaDetailsFn = (details) => {
    setPujaDetails(details);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  // for month change from handeler ================================
  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  };

  return (
    <Box sx={{ padding: "0 2rem" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "1rem",
        }}
      >
        <TextField
          fullWidth
          label="Search puja"
          sx={{
            width: "60%",

            // border: "1px solid black",
            outline: "5px dotted green",

            borderRadius: "40px",
            backgroundColor: "#fff",
            outline: "none",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                border: "1px solid secondary.dark",
                borderRadius: "40px",
              },
              "&:hover fieldset": {
                border: "1px solid #000",
              },
              "&.Mui-focused fieldset": {
                border: "1px solid secondary.dark",
              },
            },
          }}
        />
        <Button
          variant="contained"
          sx={{
            backgroundColor: "secondary.main",
            borderRadius: "20px",
            marginLeft: "1rem",
            "&:hover": { backgroundColor: "secondary.dark" },
          }}
        >
          Search
        </Button>
      </Box>
      <Box
        sx={{
          padding: "1rem",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {alphabetArray.map((i, index) => (
          <Button
            type="contained"
            key={index}
            onClick={() => setSelectAlpahabet(index)}
            sx={{
              m: 1,
              fontWeight: 600,
              color: selectAlphabet == index ? "#fff" : "default",
              backgroundColor:
                selectAlphabet == index ? "secondary.main" : "default",
              "&:hover": {
                color: selectAlphabet == index ? "#fff" : "default",
                backgroundColor:
                  selectAlphabet == index ? "secondary.dark" : "default",
              },
            }}
          >
            {i}
          </Button>
        ))}
      </Box>
      <Box bgcolor="#ffe">
        <Typography variant="h4" sx={{ color: "secondary.main" }} gutterBottom>
          General Puja
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "2rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {allPuja.map((item, index) => (
            <Box sx={{ display: "inline-block", height: "30rem" }}>
              <PujaTypeCard puja={item} key={index} />
            </Box>
          ))}

          <PujaTypeDetails
            handleClose={handleClose}
            open={open}
            pujaDetails={pujaDetails}
          />
        </Box>
      </Box>
      {/* // for rectent month puja ======================================= */}
      <Box bgcolor="#ffe" sx={{ marginBottom: "4rem" }}>
        <Typography variant="h4" sx={{ color: "secondary.main" }} gutterBottom>
          {monthNames[date.getMonth()]} month Puja
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "1rem",
            overflowX: "scroll",
            whiteSpace: "nowrap",
          }}
        >
          {allPuja.map((item, index) => (
            <Box sx={{ display: "inline-block" }}>
              <PujaTypeCard puja={item} key={index} />
            </Box>
          ))}

          {allPuja.map((item, index) => (
            <Box sx={{ display: "inline-block" }}>
              <PujaTypeCard puja={item} key={index} />
            </Box>
          ))}
        </Box>
      </Box>
      {/* // for next month puja ======================================= */}
      <Box bgcolor="#ffe" sx={{ marginBottom: "4rem" }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ marginBottom: "1.5rem", alignItems: "end" }}
        >
          <Typography variant="h4" sx={{ color: "secondary.main" }}>
            {month} month Puja
          </Typography>

          <Box sx={{ minWidth: 220 }}>
            <FormControl fullWidth>
              <InputLabel id="Select Month">Select Month</InputLabel>
              <Select
                labelId="Select Month"
                id="demo-simple-select"
                value={month}
                label="Select Month"
                onChange={handleMonthChange}
              >
                {monthNames.map((monthName, index) => (
                  <MenuItem key={index} value={monthName}>
                    {monthName}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Stack>
        <Box
          sx={{
            display: "flex",
            gap: "1rem",
            overflowX: "scroll",
            whiteSpace: "nowrap",
          }}
        >
          {allPuja.map((item, index) => (
            <Box sx={{ display: "inline-block" }}>
              <PujaTypeCard puja={item} key={index} />
            </Box>
          ))}

          {allPuja.map((item, index) => (
            <Box sx={{ display: "inline-block" }}>
              <PujaTypeCard puja={item} key={index} />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
