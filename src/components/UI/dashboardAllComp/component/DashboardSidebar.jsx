import {
  AppBar,
  Avatar,
  Box,
  Paper,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React, { useRef, useState } from "react";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import { TabContext, TabList, TabPanel } from "@mui/lab";

export default function DashboardSidebar({
  tabs,
  user,
  handelTabChangeFn,
  handleClickOpen,
}) {
  const fileInputRef = useRef(null);
  const [dashboardTab, setDashboardTab] = useState(1);

  console.log("side");

  const handelChange = (a, b) => {
    setDashboardTab(b);
    handelTabChangeFn(b);
  };

  return (
    <div>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ marginTop: "1.5rem", position: "relative" }}
      >
        <Avatar
          alt="Remy Sharp"
          src={user.url || "/img/male.png"}
          sx={{ width: 160, height: 160, border: "3px solid black" }}
          onClick={handleClickOpen}
        />
      </Box>
      <Typography color="white" variant="h6" sx={{ textAlign: "center" }}>
        {user.fName} {user.lName}
      </Typography>
      <Typography color="white" variant="body2" sx={{ textAlign: "center" }}>
        <PlaceOutlinedIcon />
        {user.city}
      </Typography>
      <Box>
        <TabContext value={dashboardTab}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              orientation="vertical"
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                marginTop: "1.5rem",
              }}
              onChange={handelChange}
              value={dashboardTab}
            >
              {tabs.tab0 && (
                <Tab
                  label={tabs.tab0}
                  sx={{
                    color: dashboardTab === 0 ? "black" : "white",
                    backgroundColor: dashboardTab === 0 ? "#ddd" : "inherit",
                  }}
                  value={0}
                />
              )}
              {tabs.tab1 && (
                <Tab
                  label={tabs.tab1}
                  sx={{
                    color: dashboardTab === 1 ? "black" : "white",
                    backgroundColor: dashboardTab === 1 ? "#ddd" : "inherit",
                  }}
                  value={1}
                />
              )}
              {tabs.tab2 && (
                <Tab
                  label={tabs.tab2}
                  sx={{
                    color: dashboardTab === 2 ? "black" : "white",
                    backgroundColor: dashboardTab === 2 ? "#ddd" : "inherit",
                  }}
                  value={2}
                />
              )}
              {tabs.tab3 && (
                <Tab
                  label={tabs.tab3}
                  sx={{
                    color: dashboardTab === 3 ? "black" : "white",
                    backgroundColor: dashboardTab === 3 ? "#ddd" : "inherit",
                  }}
                  value={3}
                />
              )}
              {tabs.tab4 && (
                <Tab
                  label={tabs.tab4}
                  sx={{
                    color: dashboardTab === 4 ? "black" : "white",
                    backgroundColor: dashboardTab === 4 ? "#ddd" : "inherit",
                  }}
                  value={4}
                />
              )}
              {tabs.tab5 && (
                <Tab
                  label={tabs.tab5}
                  sx={{
                    color: dashboardTab === 5 ? "black" : "white",
                    backgroundColor: dashboardTab === 5 ? "#ddd" : "inherit",
                  }}
                  value={5}
                />
              )}
              {tabs.tab6 && (
                <Tab
                  label={tabs.tab6}
                  sx={{
                    color: dashboardTab === 6 ? "black" : "white",
                    backgroundColor: dashboardTab === 6 ? "#ddd" : "inherit",
                  }}
                  value={6}
                />
              )}
            </Tabs>
          </Box>
        </TabContext>
      </Box>
    </div>
  );
}
