import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { theme } from "../../App";
import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function CourseHomeCard({ course }) {
  const [favorites, setFavorites] = useState([]);
  const toggleFavorite = (itemId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(itemId)
        ? prevFavorites.filter((id) => id !== itemId)
        : [...prevFavorites, itemId]
    );
  };
  return (
    <>
      <Card
        sx={{ width: "299px", borderRadius: "20px", position: "relative" }}
        elevation={4}
      >
        <IconButton
          sx={{ position: "absolute", right: 0 }}
          onClick={() => toggleFavorite(course.id)}
        >
          {favorites.includes(course.id) ? (
            <FavoriteIcon color="secondary" />
          ) : (
            <FavoriteBorderIcon />
          )}
        </IconButton>
        <CardMedia
          sx={{ height: 200 }}
          image={course.image}
          itle="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {course.courseName}
          </Typography>
          <Typography gutterBottom variant="body1" component="div">
            <storng>Trainer: </storng> {course.trainerName}
          </Typography>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="body2" color="text.secondary">
              <strong>Price:</strong>
              {course.price}
            </Typography>
            <Rating precision={0.2} value={course.rating} readOnly />
          </Stack>
        </CardContent>
        <CardActions
          sx={{ justifyContent: "center", margin: "0 .5rem .5rem 0" }}
        >
          <Button
            gutterBottom
            variant="contained"
            size="small"
            sx={{
              backgroundColor: theme.palette.secondary.main,
              "&:hover": {
                backgroundColor: theme.palette.secondary.dark,
              },
            }}
          >
            Learn More
          </Button>
          <Button
            gutterBottom
            variant="contained"
            size="small"
            sx={{
              backgroundColor: theme.palette.secondary.dark,
              "&:hover": {
                backgroundColor: theme.palette.secondary.main,
              },
            }}
          >
            Buy Course
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
