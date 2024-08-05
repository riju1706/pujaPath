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
import { useDispatch } from "react-redux";
import { selectPujaAction } from "../../../Redux/selectPujaSlice";

export default function CardPandit({ details, selectPuja }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // console.log(details);
  console.log(selectPuja);

  return (
    <Box width="300px">
      <Card sx={{ borderRadius: "15px" }}>
        <CardMedia
          component="img"
          image={details.url ? details.url : "/img/pandit.jpg"}
          alt="panditimage"
          sx={{ height: "200px" }}
        />
        <CardContent sx={{ height: "190px" }}>
          <Stack sx={{ alignItems: "flex-end" }}>
            <Rating precision={0.5} readOnly />
          </Stack>

          <Typography gutterBottom variant="body1">
            <strong> Name:</strong> {details.fName} {details.lName}
          </Typography>
          <Typography gutterBottom variant="body1">
            <strong> Puja: </strong>
            {details &&
              Object.keys(details.mySamagriList.myPujaWiseSamagriList).map(
                (i, index) => <span key={index}>{i} Puja </span>
              )}
          </Typography>
          <Typography gutterBottom variant="body1" component="div">
            <strong>Place:</strong> {details.city && details.city}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            marginBottom: "1rem",
            display: "flex",
            justifyContent: "right",
          }}
        >
          {/* <Button
            variant="outlined"
            onClick={() => {
              navigate(`/pandit/${details.id}`);
            }}
          >
            View More
          </Button> */}
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              navigate(`/pandit/${details.id}`);
              dispatch(selectPujaAction(selectPuja));
            }}
          >
            Book Pandit
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
