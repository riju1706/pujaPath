import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCcVisa } from "@fortawesome/free-brands-svg-icons";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const bankName = [
  "Hdfc Bank",
  "Bank Of Baroda",
  "State Bank Of India,",
  "Yes Bank",
  "Rbl Bank",
];

export default function PaymentMethod() {
  const [paymentMethod, setPaymentMethod] = useState("creditOrDebit");
  // for netBanking
  const [age, setAge] = React.useState("");

  //  const handleChange = (event: SelectChangeEvent) => {
  //    setAge(event.target.value as string);
  //  };
  return (
    <div>
      {/* for address ========================================================== */}
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">
          Choose any payment method:
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="creditOrDebit"
          name="radio-buttons-group"
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          <FormControlLabel
            value="creditOrDebit"
            control={<Radio />}
            label="Credit Or Debit Card"
          />
          {paymentMethod == "creditOrDebit" && (
            <Box sx={{ padding: ".5rem" }}>
              <TextField
                label="Debit/Cradit Card No:"
                type="number"
                size="small"
                sx={{ marginBottom: ".5rem" }}
                fullWidth
              />
              <Stack direction="row" sx={{ gap: "1rem" }}>
                <TextField
                  label="Expiry date (MM/YY)"
                  size="small"
                  sx={{ marginBottom: ".5rem" }}
                  type="text"
                />
                <TextField
                  label="Enter CVV"
                  size="small"
                  sx={{ marginBottom: ".5rem", MozWindowShadowidth: "7rem" }}
                  type="number"
                />
              </Stack>
              <Stack direction="row" sx={{ justifyContent: "space-around" }}>
                <Stack direction="row" sx={{ gap: "1rem" }}>
                  <img
                    src="/img/payment/master.jpg"
                    style={{ height: "auto", width: "2rem" }}
                  />
                  <img
                    src="/img/payment/rupay.webp"
                    style={{ height: "30px", width: "30px" }}
                  />

                  <img
                    src="/img/payment/visa.png"
                    style={{ height: "auto", width: "30px" }}
                  />
                </Stack>
                <Button variant="contained" color="secondary" size="small">
                  Done
                </Button>
              </Stack>
            </Box>
          )}

          {/* // netBanking =========================================================== */}
          <FormControlLabel
            value="netBanking"
            control={<Radio />}
            label="Net Banking"
          />
          {paymentMethod == "netBanking" && (
            <Stack
              direction="row"
              sx={{ padding: ".5rem", marginBottom: "1rem", gap: "1rem" }}
            >
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Select Bank
                </InputLabel>
                <Select
                  size="small"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Select Bank"
                  // onChange={handleChange}
                >
                  {bankName.map((item, index) => {
                    return (
                      <MenuItem key={index} value={item}>
                        {item}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
              <Button variant="contained" color="secondary" size="small">
                Done
              </Button>
            </Stack>
          )}

          {/* // for upi ================================================================ */}

          <FormControlLabel value="upi" control={<Radio />} label="UPI Apps" />
          {paymentMethod == "upi" && (
            <Stack
              direction="row"
              sx={{ padding: ".5rem", gap: "1rem", alignItems: "center" }}
            >
              <TextField
                label="Enter UPI ID"
                size="small"
                sx={{ marginBottom: ".5rem" }}
                type="text"
              />

              <Button variant="contained" color="secondary">
                Verify
              </Button>
            </Stack>
          )}
          {/* // for cod ================================================================= */}
          <FormControlLabel
            value="cod"
            control={<Radio />}
            label="Cash on Delivery/Pay on Delivery"
          />
          {paymentMethod == "cod" && (
            <Button
              variant="contained"
              color="secondary"
              sx={{ margin: "1rem" }}
            >
              Continue with COD
            </Button>
          )}
        </RadioGroup>
      </FormControl>
    </div>
  );
}
