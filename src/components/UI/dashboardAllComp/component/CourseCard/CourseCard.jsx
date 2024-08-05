import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, LinearProgress, Rating, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function CourdeCard({ course }) {
  console.log(course);
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        maxWidth: 345,
        minWidth: "300px",
        borderRadius: "20px",
        cursor: "pointer",
      }}
    >
      <CardMedia
        sx={{ height: 150, objectFit: "contain" }}
        image={course.image}
        title={course.courseName}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {course.courseName}
        </Typography>
        <Box sx={{ height: "4rem", overflow: "hidden", marginBottom: "1rem" }}>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            {course.courseDescription}
          </Typography>
        </Box>
        <Stack direction="row" sx={{ justifyContent: "space-between" }}>
          <Typography gutterBottom variant="body1" component="div">
            Total Time:{course.courseTime}
          </Typography>
          <Typography gutterBottom variant="body1" component="div">
            Price: {course.coursePrice}
          </Typography>
        </Stack>
        <LinearProgress variant="determinate" value={70} />
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ marginTop: ".3rem", marginBottom: "1rem" }}
        >
          <Typography>70%</Typography>
          <Rating value={4} readOnly precision={0.2} />
        </Stack>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => navigate("/learn/1")}
          fullWidth
        >
          Go to Course
        </Button>
      </CardContent>
    </Card>
  );
}
