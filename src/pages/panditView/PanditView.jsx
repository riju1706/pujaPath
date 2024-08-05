import React, { useContext, useEffect, useState } from "react";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Paper,
  Rating,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
  duration,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeToCart } from "../../Redux/cartSlice";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import SideDrawer from "./component/SideDrawer";
import { samagriAction } from "../../Redux/samagriListSlice";
import { closeContext } from "../../closeContext/closeContext";
//
export default function PanditView() {
  const [user, setUser] = useState({});
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [booked, setBooked] = useState(false);
  const [selectedDateTime, setSelectedDateTime] = useState(null);
  const [error, setError] = useState({ pujaError: false, dateError: false });
  const { registeDialogOpen } = useContext(closeContext);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  let { id } = useParams();
  const selectPujafromRedux = useSelector((item) => {
    return item.selectPuja.selectedPuja;
  });
  const [selectPuja, setSelectPuja] = useState(selectPujafromRedux);
  const [userSamagri, setUserSamagri] = useState({});

  // for getting user details from redux
  const userDetails = useSelector((i) => {
    return i.user;
  });

  useEffect(() => {
    const fetchPanditData = async () => {
      const res = await axios.get(`http://localhost:8000/posts/${id}`);
      setUser(res.data);
      if (selectPuja) {
        const value2 = await res.data.mySamagriList.myPujaWiseSamagriList[
          selectPuja
        ];
        const pujaSamagriObj = {};
        for (let i in value2) {
          if (
            i === "duration" ||
            i === "price" ||
            i === "shortTimePrice" ||
            i === "Unit"
          ) {
            continue;
          }
          pujaSamagriObj[i] = value2[i];
        }
        setUserSamagri(pujaSamagriObj);
      }
    };

    fetchPanditData();
  }, [selectPuja]);
  const drawerItem = useSelector((i) => {
    return i.cart.items;
  });

  // validation
  const pujaTimeValidationFn = () => {
    if (selectPuja == "") {
      setError((i) => ({ ...i, pujaError: true }));
    } else if (selectedDateTime == null) {
      setError((i) => ({ ...i, dateError: true, pujaError: false }));
    } else {
      setError({ pujaError: false, dateError: false });
    }
  };

  // handeler for add item to the cart ====================================================
  const addToCartHandeler = (samagri) => {
    if (selectPuja == "") {
      setError((i) => ({ ...i, pujaError: true }));
    } else if (selectedDateTime == null) {
      setError((i) => ({ ...i, dateError: true, pujaError: false }));
    } else {
      setError({ pujaError: false, dateError: false });
      if (!error.pujaError && !error.dateError) {
        if (
          drawerItem.some(
            (obj) => obj.DateTime.date === selectedDateTime.format("DD-MM-YYYY")
          )
        ) {
          setError((i) => ({ ...i, alreadyBooked: true }));
        } else {
          console.log(userDetails.id);
          if (userDetails.id) {
            setError((i) => ({ ...i, alreadyBooked: false }));
            toggleDrawer();
            dispatch(
              addToCart({
                user,
                selectPuja,
                DateTime: selectedDateTime,
              })
            );
            dispatch(samagriAction(userSamagri));
            samagri && navigate("/selectVendor");
          } else {
            registeDialogOpen();
          }
        }
      }
    }
  };

  // Drawer =======================

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Paper height="100vh" sx={{ backgroundColor: "#fff", padding: "1rem" }}>
      <Stack direction="row" sx={{ gap: "2rem" }}>
        <Box
          sx={{
            width: "30%",
            height: "80vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "2rem",
          }}
        >
          <Avatar
            alt="Remy Sharp"
            src={user.url || "/img/male.png"}
            sx={{
              width: 400,
              height: 400,
              border: "3px solid black",
            }}
          />
        </Box>
        <Box sx={{ width: "70%" }}>
          <Card sx={{ padding: "1rem", borderRadius: "20px" }}>
            <Stack
              direction="row"
              justifyContent="space-between"
              // alignItems="center"
              sx={{ width: "100%" }}
            >
              <Stack>
                <Typography variant="h5">
                  {user.fName} {user.lName}
                </Typography>
                <Typography variant="h5">
                  <PlaceOutlinedIcon fontSize="large" />
                  {user.city}
                </Typography>
              </Stack>
              <Rating precision={0.5} value={4.5} readOnly />
            </Stack>
            <Typography variant="h6">{user.bio}</Typography>
          </Card>
          <Stack sx={{ justifyContent: "space-between", marginBottom: "1rem" }}>
            {/* // Details ======================= */}
            <Box width="80%" sx={{ marginTop: "1.5rem" }}>
              <Card sx={{ padding: "1rem", height: "100%" }}>
                <CardContent>
                  <Typography variant="h6">
                    <strong>Name:</strong> {user.fName} {user.lName}
                  </Typography>
                  <Typography variant="h6">
                    <strong> Address:</strong> {user.address1}, {user.city},
                    {user.state}, {user.country}, {user.zip}
                  </Typography>
                  <Typography variant="h6">
                    <strong>Phone:</strong> {user.phone}
                  </Typography>
                  <Typography variant="h6">
                    <strong>WhatsApp:</strong> {user.whatsApp}
                  </Typography>{" "}
                  <Typography variant="h6">
                    <strong>Experience:</strong> {user.experience} years
                  </Typography>
                </CardContent>
              </Card>
            </Box>

            {/* // Puja list ============================== */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
                height: "20rem",
                marginBottom: "3rem",
              }}
            >
              <Card sx={{ padding: "1rem", height: "100%" }}>
                <CardContent sx={{ display: "flex", gap: "2rem" }}>
                  <Box>
                    <Typography
                      color="secondary.dark"
                      variant="h5"
                      sx={{ textAlign: "left", fontWeight: 700 }}
                      gutterBottom
                    >
                      Puja List
                    </Typography>

                    {user.pujaList &&
                      Object.entries(user.pujaList).map(([key, value]) => (
                        <Typography key={key} variant="h6">
                          {`${key} puja:  \u20B9${value}`}
                        </Typography>
                      ))}
                    {user.havan && (
                      <Typography variant="h6">
                        {`  Havan: \u20B9 ${user.havan.havanPrice}`}
                      </Typography>
                    )}
                    <FormControl>
                      <Box
                        sx={{
                          border: "1px solid gray",
                          padding: "1rem",
                          marginTop: "1rem",
                          borderRadius: "20px",
                        }}
                      >
                        <FormLabel id="demo-row-radio-buttons-group-label">
                          Select Puja
                        </FormLabel>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          {user.mySamagriList &&
                            Object.keys(
                              user.mySamagriList.myPujaWiseSamagriList
                            ).map((i, a) => (
                              <FormControlLabel
                                key={a}
                                onChange={(e) => {
                                  setSelectPuja(e.target.value);
                                  pujaTimeValidationFn();
                                }}
                                value={i}
                                control={<Radio />}
                                label={i}
                                checked={selectPuja === i} // Conditionally set checked prop
                              />
                            ))}
                        </RadioGroup>
                      </Box>
                      {error && (
                        <span style={{ color: "red" }}>
                          {error.pujaError ? "please Select puja" : ""}
                        </span>
                      )}
                      <Box sx={{ marginTop: "1rem" }}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DemoContainer components={["DateTimePicker"]}>
                            <DateTimePicker
                              label="Select Booking Date and Time"
                              value={selectedDateTime}
                              onChange={(e) => {
                                setSelectedDateTime(e);
                                pujaTimeValidationFn();
                              }}
                              // renderInput={(props) => <TextField {...props} />}
                              ampm={true}
                            />
                          </DemoContainer>
                        </LocalizationProvider>
                        {error && (
                          <span style={{ color: "red" }}>
                            {error.dateError
                              ? "please Select Date and Time"
                              : ""}
                          </span>
                        )}
                        {error.alreadyBooked && (
                          <span style={{ color: "red" }}>
                            {error.alreadyBooked
                              ? "Already booked Pandit on this date"
                              : ""}
                          </span>
                        )}
                      </Box>
                    </FormControl>
                  </Box>
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography
                      color="secondary.dark"
                      variant="h5"
                      sx={{ textAlign: "left", fontWeight: 700 }}
                      gutterBottom
                    >
                      {selectPuja} Puja samagri List
                    </Typography>
                    <Box
                      sx={{
                        overflowY: "scroll",
                        height: "15rem",
                        marginTop: "1rem",
                      }}
                    >
                      {userSamagri &&
                        Object.entries(userSamagri).map(
                          ([key, value], index) => (
                            <p key={index}>
                              {key}: {value}
                            </p>
                          )
                        )}
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Stack>

          <Stack
            direction="row"
            sx={{
              padding: ".5rem 1rem",
              gap: "1rem",
              justifyContent: "center",
            }}
          >
            <Button
              variant="outlined"
              color="secondary"
              sx={{
                padding: ".5rem 4rem",
                borderRadius: "20px",
                cursor: error.dateError
                  ? "not-allowed !important"
                  : "pointer !important",
              }}
              onClick={() => addToCartHandeler(false)}
            >
              Book Now Without Samagri
            </Button>

            {/* <Button variant="outlined">Add to Wishlist</Button> */}
            <Button
              variant="contained"
              color="secondary"
              sx={{
                padding: ".5rem 5rem",
                borderRadius: "20px",
                cursor: error.dateError
                  ? "not-allowed !important"
                  : "pointer !important",
              }}
              onClick={() => {
                addToCartHandeler(true);
              }}
            >
              Book Now with Samagri
            </Button>
          </Stack>
        </Box>
      </Stack>

      {/* / Drawer ================== */}
      <SideDrawer
        drawerOpen={drawerOpen}
        toggleDrawer={toggleDrawer}
        drawerItem={drawerItem}
      />
    </Paper>
  );
}
