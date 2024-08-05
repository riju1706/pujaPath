import {
  Avatar,
  Box,
  Button,
  ButtonBase,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editDateCart, removeToCart } from "../../Redux/cartSlice";
import EditIcon from "@mui/icons-material/Edit";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import DeleteIcon from "@mui/icons-material/Delete";
import CartVendorSection from "./component/CartVendorSection";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const [hoverIndex, setHoveredIndex] = useState();
  const [selectedDateTime, setSelectedDateTime] = useState(null);
  const [selectedDateTimeIndex, setSelectedDateTimeIndex] = useState(null);
  const [samagriTotal, SetSamagriTotal] = useState();
  const navigate = useNavigate();
  const [dateEditBtn, setDateEditBtn] = useState(null);
  const dispatch = useDispatch();
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
  }, [vendorAndSamagri.samagriList]);

  // date time edit in redux ==============================
  const dateEditfn = (e, index) => {
    setDateEditBtn(null);
    dispatch(
      editDateCart({
        index: selectedDateTimeIndex,
        DateTime: selectedDateTime,
      })
    );
  };
  // for selecting date and time ===============================
  const selectDateTimeHandeler = (e, a) => {
    setSelectedDateTime(e);
    setSelectedDateTimeIndex(a);
  };
  // for date change ===================================
  const editButtonHandeler = (index) => {
    setDateEditBtn(index);
    setSelectedDateTime(drawerItem[index].DateTime);
    setSelectedDateTimeIndex(index);
  };

  return (
    <>
      {drawerItem.length == 0 ? (
        <Typography
          variant="h5"
          sx={{ textAlign: "center", marginTop: "1rem" }}
        >
          Cart is empty
        </Typography>
      ) : (
        <Box sx={{ padding: "1rem .5rem" }}>
          <Stack direction="row">
            <Box sx={{ flex: 3.5, padding: "0 1rem" }}>
              <Typography variant="h6" sx={{ marginBottom: "2rem" }}>
                Cart Item
              </Typography>
              {/* // pandit section ======================================================= */}
              <Box
                sx={{
                  backgroundColor: "#fce4ec",
                  padding: ".3rem",
                  borderRadius: "20px",
                  marginBottom: "1rem",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    marginBottom: "1rem",
                    marginLeft: "2rem",
                    textAlign: "center",
                  }}
                >
                  <strong> Pandit</strong>
                </Typography>
                {drawerItem.map((i, a) => {
                  return (
                    <Box
                      key={a}
                      sx={{ marginBottom: "1.5rem" }}
                      onMouseEnter={() => setHoveredIndex(a)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <Box
                        sx={{
                          display: "grid",
                          gridTemplateColumns: "repeat(7, 1fr)",
                          alignItems: "center",
                          gap: " 2rem",
                          width: "100%",
                          justifyItems: "center",
                          paddingRight: "1rem",
                          position: "relative",
                        }}
                      >
                        <Avatar
                          alt="pandit"
                          src={i.user.url}
                          sx={{ width: 80, height: 80 }}
                          // variant="rounded"
                        />

                        <Typography varient="h6">
                          {i.user.fName} {i.user.lName}
                        </Typography>

                        <Typography varient="h6">
                          {i.selectPuja} Puja
                        </Typography>

                        {hoverIndex === a &&
                          (dateEditBtn == a ? (
                            <Button
                              sx={{
                                position: "absolute",
                                top: "-.5rem",
                                right: "10rem ",
                                borderRadius: "20px",
                                color: "secondary.main",
                              }}
                              onClick={(e) => dateEditfn(e, a)}
                              variant="text"
                            >
                              <CheckCircleIcon /> Done
                            </Button>
                          ) : (
                            <IconButton
                              aria-label="edit"
                              sx={{
                                position: "absolute",
                                top: "-.5rem",
                                right: "10rem ",
                                color: "secondary.main",
                              }}
                              onClick={() => editButtonHandeler(a)}
                            >
                              <EditIcon />
                              <Typography varient="body1">edit</Typography>
                            </IconButton>
                          ))}

                        {dateEditBtn == a ? (
                          <>
                            <Box
                              sx={{ display: "flex", justifyContent: "center" }}
                            >
                              <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={["DateTimePicker"]}>
                                  <DateTimePicker
                                    label="Select Booking Date and Time"
                                    value={selectedDateTime}
                                    onChange={(e) => {
                                      selectDateTimeHandeler(e, a);
                                    }}
                                  />
                                </DemoContainer>
                              </LocalizationProvider>
                            </Box>
                            <Box></Box>
                          </>
                        ) : (
                          <>
                            <Typography
                              varient="h6"
                              sx={{ textDecoration: "underline" }}
                            >
                              {i.DateTime.format("DD-MM-YYYY")}
                            </Typography>

                            <Typography
                              varient="h6"
                              sx={{ textDecoration: "underline" }}
                            >
                              {i.DateTime.format("HH-mm")}
                            </Typography>
                          </>
                        )}

                        <Typography varient="h6">Rs: {panditPrice}</Typography>

                        <Stack
                          sx={{
                            gap: ".5rem",
                            alignItems: "center",
                            color: "red",
                          }}
                        >
                          <Button
                            sx={{ height: "50%", borderRadius: "20px" }}
                            variant="outLined"
                            onClick={() => dispatch(removeToCart(i.user.id))}
                          >
                            <DeleteIcon />
                            Delete
                          </Button>
                        </Stack>
                      </Box>
                    </Box>
                  );
                })}
              </Box>

              {/* //// for vendor section(Samagri) ======================================= */}
              <Box
                sx={{
                  backgroundColor: "#ffcdd2",
                  padding: ".3rem",
                  borderRadius: "20px",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    marginBottom: "1rem",
                    marginLeft: "2rem",
                    textAlign: "center",
                  }}
                >
                  <strong>Samagries</strong>
                </Typography>
                <CartVendorSection vendorAndSamagri={vendorAndSamagri} />
              </Box>
              <Typography
                sx={{ textAlign: "right", margin: "1rem" }}
                variant="body1"
              >
                <strong> SubTotal: {+panditPrice + samagriTotal}</strong>
              </Typography>
            </Box>

            {/* for price details box ======================================================= */}
            <Box
              sx={{
                flex: 1,
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
              <Typography
                varient="h6"
                sx={{
                  marginBottom: "2rem",
                  fontWeight: 700,
                  position: "absolute",
                  top: "1.5rem",
                }}
              >
                Price details
              </Typography>

              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{ marginBottom: ".5rem" }}
              >
                <Typography
                  varient="h6"
                  sx={{ marginBottom: "2rem", fontWeight: 700 }}
                >
                  Cart Total
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
                <hr
                  style={{ border: "2px solid black", marginBottom: ".2rem" }}
                />
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
                onClick={() => navigate("/checkOut")}
              >
                Proceed To Checkout
              </Button>
            </Box>
          </Stack>
        </Box>
      )}
    </>
  );
}
