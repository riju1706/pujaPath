import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {
  Box,
  Button,
  CardActionArea,
  Dialog,
  FormControlLabel,
  Stack,
  TextField,
} from "@mui/material";
import Switch from "@mui/material/Switch";
import AddIcon from "@mui/icons-material/Add";
import EditSamagriDialog from "../panditSamagriList/components/EditSamagriDialog";
import { pujaSamagriList } from "../../../../../../../../data";
export default function HavanSection({ updadteUserFn, user }) {
  const [checked, setChecked] = React.useState(
    user.mySamagriList && user.mySamagriList.myHavanSamagriList ? true : false
  );
  const initialPrice =
    user.mySamagriList && user.mySamagriList.myHavanSamagriList?.price;
  const [price, setPrice] = React.useState(initialPrice || "");
  const initialDuration =
    user.mySamagriList &&
    user.mySamagriList.myHavanSamagriList &&
    user.mySamagriList.myHavanSamagriList?.duration &&
    user.mySamagriList.myHavanSamagriList?.duration[0];

  const initialDurationUnit =
    user.mySamagriList &&
    user.mySamagriList.myHavanSamagriList &&
    user.mySamagriList.myHavanSamagriList?.duration &&
    user.mySamagriList.myHavanSamagriList?.duration[1];

  const [duration, setDuration] = React.useState(initialDuration || "");
  const [unit, setUnit] = React.useState(initialDurationUnit || "");
  const [edit, setEdit] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = ({ user, updadteUserFn }) => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // React.useEffect(() => {
  //   setChecked(
  // }, []);

  // for edit and set price and duration handeler ===============
  const doneHandler = () => {
    updadteUserFn({
      ...user,
      mySamagriList: {
        ...user.mySamagriList, // Spread the existing mySamagriList properties
        myHavanSamagriList: {
          ...user.mySamagriList?.myHavanSamagriList, // Spread existing myHavanSamagriList properties
          price: price,
          duration: [duration, unit],
        },
      },
    });
    setEdit(false);
  };
  //
  const switchHandeler = () => {
    setChecked((prev) => {
      if (prev) {
        updadteUserFn({
          ...user,
          mySamagriList: {
            myPujaWiseSamagriList: user.mySamagriList?.myPujaWiseSamagriList,
            myCommonSamariList: user.myCommonSamariList?.myCommonSamariList,
          },
        });
        setEdit(false);
      }
      return !prev;
    });
  };

  return (
    <Box sx={{ padding: "1rem", marginTop: "2rem" }}>
      <Box>
        <FormControlLabel
          control={
            <Switch
              color="secondary"
              sx={{ fontSize: "15rem" }}
              checked={checked}
              onChange={switchHandeler}
              inputProps={{ "aria-label": "controlled" }}
            />
          }
          label="Havan"
        />
      </Box>

      {checked && (
        <Box>
          <Stack direction="row">
            {edit && (
              <Stack direction="row" sx={{ gap: "1rem" }}>
                <TextField
                  label="price"
                  size="small"
                  value={price}
                  sx={{ width: "7rem" }}
                  onChange={(e) => setPrice(e.target.value)}
                />
                <TextField
                  label="duration"
                  value={duration}
                  size="small"
                  sx={{ width: "7rem" }}
                  onChange={(e) => setDuration(e.target.value)}
                />
                <FormControl>
                  <InputLabel id="demo-simple-select-label">Unit</InputLabel>
                  <Select
                    size="small"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={unit}
                    label="Unit"
                    sx={{ width: "7rem" }}
                    onChange={(e) => setUnit(e.target.value)}
                  >
                    <MenuItem value="Min">Min</MenuItem>
                    <MenuItem value="Hr">Hr</MenuItem>
                  </Select>
                </FormControl>{" "}
                <Button
                  variant="outlined"
                  sx={{
                    color: "secondary.main",
                    borderColor: "secondary.main",
                    marginRight: "2rem",
                  }}
                  onClick={handleClickOpen}
                >
                  <AddIcon color="secondary" sx={{ fontSize: "2rem" }} />
                  Add item
                </Button>
              </Stack>
            )}
            <Button
              variant="contained"
              sx={{
                backgroundColor: "secondary.main",
                "&:hover": { backgroundColor: "secondary.dark" },
              }}
              onClick={() => (edit ? doneHandler() : setEdit(true))}
            >
              {edit ? "Done" : "Edit"}
            </Button>
          </Stack>
          <Card sx={{ maxWidth: 345, marginTop: "1rem" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="/img/havan.jpg"
                alt="Havan"
              />
              {user.mySamagriList?.myHavanSamagriList && (
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ textAlign: "center" }}
                  >
                    <storong> Havan</storong>
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    <strong> Price:</strong>{" "}
                    {user.mySamagriList &&
                      user.mySamagriList.myHavanSamagriList?.price}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    <strong> Duration:</strong>{" "}
                    {user.mySamagriList.myHavanSamagriList &&
                      user.mySamagriList.myHavanSamagriList?.duration &&
                      user.mySamagriList.myHavanSamagriList?.duration[0]}
                    {user.mySamagriList.myHavanSamagriList &&
                      user.mySamagriList.myHavanSamagriList?.duration &&
                      user.mySamagriList.myHavanSamagriList?.duration[1]}
                  </Typography>
                </CardContent>
              )}
            </CardActionArea>
          </Card>
        </Box>
      )}
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
          samagriCatagory="2"
          pujaSamagriList={pujaSamagriList}
        />
      </Dialog>
    </Box>
  );
}
