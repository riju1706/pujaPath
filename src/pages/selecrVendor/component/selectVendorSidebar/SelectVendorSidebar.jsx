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
import { Checkbox, Stack, TextField, Typography } from "@mui/material";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import DoneIcon from "@mui/icons-material/Done";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectVendorSidebar({
  open,
  toggleDrawer,
  samagriList,
  selectedSamagriFn,
  selectedSamagriList,
  selecSamagariEditFn,
}) {
  const [age, setAge] = React.useState("");
  const [textQuantity, setTextQuantity] = React.useState("");
  const [unitValue, setUnitValue] = React.useState("");

  const [edit, setEdit] = React.useState(false);
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleEdit = (text) => {
    setEdit(text);
    setTextQuantity(selectedSamagriList[text][0]);
    setUnitValue(selectedSamagriList[text][1]);
  };
  const doneHandeler = (text) => {
    setEdit(false);
    selecSamagariEditFn({
      ...selectedSamagriList,
      [text]: [textQuantity, unitValue],
    });
  };
  console.log(selectedSamagriList);
  return (
    <div>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }} role="presentation">
          <List>
            {Object.entries(samagriList).map(([text, value], index) => (
              <>
                <ListItem
                  key={index}
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "1fr 2fr 1fr 1fr",
                    padding: "0 .3rem",
                  }}
                >
                  {/* <ListItemButton sx={{ margin: 0, padding: 0 }}> */}
                  <ListItemIcon>
                    <Checkbox
                      color="secondary"
                      checked={selectedSamagriList[text] ? true : false}
                      value={text}
                      onChange={(e) => selectedSamagriFn(e.target.value)}
                    />
                  </ListItemIcon>
                  {/* </ListItemButton> */}
                  <ListItemText primary={text} sx={{ margin: 0, padding: 0 }} />

                  <ListItemText
                    sx={{ margin: 0, padding: 0 }}
                    primary={Object.entries(selectedSamagriList).map(
                      ([item, value]) => {
                        if (item == text) {
                          return (
                            <Typography variant="body1">
                              {value[0]}
                              {value[1]}
                            </Typography>
                          );
                        }
                      }
                    )}
                  />

                  {selectedSamagriList[text] &&
                    (edit == text ? (
                      <DoneIcon
                        sx={{ color: "secondary.main", cursor: "pointer" }}
                        onClick={() => {
                          doneHandeler(text);
                        }}
                      />
                    ) : (
                      <ModeEditOutlineIcon
                        sx={{ color: "secondary.main", cursor: "pointer" }}
                        onClick={() => {
                          handleEdit(text);
                        }}
                      />
                    ))}
                </ListItem>
                {edit == text && (
                  <Stack
                    direction="row"
                    sx={{
                      padding: "0 1.5rem",
                      gap: "1rem",
                      marginBottom: "1rem",
                    }}
                  >
                    <TextField
                      size="small"
                      label="quantity"
                      value={textQuantity}
                      onChange={(e) => setTextQuantity(e.target.value)}
                    />
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Unit
                      </InputLabel>
                      <Select
                        size="small"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={unitValue}
                        label="Unit"
                        onChange={(e) => setUnitValue(e.target.value)}
                      >
                        <MenuItem value="Pcs">Pcs</MenuItem>
                        <MenuItem value="kg">kg</MenuItem>
                        <MenuItem value="g">g</MenuItem>
                      </Select>
                    </FormControl>
                  </Stack>
                )}
              </>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </div>
  );
}
