import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function PujaTypeCard({ puja }) {
  const navigate = useNavigate();

  return (
    <>
      <Card sx={{ maxWidth: 345, borderRadius: "20px" }} elevation={4}>
        <CardMedia
          sx={{ height: 150 }}
          image={puja.image}
          itle="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {puja.pujaName}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {puja.pujaDate}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {puja.pujaDetails}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "end", margin: "0 .5rem .5rem 0" }}>
          <Button
            variant="contained"
            size="small"
            onClick={() => navigate(`/pujaDetails/${puja.pujaName}`)}
            sx={{
              backgroundColor: "secondary",
              "&:hover": {
                backgroundColor: "secondary",
              },
            }}
          >
            Learn More
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
