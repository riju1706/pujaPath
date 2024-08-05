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
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../Redux/cartSlice";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import SideDrawer from "./component/SideDrawer";
import { samagriAction } from "../../Redux/samagriListSlice";
import { closeContext } from "../../closeContext/closeContext";
import { usePanditBookSchema } from "../../Hook/useRegistrationValidationSchema";
import { useFormik } from "formik";

export default function PanditView() {
  const [user, setUser] = useState({});
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedDateTime, setSelectedDateTime] = useState(null);
  const [error, setError] = useState({ pujaError: false, dateError: false });
  const { registeDialogOpen } = useContext(closeContext);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const selectPujafromRedux = useSelector(
    (state) => state.selectPuja.selectedPuja
  );
  const [selectPuja, setSelectPuja] = useState(selectPujafromRedux);
  const [userSamagri, setUserSamagri] = useState({});

  const validationData = usePanditBookSchema();

  // useEffect to fetch pandit data
  useEffect(() => {
    const fetchPanditData = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/posts/${id}`);
        setUser(res.data);

        if (selectPuja) {
          const value2 =
            res.data.mySamagriList.myPujaWiseSamagriList[selectPuja];
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
      } catch (error) {
        console.error("Error fetching pandit data:", error);
      }
    };

    fetchPanditData();
  }, [selectPuja, id]);

  // Redux state for drawer items
  const drawerItem = useSelector((state) => state.cart.items);

  // Formik setup
  const initialValues = {
    selectPuja: "",
    selectedDateTime: null,
  };

  const { values, errors, touched, handleChange, handleSubmit, isValid } =
    useFormik({
      initialValues: initialValues,
      validationSchema: validationData,
      onSubmit: async (values, { resetForm }) => {
        // Handle form submission logic here
        console.log("Form submitted:", values);
        // Example: Call addToCartHandler or other logic
        // addToCartHandler();
      },
    });

  // Validation function
  // const pujaTimeValidationFn = () => {
  //   if (!selectPuja) {
  //     setError((prevError) => ({ ...prevError, pujaError: true }));
  //   } else if (!selectedDateTime) {
  //     setError((prevError) => ({
  //       ...prevError,
  //       dateError: true,
  //       pujaError: false,
  //     }));
  //   } else {
  //     setError({ pujaError: false, dateError: false });
  //   }
  // };

  // Add to cart handler
  // const addToCartHandler = () => {
  //   if (!selectPuja) {
  //     setError((prevError) => ({ ...prevError, pujaError: true }));
  //   } else if (!selectedDateTime) {
  //     setError((prevError) => ({
  //       ...prevError,
  //       dateError: true,
  //       pujaError: false,
  //     }));
  //   } else {
  //     setError({ pujaError: false, dateError: false });

  //     // Check if the date is already booked
  //     const isAlreadyBooked = drawerItem.some(
  //       (item) => item.DateTime.date === selectedDateTime.format("DD-MM-YYYY")
  //     );

  //     if (isAlreadyBooked) {
  //       setError((prevError) => ({ ...prevError, alreadyBooked: true }));
  //     } else {
  //       setError((prevError) => ({ ...prevError, alreadyBooked: false }));

  //       if (user.id) {
  //         dispatch(
  //           addToCart({
  //             user,
  //             selectPuja,
  //             DateTime: selectedDateTime,
  //           })
  //         );

  //         dispatch(samagriAction(userSamagri));
  //         navigate("/selectVendor");
  //       } else {
  //         registeDialogOpen();
  //       }
  //     }
  //   }
  // };

  // Toggle drawer
  // const toggleDrawer = () => {
  //   setDrawerOpen(!drawerOpen);
  // };

  return (
    <Paper sx={{ backgroundColor: "#fff", padding: "1rem" }}>
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
            alt="Avatar"
            src={user.url || "/img/male.png"}
            sx={{
              width: 400,
              height: 400,
              border: "3px solid black",
            }}
          />
        </Box>

        <form onSubmit={handleSubmit} sx={{ width: "70%" }}>
          <Card sx={{ padding: "1rem", borderRadius: "20px" }}>
            <Stack
              direction="row"
              justifyContent="space-between"
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
            {/* Details */}
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

            {/* Puja list */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
                height: "20rem",
                marginBottom: "3rem",
              }}
            >
              <Box sx={{ padding: "1rem", height: "100%" }}>
                <CardContent sx={{ display: "flex", gap: "2rem" }}>
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
                        value={values.selectPuja}
                        onChange={handleChange("selectPuja")}
                      >
                        {user.mySamagriList &&
                          Object.keys(
                            user.mySamagriList.myPujaWiseSamagriList
                          ).map((i, index) => (
                            <FormControlLabel
                              key={index}
                              value={i}
                              control={<Radio />}
                              label={i}
                            />
                          ))}
                      </RadioGroup>
                    </Box>
                    {touched.selectPuja && errors.selectPuja ? (
                      <span style={{ color: "red" }}>{errors.selectPuja}</span>
                    ) : (
                      <p>error</p>
                    )}

                    {/* Date and Time Selection */}
                    <Box sx={{ marginTop: "1rem" }}>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateTimePicker
                          label="Select Booking Date and Time"
                          value={values.selectedDateTime || null} // Ensure it's a Date object or null
                          name="selectedDateTime"
                          onChange={(value) => {
                            handleChange("selectedDateTime")(value);
                          }}
                          ampm={true}
                        />
                      </LocalizationProvider>
                      {touched.selectedDateTime && errors.selectedDateTime ? (
                        <span style={{ color: "red" }}>
                          {errors.selectedDateTime}
                        </span>
                      ) : (
                        <p>ok</p>
                      )}
                      {error.alreadyBooked && (
                        <span style={{ color: "red" }}>
                          Already booked Pandit on this date
                        </span>
                      )}
                    </Box>
                  </FormControl>

                  <Box sx={{ flexGrow: 1 }}>
                    <Typography
                      color="secondary.dark"
                      variant="h5"
                      sx={{ textAlign: "left", fontWeight: 700 }}
                      gutterBottom
                    >
                      {selectPuja} Puja Samagri List
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
              </Box>
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
            <p>{isValid}</p>
            <Button
              type="submit"
              variant="outlined"
              color="secondary"
              disabled={!isValid}
              sx={{
                padding: ".5rem 4rem",
                borderRadius: "20px",
                cursor: error.dateError ? "not-allowed" : "pointer",
              }}
            >
              Book Now Without Samagri
            </Button>

            {/* Display validation errors */}
            {touched.selectPuja && errors.selectPuja ? (
              <div style={{ color: "red" }}>{errors.selectPuja}</div>
            ) : (
              <p>ok</p>
            )}
            {touched.selectedDateTime && errors.selectedDateTime && (
              <div style={{ color: "red" }}>{errors.selectedDateTime}</div>
            )}
          </Stack>
        </form>
      </Stack>

      {/* Drawer */}
      <SideDrawer
        drawerOpen={drawerOpen}
        // toggleDrawer={toggleDrawer}
        drawerItem={drawerItem}
      />
    </Paper>
  );
}
