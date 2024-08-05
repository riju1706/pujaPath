import {
  Box,
  Button,
  Card,
  CardContent,
  Paper,
  Rating,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import PersonalInfoCard from "../../../component/personalInfoCard/PersonalInfoCard";
import PersonalInfoEdit from "../../../component/personalInfoEdit/PersonalInfoEdit";
import { TextFieldsTwoTone } from "@mui/icons-material";
import axios from "axios";
import ShopDetailsCard from "./components/ShopDetailsCard";
import ShopDetailsEditCard from "./components/ShopDetailsEditCard";

export default function VendorPersonalDetails({
  profileViewEditFn,
  user,
  updadteUserFn,
}) {
  const [profileViewEdit, setProfileViewEdit] = useState(true);
  const [bio, setBio] = useState(user.bio);
  const [personalEditValue, setPersonalEditValue] = useState({});

  // for getting all edited value from personalInfoEdit
  const valueFn = (value) => {
    setPersonalEditValue(value);
    console.log(value);
  };

  return (
    <Box sx={{ padding: "1rem", position: "relative" }}>
      {profileViewEdit ? (
        <Button
          sx={{ position: "absolute", top: "1.5rem", right: "1.5rem" }}
          variant="contained"
          color="secondary"
          onClick={() => {
            setProfileViewEdit(false);
          }}
        >
          Edit
        </Button>
      ) : (
        <Button
          sx={{ position: "absolute", top: "1.5rem", right: "1.5rem" }}
          variant="contained"
          color="secondary"
          onClick={() => {
            setProfileViewEdit(true);
            updadteUserFn(personalEditValue);
          }}
        >
          Done
        </Button>
      )}
      <Paper sx={{ padding: "2rem", marginBottom: "2rem" }}>
        <Stack
          direction="row"
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "1rem",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
            }}
          >
            {user.shopName}
          </Typography>
          <Typography color="#000" variant="h5">
            <PlaceOutlinedIcon style={{ fontSize: "30px" }} />
            {user.city} {user.state} {user.country}
          </Typography>
        </Stack>
      </Paper>
      <Box>
        <Box>
          {profileViewEdit ? (
            <ShopDetailsCard user={user} />
          ) : (
            <ShopDetailsEditCard user={user} valueFn={valueFn} />
          )}
        </Box>
      </Box>
    </Box>
  );
}
