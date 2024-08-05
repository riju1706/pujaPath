import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import AddIcon from "@mui/icons-material/Add";
import { Avatar, Stack, TextField, Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import DoneIcon from "@mui/icons-material/Done";
import { useDispatch } from "react-redux";
import { AddVendorAndSamagriAction } from "../../../Redux/vendorSlice";

export default function AddExtraSamagriSideDialog({ vendorAndSamagri }) {
  // hook ====================================================
  const [open, setOpen] = React.useState(false);
  const [filteredSamagri, setFilteredSamagri] = React.useState([]);
  const [edit, setEdit] = React.useState(false);
  const [quantity, setQuantity] = React.useState("");
  const [unit, setUnit] = React.useState("");

  const dispatch = useDispatch();

  React.useEffect(() => {
    const filter = vendorAndSamagri.vendorDetails.pujaSamagri.filter(
      (item3) => {
        const keys = vendorAndSamagri.samagriList.map(
          (item) => Object.keys(item)[0]
        );
        return !keys.includes(item3.selectItem);
      }
    );
    setFilteredSamagri(filter);
  }, [vendorAndSamagri]);
  console.log(filteredSamagri);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  // for adding new samagri from drawer=================================
  const addNewSamagri = (item) => {
    console.log(item);
    const itemObj = {
      [item.selectItem]: {
        quantity: [quantity, unit],
        pricePerUnit: [[item.price, item.perUnit]],
        userPrice: item.price * quantity,
      },
    };
    // setEdit(false);
    dispatch(AddVendorAndSamagriAction(itemObj));
  };

  return (
    <Box sx={{ paddinh: "2rem" }}>
      <Button onClick={toggleDrawer(true)}>
        <AddIcon />
        Add Item
      </Button>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }} role="presentation">
          <Typography
            variant="h6"
            sx={{ textAlign: "center", marginTop: ".5rem" }}
            gutterBottom
          >
            <strong>{vendorAndSamagri.vendorDetails.shopName}</strong>
          </Typography>
          <Avatar
            variant="rounded"
            alt="Travis Howard"
            src={vendorAndSamagri.vendorDetails.url}
            sx={{
              width: "90%",
              height: "auto",
              overflow: "hidden",
              margin: "auto",
              borderRadius: "20px",
            }}
          />
          <Box sx={{ padding: ".5rem 1rem" }}>
            {filteredSamagri.map((item, index) => {
              return (
                <>
                  <Stack
                    direction="row"
                    sx={{
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: ".5rem",
                    }}
                  >
                    <Typography>{item.selectItem}</Typography>
                    <Typography>
                      {item.price}/{item.perUnit}
                    </Typography>
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={() => {
                        edit == item.selectItem
                          ? addNewSamagri(item)
                          : setEdit(item.selectItem);
                      }}
                    >
                      {edit == item.selectItem ? <DoneIcon /> : <AddIcon />}
                    </Button>
                  </Stack>
                  {edit === item.selectItem && (
                    <Stack
                      direction="row"
                      sx={{ gap: "1rem", marginBottom: "1rem" }}
                    >
                      <TextField
                        label="Quantity"
                        size="small"
                        onChange={(e) => setQuantity(e.target.value)}
                        value={quantity}
                      />
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Unit
                        </InputLabel>
                        <Select
                          size="small"
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={unit}
                          label="Unit"
                          onChange={(e) => setUnit(e.target.value)}
                        >
                          <MenuItem value="Pcs">Pcs</MenuItem>
                          <MenuItem value="Kg">Kg</MenuItem>
                          <MenuItem value="g">g</MenuItem>
                          <MenuItem value="Ltr">Ltr</MenuItem>
                          <MenuItem value="ml">ml</MenuItem>
                        </Select>
                      </FormControl>
                    </Stack>
                  )}
                </>
              );
            })}
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
}
