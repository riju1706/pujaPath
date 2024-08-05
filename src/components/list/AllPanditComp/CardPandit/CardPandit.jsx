import {
  Box,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { Button, Card } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { useNavigate } from "react-router-dom";

export default function CardPandit({ details }) {
  const navigate = useNavigate();
  return (
    <Box width="250px">
      <Card sx={{ borderRadius: "15px" }}>
        <CardMedia
          component="img"
          image={details.url ? details.url : "/img/pandit.jpg"}
          alt="panditimage"
          sx={{ height: "150px" }}
        />
        <CardContent sx={{ height: "150px" }}>
          <Stack sx={{ alignItems: "flex-end" }}>
            <Rating precision={0.5} readOnly />
          </Stack>

          <Typography gutterBottom variant="body1">
            <strong> Name:</strong> {details.fName} {details.lName}
          </Typography>
          <Typography gutterBottom variant="body1">
            <strong> Puja: </strong>
            {details.pujaName &&
              details.pujaName.map((i, index) => (
                <span key={index}>{i} Puja, </span>
              ))}
          </Typography>
          <Typography gutterBottom variant="body1" component="div">
            <strong>Place:</strong> {details.city && details.city}
          </Typography>
        </CardContent>
        <CardActions sx={{ marginBottom: ".5rem" }}>
          <Button
            variant="outlined"
            sx={{ fontSize: "10px" }}
            onClick={() => {
              navigate(`/pandit/${details.id}`);
            }}
          >
            View More
          </Button>
          <Button variant="contained" color="secondary">
            Book Pandit
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
