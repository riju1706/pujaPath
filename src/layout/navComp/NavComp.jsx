import React, { useContext, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { closeContext } from "../../closeContext/closeContext";
import {
  AppBar,
  Avatar,
  Badge,
  Button,
  IconButton,
  Stack,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import CameraIcon from "@mui/icons-material/Camera";
import TabList from "@mui/lab/TabList";
import { Link, useNavigate } from "react-router-dom";
import MenuAvatar from "./menuAvatar/MenuAvatar";
import axios from "axios";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import ThemeBox from "./ThemeBox";

export default function NavComp() {
  const [anchorEl, setAnchorEl] = useState(null); // state for menu anchor
  const { registeDialogOpen } = useContext(closeContext);

  const [tabValue, setTabValue] = useState("0"); // Changed to string value
  const navigate = useNavigate();

  // for getting user details from redux
  const user = useSelector((i) => {
    console.log(i.user);
    return i.user;
  });

  const cartItem = useSelector((i) => {
    return i.cart.items;
  });

  const handleChange = (event, newValue) => {
    setTabValue(newValue);

    switch (newValue) {
      case "0": // Corrected to string value
        navigate("/pujaOffering");
        break;
      case "1": // Corrected to string value
        navigate("/vendor");
        break;
      case "2": // Corrected to string value
        navigate("/searchPuja");
        break;
      case "3": // Corrected to string value
        navigate("/aboutUs");
        break;
      case "4": // Corrected to string value
        navigate("/support");
        break;
      default:
        break;
    }
  };

  // for hover on puja Offering
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
    console.log(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "secondary.main",
        borderBottom: "1px solid gray",
        zIndex: 999,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <IconButton component={Link} to="/">
          <CameraIcon style={{ fontSize: 40, color: "#fff" }} />
          <Typography variant="h4" color="#fff">
            PujaPath
          </Typography>
        </IconButton>

        <TabContext value={tabValue}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              color: "#fff",
              display: { xs: "none", md: "flex" },
            }}
          >
            <TabList onChange={handleChange}>
              <Tab
                label="Puja offering"
                sx={{
                  color: "#fff",
                  "&.Mui-selected": {
                    color: "#000",
                    borderBottomColor: "#0000s00",
                  },
                }}
                value="0" // Corrected to string value
              />
              <Tab
                label="Services"
                sx={{
                  color: "#fff",
                  "&.Mui-selected": {
                    color: "#000",
                    borderBottomColor: "#0000s00",
                  },
                }}
                value="1" // Corrected to string value
                aria-owns={anchorEl ? "puja-offering-menu" : undefined}
                aria-haspopup="true"
                onMouseEnter={handleMenuOpen}
                // onMouseLeave={handleMenuClose}
              />
              <Tab
                label="Culture"
                sx={{
                  color: "#fff",
                  "&.Mui-selected": {
                    color: "#000",
                    borderBottomColor: "#0000s00",
                  },
                }}
                value="2" // Corrected to string value
              />
              <Tab
                label="About us"
                sx={{
                  color: "#fff",
                  "&.Mui-selected": {
                    color: "#000",
                    borderBottomColor: "#0000s00",
                  },
                }}
                value="3" // Corrected to string value
              />
              <Tab
                label="Support"
                sx={{
                  color: "#fff",
                  "&.Mui-selected": {
                    color: "#000",
                    borderBottomColor: "#0000s00",
                  },
                }}
                value="4" // Corrected to string value
              />
            </TabList>
          </Box>
        </TabContext>

        <Stack direction="row" sx={{ alignItems: "center" }}>
          <ThemeBox />
          <Link to="/cart">
            <Badge badgeContent={cartItem.length} color="secondary">
              <ShoppingCartOutlinedIcon color="action" />
            </Badge>
          </Link>
          <Box>
            {/* // for hover menu ========================================= */}
            <Menu
              id="puja-offering-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              MenuListProps={{ onMouseLeave: handleMenuClose }}
            >
              <MenuItem
                onClick={() => {
                  handleMenuClose();
                  navigate("/pujaOption1");
                }}
              >
                Pandit
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleMenuClose();
                  navigate("/pujaOption2");
                }}
              >
                Samagri
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleMenuClose();
                  navigate("/pujaOption3");
                }}
              >
                Puja Trainee
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleMenuClose();
                  navigate("/pujaOption3");
                }}
              >
                Vendor
              </MenuItem>
            </Menu>
          </Box>
          <Box>
            {user.id ? (
              <MenuAvatar img={user.url} />
            ) : (
              <Button
                color="success"
                varient="contained"
                sx={{
                  color: "#fff",
                  "&.Mui-selected": {
                    color: "#000",
                    borderBottomColor: "#0000s00",
                  },
                }}
                onClick={() => registeDialogOpen()}
              >
                Login
              </Button>
            )}
          </Box>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
