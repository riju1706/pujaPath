import React from "react";
import Drawer from "@mui/material/Drawer";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  ListItemText,
  Paper,
  Rating,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { useDispatch } from "react-redux";
import { removeToCart } from "../../../Redux/cartSlice";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export default function SideDrawer({ drawerOpen, toggleDrawer, drawerItem }) {
  const dispatch = useDispatch();

  return (
    <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
      <List sx={{ padding: "1.5rem" }}>
        {drawerItem.map((i, a) => (
          <Box key={a} sx={{ marginBottom: ".5rem" }}>
            <Stack
              direction="row"
              sx={{ alignItems: "center", justifyContent: "space-around" }}
            >
              {/* <ListItem button onClick={toggleDrawer}>
            <ListItemText primary={a + 1} />
          </ListItem> */}
              <Avatar alt="pandit" src={i.user.url} />
              <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
                <ListItem button onClick={toggleDrawer}>
                  <ListItemText primary={`${i.user.fName} ${i.user.lName}`} />
                </ListItem>
                <ListItem button onClick={toggleDrawer}>
                  <ListItemText primary={`${i.selectPuja} Puja`} />
                </ListItem>
                <Stack sx={{ alignItems: "center" }}>
                  <ListItemText
                    primary={`${i.DateTime.format("DD-MM-YYYY")}`}
                  />
                  <ListItemText primary={`${i.DateTime.format("HH-mm")}`} />
                </Stack>
              </Box>
              <Stack
                direction="row"
                sx={{ gap: ".5rem", alignItems: "center" }}
              >
                <EditIcon
                  onClick={() => {
                    dispatch(removeToCart(i.user.id));
                    toggleDrawer();
                  }}
                  color="secondary"
                  sx={{ cursor: "pointer" }}
                />

                <DeleteIcon
                  onClick={() => dispatch(removeToCart(i.user.id))}
                  color="error"
                  sx={{ cursor: "pointer" }}
                />
              </Stack>
            </Stack>
          </Box>
        ))}
        <Button
          variant="contained"
          sx={{
            backgroundColor: "secondary.main",
            marginTop: "3rem",
            "&:hover": { backgroundColor: "secondary.dark" },
            float: "right",
          }}
        >
          Proceed to Checkout
        </Button>
      </List>
    </Drawer>
  );
}
