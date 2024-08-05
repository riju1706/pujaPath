import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { AddBoxSharp } from "@mui/icons-material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AddEditPuja from "./components/AddEditPuja";
import PujaTypeCard from "../../../../../../pages/home/components/PujaTypeCard";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import HavanSection from "./components/havanSection/HavanSection";

export default function PanditPujaList({ user, updadteUserFn }) {
  const [open, setOpen] = React.useState(false);
  const [allPuja, setAllPuja] = useState({});

  useEffect(() => {
    user.mySamagriList?.myPujaWiseSamagriList &&
      setAllPuja(user.mySamagriList.myPujaWiseSamagriList);
  }, [user]);
  console.log(allPuja);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (item) => {
    setOpen(false);
  };

  // for deleter puja ====================
  const deleteHandler = (item) => {
    // Check if allPuja is defined and has the necessary nested properties
    const newPuja = {};
    for (const key in allPuja) {
      if (key !== item) {
        newPuja[key] = allPuja[key];
      }
    }
    console.log(newPuja);
    updadteUserFn({
      ...user,
      mySamagriList: {
        ...user.mySamagriList,
        myPujaWiseSamagriList: newPuja,
      },
    });
  };

  return (
    <div>
      <Box
        sx={{
          padding: "1rem",
          display: "flex",
          gap: "1rem",
          alignItems: "center",
        }}
      >
        <Stack
          direction="row"
          sx={{
            flexWrap: "wrap",
            gap: "1rem",
            justifyContent: "center",
          }}
        >
          {allPuja &&
            Object.entries(allPuja).map(([key, value], index) => {
              return (
                <Card
                  key={index}
                  sx={{
                    width: "15rem",
                    borderRadius: "15px",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="194"
                    image={`/img/${key}.webp`}
                    alt={key}
                  />
                  <CardContent>
                    <Typography variant="h6">
                      <strong>{key} Puja</strong>
                    </Typography>
                    <Typography variant="body1">
                      Price: {value.price}{" "}
                    </Typography>
                    <Typography variant="body1">
                      Short Time Price: {value.shortTimePrice}{" "}
                    </Typography>

                    <Typography variant="body1">
                      Duration: {value.duration} {value.Unit}
                    </Typography>
                    <Box
                      sx={{
                        backgroundColor: "#fff",

                        position: "absolute",
                        top: 0,
                        right: 0,
                        borderRadius: "50%",
                        height: "50px",
                        width: "50px",
                        transform: "translate(25%, -25%)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        cursor: "pointer",
                      }}
                      onClick={() => deleteHandler(key)}
                    >
                      <DeleteIcon
                        sx={{ color: "error.main", fontSize: "28px" }}
                      />
                    </Box>
                  </CardContent>
                </Card>
              );
            })}
          <Box
            sx={{
              width: "15rem",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "#fff",
              cursor: "pointer",
            }}
            onClick={handleClickOpen}
          >
            <AddCircleIcon
              style={{
                width: "50%",
                height: "50%",
              }}
              color="secondary"
            />
          </Box>
        </Stack>
      </Box>
      {/* // for havan ==================================================== */}
      <Stack>
        <HavanSection user={user} updadteUserFn={updadteUserFn} />
      </Stack>
      {/* // for dialog box========================================= */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth={true}
        maxWidth="md"
      >
        <AddEditPuja
          handleClose={handleClose}
          user={user}
          updadteUserFn={updadteUserFn}
        />
      </Dialog>
    </div>
  );
}
