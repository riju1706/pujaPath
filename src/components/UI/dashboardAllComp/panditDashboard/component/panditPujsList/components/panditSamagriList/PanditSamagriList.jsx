import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Box } from "@mui/material";
import CommonPuja from "./components/CommonPuja";
import PujaWiseSamagri from "./components/PujaWiseSamagri";
import HavanSamagri from "./components/HavanSamagri";

export default function PanditSamagriList({ user, updadteUserFn }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="disabled tabs example"
          sx={{ width: "100%" }}
          centered
        >
          <Tab label="Common Samagri" />
          <Tab label="Puja wise Samagri" />
          <Tab label="Havan samagri" />
        </Tabs>
      </Box>
      <Box>
        {value == 0 && <CommonPuja user={user} updadteUserFn={updadteUserFn} />}{" "}
        {value == 1 && (
          <PujaWiseSamagri user={user} updadteUserFn={updadteUserFn} />
        )}
        {value == 2 && (
          <HavanSamagri user={user} updadteUserFn={updadteUserFn} />
        )}
      </Box>
    </Box>
  );
}
