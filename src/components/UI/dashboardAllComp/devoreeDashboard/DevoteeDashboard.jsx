import React, { useContext, useEffect, useRef, useState } from "react";
import {
  Avatar,
  Box,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { useTheme } from "@emotion/react";
import { closeContext } from "../../../../closeContext/closeContext";
import DashboardSidebar from "../component/DashboardSidebar";
import DevoBookingHistory from "./component/DevoBookingHistory/DevoBookingHistory";
import EditPicDialog from "../../../editPicDialog/EditPicDialog";
import DevoPersonalDetails from "./component/DevoPersonalDetails/DevoPersonalDetails";
import DevoBookings from "./component/DevoBookings/DevoBookings";
import ReviewsTab from "../panditDashboard/component/ReviewsTab/ReviewsTab";

export default function DevoteeDashboard({
  user,
  updadteUserFn,
  handleImageUploadSubmit,
}) {
  const closeContexts = useContext(closeContext);
  const [profileEdits, setProfileEdits] = useState(false);
  const [profileEditMsz, setProfileEditMsz] = useState("");
  const [tabNo, setTabNo] = useState(1);
  const [open, setOpen] = React.useState(false);

  const navigate = useNavigate();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const { imageUpdateFn, imgUpdate } = useContext(closeContext);

  // handeler
  // function for tab change
  const handelTabChangeFn = (value) => {
    setTabNo(value);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  // //
  const profileEditFn = (props) => {
    setProfileEditMsz(props);
  };

  return (
    <>
      <Paper>
        <Stack direction="row">
          <Box
            bgcolor="secondary.dark"
            sx={{
              width: 1.3 / 8,
            }}
          >
            <DashboardSidebar
              tabs={{
                tab1: "Personal Information",
                tab2: "My bookings",
                tab3: "Booking History ",
              }}
              user={user}
              handelTabChangeFn={handelTabChangeFn}
              handleClickOpen={handleClickOpen}
            />
          </Box>
          <Box
            sx={{
              width: 6.7 / 8,
              backgroundImage: "linear-gradient(to right, #fce4ec,#f48fb1)",
            }}
          >
            {tabNo == 1 && (
              <DevoPersonalDetails user={user} updadteUserFn={updadteUserFn} />
            )}

            {tabNo == 2 && <DevoBookings user={user} />}
            {tabNo == 3 && <DevoBookingHistory />}
          </Box>
        </Stack>
      </Paper>
      <Box>
        <EditPicDialog
          handleClose={handleClose}
          handleClickOpen={handleClickOpen}
          open={open}
          user={user}
          handleImageUploadSubmit={handleImageUploadSubmit}
          fullScreen={fullScreen}
        />
      </Box>
    </>
  );
}
