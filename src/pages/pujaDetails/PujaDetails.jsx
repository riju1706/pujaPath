import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { allPuja } from "../../data";
import { Box, Button, Typography } from "@mui/material";

export default function PujaDetails() {
  const [pujaDetails, setPujaDetails] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state

  const { id } = useParams();

  useEffect(() => {
    const res = allPuja.find(
      (puja) => puja.pujaName.toLocaleLowerCase() == id.toLocaleLowerCase()
    );
    setPujaDetails(res);
    setLoading(false); // Set loading to false after data is fetched
  }, []);

  // Render loading state
  if (loading) {
    return <div>Loading...</div>;
  }
  if (!pujaDetails) {
    return <div>Error: Puja details not found</div>;
  }
  return (
    <Box>
      <Box sx={{ display: "flex", height: "80vh" }}>
        <Box sx={{ flex: 1, overflow: "hidden" }}>
          <Box
            sx={{
              backgroundColor: "secondary.dark",
              height: "20rem",
              width: "50rem",
              transform: "rotate(-50deg)",
              position: "relative",
              top: 0,
              left: -350,
              zIndex: 1,
            }}
          ></Box>
          <img
            style={{
              position: "relative",
              top: "-16rem",
              left: "4rem",
              height: "60%",
              width: "90%",
              borderRadius: "20px",
              objectFit: "cover",
              zIndex: 2,
            }}
            src={pujaDetails.image}
          />
        </Box>
        <Box
          sx={{
            flex: 1,
            padding: "1rem 0 0 3rem",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Box
            sx={{
              backgroundColor: "secondary.dark",
              height: "20rem",
              width: "50rem",
              transform: "rotate(-50deg)",
              position: "absolute",
              bottom: 0,
              right: "-35rem",
              zIndex: 1,
            }}
          ></Box>
          <Box
            sx={{
              position: "relative",
              zIndex: 5,
              overflow: "visible", // Allow overflow to be visible
            }}
          >
            <Typography variant="h4" gutterBottom>
              {pujaDetails.pujaName}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {pujaDetails.summary}
            </Typography>
            <hr />
            <Typography variant="body1" gutterBottom>
              <strong>Details:</strong> {pujaDetails.pujaDetails}
            </Typography>
            <hr />
            <Typography variant="body1" gutterBottom>
              <strong>History:</strong> {pujaDetails.pujaDetails}
            </Typography>
            <hr />
            <Link to={`/searchPandit/${id}`}>
              <Button color="secondary" variant="contained">
                Book Pandit
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
      <Box sx={{ padding: "1rem 5rem" }}>
        <Typography variant="body1" gutterBottom>
          <strong>Why To Perform:</strong>
          {pujaDetails.pujaDetails}
        </Typography>

        <hr />
        <Typography variant="body1" gutterBottom>
          <strong>When To Perform:</strong>
          {pujaDetails.pujaDate}
        </Typography>
        <hr />
        <Typography variant="body1" gutterBottom>
          <strong>How to Perform:</strong>
          {pujaDetails.pujaDetails}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>What To Perform:</strong>
          {pujaDetails.pujaDate}
        </Typography>
        <hr />
        <Typography variant="body1" gutterBottom>
          <strong>What to Offer:</strong>
          {pujaDetails.pujaDetails}
        </Typography>
        <hr />
        <Typography variant="body1" gutterBottom>
          <strong>Benifits of puja:</strong>
          {pujaDetails.pujaDate}
        </Typography>
        <hr />
        <Typography variant="body1" gutterBottom>
          <strong>Mantras:</strong>
          {pujaDetails.pujaDetails}
        </Typography>
        <hr />
        <Typography variant="body1" gutterBottom>
          <strong>Samagri:</strong>
          {pujaDetails.pujaDetails}
        </Typography>
        <hr />
        <Typography variant="body1" gutterBottom>
          <strong>Flowers Colours:</strong>
          {pujaDetails.pujaDetails}
        </Typography>
        <hr />
        <Typography variant="body1" gutterBottom>
          <strong>Clothes Colors:</strong>
          {pujaDetails.pujaDetails}
        </Typography>
        <hr />
        <Typography variant="body1" gutterBottom>
          <strong>Prasad preparation link:</strong>
          {pujaDetails.pujaDetails}
        </Typography>
        <hr />
        <Typography variant="body1" gutterBottom>
          <strong>Pushpanjali Mantra:</strong>
          {pujaDetails.pujaDetails}
        </Typography>

        <hr />
      </Box>
    </Box>
  );
}
