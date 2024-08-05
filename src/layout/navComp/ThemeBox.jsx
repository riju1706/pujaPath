import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import { useDispatch } from "react-redux";
import { themeAction } from "../../Redux/themeSlice";

export default function ThemeBox() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const dispatch = useDispatch();
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ mr: 1 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Box
              sx={{
                height: "30px",
                width: "30px",
                backgroundColor: "#eee",
                borderRadius: "50%",
              }}
            >
              <ColorLensIcon />
            </Box>{" "}
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem sx={{ display: "flex", gap: ".5rem" }}>
          <Box
            sx={{
              height: "30px",
              width: "30px",
              backgroundColor: "#3f51b5",
              borderRadius: "50%",
            }}
            onClick={() => {
              dispatch(themeAction("#3f51b5"));
              handleClose();
            }}
          ></Box>
          <Box
            sx={{
              height: "30px",
              width: "30px",
              backgroundColor: "#4a0",
              borderRadius: "50%",
            }}
            onClick={() => {
              dispatch(themeAction("#4a0"));
              handleClose();
            }}
          ></Box>
          <Box
            sx={{
              height: "30px",
              width: "30px",
              backgroundColor: "#d50000",
              borderRadius: "50%",
            }}
            onClick={() => {
              dispatch(themeAction("#d50000"));
              handleClose();
            }}
          ></Box>
          <Box
            sx={{
              height: "30px",
              width: "30px",
              backgroundColor: "#827717",
              borderRadius: "50%",
            }}
            onClick={() => {
              dispatch(themeAction("#827717"));
              handleClose();
            }}
          ></Box>

          <Box
            sx={{
              height: "30px",
              width: "30px",
              backgroundColor: "#ff5722",
              borderRadius: "50%",
            }}
            onClick={() => {
              dispatch(themeAction("#ff5722"));
              handleClose();
            }}
          ></Box>
          <Box
            sx={{
              height: "30px",
              width: "30px",
              backgroundColor: "#455a64",
              borderRadius: "50%",
            }}
            onClick={() => {
              dispatch(themeAction("#455a64"));
              handleClose();
            }}
          ></Box>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
