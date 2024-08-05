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
import React, { useEffect, useState } from "react";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import axios from "axios";
import InputAdornment from "@mui/material/InputAdornment";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function VenorDetailsEdit({ user, profileViewEditFn }) {
  const [pujaName, setPujaName] = React.useState([]);
  const [pujaPrice, setPujaPrice] = React.useState([]);
  const [havanPrice, setHavanPrice] = React.useState("");

  const [userDetails, setUserDetails] = React.useState({
    email: "",
  });
  const [havan, setHaven] = useState(false);
  // const [finalPujaPrice, setFinalPujaPrice] = React.useState({});
  console.log(havan);
  // console.log(finalPujaPrice);
  useEffect(() => {
    setUserDetails(user);
    user.havan && setHaven(user.havan.havanStatus);
    user.havan && setHavanPrice(user.havan.havanPrice);

    user.pujaName && setPujaName(user.pujaName);

    user.pujaList && setPujaPrice(user.pujaList);
  }, [user]);

  const names = ["Laxmi", "Saraswati", "Durga", " Kali", "Ganesh", "Kartick"];
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPujaName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  // handeler ========================================

  const editHandelChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((i) => ({ ...i, [name]: value }));
  };

  const submittoDatabase = async () => {
    const res = await axios.put(
      `http://localhost:8000/posts/${user.id}`,
      userDetails
    );
    profileViewEditFn("view");
  };

  const handlePujaPrice = (e) => {
    const { name, value } = e.target;
    console.log(name);
    console.log(value);
    setPujaPrice((a) => ({ ...a, [name]: value }));
  };

  return (
    <Box sx={{ padding: "1rem", position: "relative" }}>
      <Button
        sx={{ position: "absolute", top: "1.5rem", right: "1.5rem" }}
        variant="contained"
        color="secondary"
        onClick={submittoDatabase}
      >
        Done
      </Button>

      <Card sx={{ padding: "2rem", borderRadius: "20" }}>
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
          }}
          gutterBottom
        >
          Roy and Roy varieties
        </Typography>
        <Stack
          direction="row"
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "1rem",
          }}
        >
          <Typography color="#000" variant="h5">
            <PlaceOutlinedIcon style={{ fontSize: "30px" }} />
            {user.city}
          </Typography>
          <Typography variant="h5">Owner - Bappa Roy</Typography>
          <Rating precision={0.5} value={4.5} readOnly />
        </Stack>
        <Typography variant="h6">{user.bio}</Typography>
      </Card>
      <Stack direction="row" sx={{ justifyContent: "space-between" }}>
        <Box width="48%" gutterBottom sx={{ marginTop: "1.5rem" }}>
          <Card sx={{ padding: "1rem", borderRadius: "20px" }}>
            <CardContent
              sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <TextField
                label="Shop Name"
                name="shopName"
                varient="outlined"
                value={userDetails.shopName}
                onChange={editHandelChange}
              />
              <TextField
                label="Owner Name"
                name="ownerName"
                varient="outlined"
                value={userDetails.ownerName}
                onChange={editHandelChange}
              />
              <TextField
                label="Manager Name"
                name="managerName"
                varient="outlined"
                value={userDetails.managerName}
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
        <Box width="48%" gutterBottom sx={{ marginTop: "1.5rem" }}>
          <Card sx={{ padding: "1rem", borderRadius: "20px" }}>
            <CardContent
              sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <TextField
                label="Address"
                name="address1"
                value={userDetails.address1}
                onChange={editHandelChange}
              />

              <Stack direction="row" sx={{ gap: "1rem" }}>
                <TextField label="City" varient="outlined" value={user.city} />
                <TextField
                  label="State"
                  name="state"
                  varient="outlined"
                  value={userDetails.state}
                  onChange={editHandelChange}
                />
              </Stack>

              <Stack direction="row" sx={{ gap: "1rem" }}>
                <TextField
                  label="Country"
                  name="country"
                  varient="outlined"
                  value={userDetails.country}
                  onChange={editHandelChange}
                />
                <TextField
                  label="Zip code"
                  name="zip"
                  varient="outlined"
                  value={userDetails.zip}
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
                label="Website"
                name="website"
                varient="outlined"
                value={userDetails.website}
                onChange={editHandelChange}
              />
            </CardContent>
          </Card>
        </Box>
      </Stack>
    </Box>
  );
}
