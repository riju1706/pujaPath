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
import PanditPersonalDetails from "./component/PanditPersonalDetails/PanditPersonalDetails";
import PanditBookings from "./component/panditBookings/PanditBookings";
import ReviewsTab from "./component/ReviewsTab/ReviewsTab";
import EditPicDialog from "../../../editPicDialog/EditPicDialog";
import PanditPujaList from "./component/panditPujsList/PanditPujaList";
import PanditSamagriList from "./component/panditPujsList/components/panditSamagriList/PanditSamagriList";
import PanditCompletedPuja from "./component/Booked/PanditCompletedPuja";

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
  console.log("pandit");
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
                tab0: "My Puja List",
                tab1: "My Samagri List",

                tab2: "Personal Information",
                tab3: "My bookings",
                tab4: "Completed Puja/ Reject Puja ",
                tab5: "Reviews",
              }}
              user={user}
              handelTabChangeFn={handelTabChangeFn}
              handleClickOpen={handleClickOpen}
            />
          </Box>
          <Box
            bgcolor="#fef"
            sx={{
              width: 6.7 / 8,
            }}
          >
            {tabNo == 0 && (
              <PanditPujaList user={user} updadteUserFn={updadteUserFn} />
            )}
            {tabNo == 1 && (
              <PanditSamagriList user={user} updadteUserFn={updadteUserFn} />
            )}

            {tabNo == 2 && (
              <PanditPersonalDetails
                user={user}
                updadteUserFn={updadteUserFn}
              />
            )}

            {tabNo == 3 && (
              <PanditBookings user={user} updadteUserFn={updadteUserFn} />
            )}
            {tabNo == 4 && (
              <PanditCompletedPuja user={user} updadteUserFn={updadteUserFn} />
            )}
            {tabNo == 5 && <ReviewsTab />}
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
