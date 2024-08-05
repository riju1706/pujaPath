import { createContext, useContext } from "react";
import React, { useEffect, useState } from "react";
import "./home.css";
import HomeCarousel from "../../components/UI/HomeCarousel/HomeCarousel";
import axios from "axios";
import PujaTypeList from "./components/pujaTypeList/PujaTypeList";
import { Box, Stack, Typography } from "@mui/material";
import AllPanditContainer from "../../HomePageComp/allPandit/AllPanditContainer";
import CardPandit from "../../components/list/AllPanditComp/CardPandit/CardPandit";
import DateWisePujaList from "./components/DateWisePujaList/DateWisePujaList";
import LineCourseList from "./components/LinecourseList/LineCourseList";
import PujaSamagriList from "./components/PujaSamagriList";

export default function Home() {
  const [allPandit, setAllPandit] = useState([]);
  useEffect(() => {
    const fetchAllPandit = async () => {
      const res = await axios.get("http://localhost:8000/posts?userType=1");

      setAllPandit(res.data);
    };
    fetchAllPandit();
  }, []);
  return (
    <Box sx={{ backgroundColor: "#efe" }}>
      <HomeCarousel />
      <Stack direction="row">
        <Stack sx={{ flex: 3, height: "100%" }}>
          <PujaTypeList />
        </Stack>
        <Stack
          sx={{
            flex: 1,
            alignItems: "center",
            overflowY: "scroll",
            height: "800px",
            marginTop: "1.5rem",
          }}
        >
          {allPandit.map((i, index) => (
            <CardPandit key={index} details={i} />
          ))}
        </Stack>
      </Stack>
      <Box sx={{ padding: "1rem", marginBottom: "3rem" }}>
        <Typography
          sx={{
            marginLeft: "1.5rem",
            color: "secondary.main",
            fontWeight: "550",
          }}
          gutterBottom
          variant="h4"
        >
          Next Puja
        </Typography>
        <DateWisePujaList />
      </Box>
      <Box sx={{ padding: "1rem", marginBottom: "3rem" }}>
        <Typography
          sx={{
            marginLeft: "1.5rem",
            color: "secondary.main",
            fontWeight: "550",
          }}
          gutterBottom
          variant="h4"
        >
          Explore Our courses
        </Typography>
        <LineCourseList />
      </Box>
      <Box sx={{ padding: "1rem", marginBottom: "3rem" }}>
        <Typography
          sx={{
            marginLeft: "1.5rem",
            color: "secondary.main",
            fontWeight: "550",
          }}
          gutterBottom
          variant="h4"
        >
          Explore Our Samagri
        </Typography>
        <PujaSamagriList />
      </Box>
    </Box>
  );
}
