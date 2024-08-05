import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  Chip,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import EditSamagriDialog from "./EditSamagriDialog";
import { pujaSamagriList } from "../../../../../../../../../data";

export default function PujaWiseSamagri({ user, updadteUserFn }) {
  const [open, setOpen] = React.useState(false);
  const [editPujaName, setEditPujaName] = useState("");

  const handleClickOpen = (item) => {
    setOpen(true);
    console.log(item);
    setEditPujaName(item);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Box
        sx={{ padding: "2rem", display: "flex", flexWrap: "wrap", gap: "1rem" }}
      >
        {user.mySamagriList?.myPujaWiseSamagriList &&
          Object.entries(user.mySamagriList.myPujaWiseSamagriList).map(
            ([key, value], index) => {
              return (
                <Card
                  sx={{ width: "100%", borderRadius: "20px" }}
                  elevation={4}
                >
                  <CardContent>
                    <Button
                      variant="contained"
                      color="secondary"
                      sx={{ float: "right" }}
                      onClick={() => handleClickOpen(key)}
                    >
                      Edit
                    </Button>
                    <Typography variant="h6" gutterBottom>
                      {key} Puja:
                    </Typography>

                    <Stack
                      direction="row"
                      sx={{ gap: "1rem", flexWrap: "wrap", marginTop: "1rem" }}
                    >
                      {Object.entries(value).map(([key, value], index) => {
                        if (
                          key !== "price" &&
                          key !== "Duration" &&
                          key !== "duration" &&
                          key !== "Unit" &&
                          key !== "shortTimePrice"
                        ) {
                          return (
                            <Chip
                              color="secondary"
                              key={index}
                              label={`${key}: ${value}`}
                            />
                          );
                        }
                      })}
                    </Stack>
                  </CardContent>
                </Card>
              );
            }
          )}
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="lg" // Set maximum width
      >
        <EditSamagriDialog
          user={user}
          updadteUserFn={updadteUserFn}
          open={open}
          handleClose={handleClose}
          samagriCatagory={editPujaName}
          pujaSamagriList={pujaSamagriList}
        />
      </Dialog>
    </Box>
  );
}
