import React, { useCallback, useEffect, useState } from "react";
import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import PersonalInfoEdit from "../../../components/UI/dashboardAllComp/component/personalInfoEdit/PersonalInfoEdit";
import { useDispatch, useSelector } from "react-redux";
import {
  pujaAddressAction,
  samagriAddressAction,
} from "../../../Redux/deliveryAddressSlice";
import AddressEdit from "./AddressEdit";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function Address({
  checkOutvalue,
  getAddress,
  pujaAddressHandeler,
  samagriAddressHandeler,
  pujaAddress,
  isValidFn,
  isDirtyFn,
}) {
  // hook =======================================
  const [samePujaAddress, setSamePujaAddress] = useState(true);

  useEffect(() => {
    console.log(samePujaAddress);
    if (samePujaAddress) {
      console.log(pujaAddress);

      samagriAddressHandeler(pujaAddress);
    }
  }, [samePujaAddress, checkOutvalue]);


  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          {" "}
          {/* Adjust xs prop to 6 for each item */}
          <Typography variant="body1" sx={{ fontWeight: 700 }}>
            Puja Address
          </Typography>
          <Box sx={{ marginTop: "2.5rem" }}>
            <AddressEdit
              valueFn={pujaAddressHandeler}
              isValidFn={isValidFn}
              isDirtyFn={isDirtyFn}
            />
          </Box>
        </Grid>
        <Grid item xs={6} sx={{ gap: 0 }}>
          <Stack
            direction="row"
            sx={{
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <Typography variant="body1" sx={{ fontWeight: 700 }}>
              Samagri Delivery Address
            </Typography>
            <FormControlLabel
              sx={{ margin: 0, padding: 0 }}
              control={
                <Checkbox
                  onChange={() => setSamePujaAddress((prev) => !prev)}
                  checked={samePujaAddress}
                />
              }
              label="Same as Puja Address"
            />
          </Stack>
          {samePujaAddress || (
            <AddressEdit
              valueFn={samagriAddressHandeler}
              isValidFn={isValidFn}
              isDirtyFn={isDirtyFn}
            />
          )}
        </Grid>
      </Grid>{" "}
    </div>
  );
}
