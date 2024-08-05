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

export default function TrainerPersonalDetails({
  profileViewEditFn,
  user,
  updadteUserFn,
}) {
  const [profileViewEdit, setProfileViewEdit] = useState(true);
  const [bio, setBio] = useState(user.bio);
  const [personalEditValue, setPersonalEditValue] = useState({});
  const [isValid, setIsValid] = useState(false);

  // for getting all edited value from personalInfoEdit
  const valueFn = (value) => {
    setPersonalEditValue(value);
    console.log(value);
  };
  const isValidFn = (value) => {
    setIsValid(value);
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
            updadteUserFn({ ...user, ...personalEditValue });
          }}
          disabled={!isValid}
        >
          Done
        </Button>
      )}
      <Paper sx={{ padding: "2rem" }}>
        <Stack
          direction="row"
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "1rem",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
            }}
          >
            {user.fName} {user.lName}
          </Typography>
          <Typography color="#000" variant="h5">
            <PlaceOutlinedIcon style={{ fontSize: "30px" }} />
            {user.city} {user.state} {user.country}
          </Typography>
        </Stack>
        {profileViewEdit ? (
          <Typography variant="h6">{user.bio}</Typography>
        ) : (
          <TextField
            label="bio"
            value={user.bio}
            onChange={(e) => setBio(e.target.value)}
          />
        )}
      </Paper>

      <Box sx={{ marginTop: "1.5rem" }}>
        {profileViewEdit ? (
          <PersonalInfoCard
            user={user}
            item={{
              fName: user.fName,
              lName: user.lName,
              city: user.city,
              address1: user.address1,
              zip: user.zip,
              state: user.state,
              country: user.country,
            }}
          />
        ) : (
          <PersonalInfoEdit
            user={user}
            valueFn={valueFn}
            isValidFn={isValidFn}
          />
        )}
      </Box>
      <Box width="100%" sx={{ marginTop: "1.5rem" }}></Box>
    </Box>
  );
}
