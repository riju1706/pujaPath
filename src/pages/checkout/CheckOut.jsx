import React, { useCallback, useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { Box, Button, Stack } from "@mui/material";
import CheckOutAccordion from "./components/CheckOutAccordion";
import { useSelector } from "react-redux";
import Address from "./components/Address";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function CustomizedAccordions({ updadteUserFn }) {
  const [samagriTotal, SetSamagriTotal] = useState("");
  const [checkOutvalue, setCheckOutValue] = useState(1);
  const [pujaAddress, setPujaAddress] = useState({});
  const [samagriAddress, setSamagriAddress] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [isFormDirty, setIsFormDirty] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    let sum = 0;
    // suncrion for total price ======================
    const totalPrice = () => {
      // Iterate through the array
      vendorAndSamagri?.samagriList?.forEach((item) => {
        // Check if item is an object with a userPrice property
        if (
          typeof item === "object" &&
          item.hasOwnProperty(Object.keys(item)[0]) &&
          item[Object.keys(item)[0]].hasOwnProperty("userPrice")
        ) {
          sum += item[Object.keys(item)[0]].userPrice;
        }
      });
      SetSamagriTotal(sum);
    };
    totalPrice();
  }, []);
  // vendor and samagri ===================================
  const vendorAndSamagri = useSelector((i) => {
    return i.vandorAndSamagri;
  });

  // drawer item ==========================================
  const drawerItem = useSelector((i) => {
    return i.cart.items;
  });
  const [panditPrice, setPanditPrice] = useState(
    drawerItem[0]?.user.mySamagriList.myPujaWiseSamagriList[
      drawerItem[0]?.selectPuja
    ].price
  );
  // for checkout button change on click===================================

  const checkoutBtnHandel = (value) => {
    if (value.length) {
      console.log(value);
      setCheckOutValue(value);
    } else {
      checkOutvalue < 4 && setCheckOutValue((value) => +value + 1);
      if (checkOutvalue == 4) {
        buyHandeler();
      }
    }
  };

  // for puja address ================================================================
  const pujaAddressHandeler = (value) => {
    setPujaAddress(value);
  };
  console.log(pujaAddress);
  // for samagri address ================================================================
  const samagriAddressHandeler = (value) => {
    setSamagriAddress(value);
  };
  console.log(samagriAddress);

  // buy handeler ======================================

  const user = useSelector((i) => {
    return i.user;
  });
  const pujaAdddress = useSelector((i) => {
    return i.deliveryAddres.pujaAddress;
  });
  // for formik button disable =======================]
  const isValidFn = (value) => {
    setIsFormValid(value);
  };
  const isDirtyFn = (value) => {
    setIsFormDirty(value);
  };

  const buyHandeler = async () => {
    const id = Date.now();
    updadteUserFn({
      ...user,
      bookings: {
        ...(user.bookings || {}),
        newBookings: [
          ...(user.bookings?.newBookings || []),
          {
            panditStatus: 1,
            devoteeStatus: 1,
            pujaAddress: pujaAddress,
            samagriAddress: samagriAddress,
            date: drawerItem[0].DateTime.format("DD-MM-YYYY"),
            time: drawerItem[0].DateTime.format("HH-mm"),
            panditPrice: panditPrice,

            pandit: drawerItem[0]?.user,
            samagri: vendorAndSamagri,
            puja: drawerItem[0]?.selectPuja,
          },
        ],
      },
    });
    alert("successfully Booked");
    navigate("/");

    // for pandit page
    console.log(drawerItem[0].user.id);

    const bookings = {
      id,
      panditStatus: 1,
      devoteeStatus: 1,
      pujaAddress: pujaAddress,
      date: drawerItem[0].DateTime.format("DD-MM-YYYY"),
      time: drawerItem[0].DateTime.format("HH-mm"),
      panditPrice: panditPrice,
      user,
      puja: drawerItem[0]?.selectPuja,
    };
    axios
      .get(`http://localhost:8000/posts/${drawerItem[0].user.id}`)
      .then((response) => {
        const existingData = response.data;

        // Merge existing data with new data (bookings)
        const updatedData = {
          ...existingData,
          bookings: [...existingData.bookings, bookings], // Assuming 'pandit' is the key you want to update or add
        };

        const res = axios
          .put(`http://localhost:8000/posts/${drawerItem[0].user.id}`, {
            ...updatedData,
          })
          .then((response) => console.log(response.data))
          .catch((err) => console.log(err));
      });

    // for vendor bookings ============================================
    console.log(vendorAndSamagri.vendorDetails.id);
    const samagriList = {
      id, // Assuming id is defined somewhere in your code
      vendorStatus: 1,
      samagriAddress,
      date: drawerItem[0].DateTime.format("DD-MM-YYYY"),
      time: drawerItem[0].DateTime.format("HH-mm"),
      samagri: vendorAndSamagri.samagriList,
      samagriTotal,
      checkOutvalue,
      user,
    };

    axios
      .get(`http://localhost:8000/posts/${vendorAndSamagri.vendorDetails.id}`)
      .then((response) => {
        const existingData = response.data;
        console.log(existingData); // Verify existing data

        // Update the order list with the new samagriList
        const updatedOrderList = {
          ...existingData,
          orderList: [
            ...(existingData.orderList ? existingData.orderList : []),
            samagriList, // Adding the new samagriList to the existing orderList
          ],
        };

        // Perform the PUT request to update the server data
        axios
          .put(
            `http://localhost:8000/posts/${vendorAndSamagri.vendorDetails.id}`,
            updatedOrderList // Send updated data to the server
          )
          .then((response) => {
            console.log(response.data); // Log the response from server if needed
          })
          .catch((err) => {
            console.log(err); // Handle errors if any
          });
      })
      .catch((err) => {
        console.log(err); // Handle errors if GET request fails
      });
  };

  return (
    <Box sx={{ padding: "1rem .5rem" }}>
      <Stack direction="row">
        <Box sx={{ flex: 3.5, padding: "0 1rem" }}>
          <Typography variant="h6" sx={{ marginBottom: "2rem" }}>
            Cart Item
          </Typography>

          <CheckOutAccordion
            drawerItem={drawerItem}
            vendorAndSamagri={vendorAndSamagri}
            samagriTotal={samagriTotal}
            panditPrice={panditPrice}
            checkOutvalue={checkOutvalue}
            checkoutBtnHandel={checkoutBtnHandel}
            pujaAddressHandeler={pujaAddressHandeler}
            samagriAddressHandeler={samagriAddressHandeler}
            pujaAddress={pujaAddress}
            isValidFn={isValidFn}
            isDirtyFn={isDirtyFn}
          />
        </Box>
        <Box
          sx={{
            flex: 1,
            height: "50vh",
            padding: "1rem",
            backgroundColor: "#f3e5f5",
            borderRadius: "20px",
            display: "flex",
            flexDirection: "column",
            // alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{ marginBottom: ".5rem" }}
          >
            <Typography
              varient="h6"
              sx={{ marginBottom: "2rem", fontWeight: 700 }}
            >
              <strong>Price Details:</strong>
            </Typography>

            <Typography variant="body1">
              SubTotal: {+panditPrice + samagriTotal}
            </Typography>
          </Stack>
          <Box>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ marginBottom: ".3rem" }}
            >
              <Typography variant="body1">Pandit + Samagri:</Typography>
              <Typography variant="body1">
                {" "}
                {+panditPrice + samagriTotal}
              </Typography>
            </Stack>{" "}
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="body1">GST(18%):</Typography>
              <Typography variant="body1">
                {" "}
                {((+panditPrice + samagriTotal) * 18) / 100}
              </Typography>
            </Stack>
            <hr style={{ border: "2px solid black", marginBottom: ".2rem" }} />
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="body1" sx={{ fontWeight: 700 }}>
                Total:
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 700 }}>
                {((+panditPrice + samagriTotal) * 1.18).toFixed(2)}
              </Typography>
            </Stack>
          </Box>
          <Button
            variant="contained"
            color="secondary"
            sx={{ margin: "2rem" }}
            onClick={checkoutBtnHandel}
            disabled={!isFormValid || !isFormDirty || !pujaAddress.fName}
          >
            {(checkOutvalue == 1 && "Set Delivery Address") ||
              (checkOutvalue == 2 && "Use This Payment Method") ||
              (checkOutvalue == 3 && "Use this Coupon") ||
              (checkOutvalue == 4 && "Proceed To Payment")}
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}
