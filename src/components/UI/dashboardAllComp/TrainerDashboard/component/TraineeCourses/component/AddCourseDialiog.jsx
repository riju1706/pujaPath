import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Box, Grid, Stack, TextField } from "@mui/material";
import AddCourseDialogUpload from "./AddCourseDialogUpload";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function AddCourseDialiog({ user, updadteUserFn }) {
  const [open, setOpen] = React.useState(false);
  const [courseMainDetails, setCourseMainDetails] = React.useState({
    courseName: "",
    courseDescription: "",
    courseTime: "",
    coursePrice: "",
  });
  const [newCourseDetails, setNewCourseDetails] = React.useState({});

  // new course details get handeler ================================
  const newCourseDetailsHandeler = (value) => {
    setNewCourseDetails(value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  // for add course name , details ect function ========================
  const courseMainDetailsFn = (event) => {
    const { name, value } = event.target; // Use event.target to get the name and value of the input
    setCourseMainDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  // add course in database =====================================================
  const AddCourseInDbHandeler = () => {
    console.log(newCourseDetails);
    console.log({ ...courseMainDetails, content: newCourseDetails });
    updadteUserFn({
      ...user,
      courses: [
        ...(user.courses ? user.courses : []),
        { ...courseMainDetails, content: newCourseDetails },
      ],
    });
    handleClose();
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
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
          // onClick={handleClickOpen}
        >
          <AddCircleIcon
            style={{
              width: "50%",
              height: "50%",
            }}
            color="secondary"
          />
        </Box>
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth
        maxWidth="lg"
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Add new course
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "2rem",
            }}
          >
            <TextField
              label="Course Name"
              name="courseName"
              onChange={courseMainDetailsFn}
              value={courseMainDetails.courseName}
            />
            <TextField
              label="Course Description"
              name="courseDescription"
              onChange={courseMainDetailsFn}
              value={courseMainDetails.courseDescription}
            />
            <TextField
              label="Course Time"
              name="courseTime"
              onChange={courseMainDetailsFn}
              value={courseMainDetails.courseTime}
            />
            <TextField
              label="Course Price"
              name="coursePrice"
              onChange={courseMainDetailsFn}
              value={courseMainDetails.coursePrice}
            />
          </Box>
          <hr />
          <Box>
            <Box>
              {" "}
              <AddCourseDialogUpload
                newCourseDetailsHandeler={newCourseDetailsHandeler}
              />
            </Box>
          </Box>

          {/* <TextField label="course " /> */}
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            color="secondary"
            autoFocus
            onClick={handleClose}
          >
            cancel
          </Button>
          <Button
            variant="contained"
            color="secondary"
            autoFocus
            onClick={AddCourseInDbHandeler}
          >
            Add Course
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}
