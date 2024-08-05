import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import ReactPlayer from "react-player";
import StarIcon from "@mui/icons-material/Star";
import LanguageIcon from "@mui/icons-material/Language";
import LearnSide from "./component/LearnSide";

export default function LearnPage() {
  return (
    <Box sx={{ padding: ".5rem" }}>
      <Stack direction="row" sx={{ gap: "1rem" }}>
        <Box sx={{ marginTop: "1rem", width: "70vw" }}>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=6NN802eDwKA&pbjreload=102"
            width="70vw"
            height="75vh"
            controls
          />
          <Box sx={{ padding: "1rem" }}>
            <Typography variant="h6" gutterBottom>
              <strong>Course Name:</strong> Saraswati Puja
            </Typography>

            <Stack direction="row" sx={{ gap: "1.5rem", alignItems: "center" }}>
              <Typography variant="h6">
                <strong>4.6</strong> <StarIcon color="secondary" />
              </Typography>
              <Stack>
                <Typography variant="h6">820254</Typography>
                <Typography variant="body1">students</Typography>
              </Stack>
              <Stack>
                <Typography variant="h6">15.6 </Typography>
                <Typography variant="body1">Total</Typography>
              </Stack>
            </Stack>
            <Typography variant="h6" gutterBottom>
              <LanguageIcon /> <strong>Language:</strong> Bengali
            </Typography>
            <hr />
            <Typography variant="h6" gutterBottom>
              <strong>Certificates:</strong> Yes
            </Typography>
            <hr />
            <Typography variant="h6" gutterBottom>
              <strong>Features:</strong>
            </Typography>
            <hr />
            <Typography variant="h6" gutterBottom>
              <strong>Description:</strong> Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Blanditiis quasi reprehenderit
              dolorum quia excepturi, tempore vero incidunt odit autem similique
              nulla animi a debitis quo quisquam atque ullam culpa tenetur.
              Molestiae tempore, blanditiis minus vel odit suscipit fuga facere
              nobis voluptatem asperiores libero mollitia maxime recusandae amet
              nemo quia voluptates quam? Exercitationem quasi quaerat ea
              perferendis nulla? Molestias, doloremque expedita, corporis cum
              sed quisquam voluptate blanditiis natus numquam assumenda nostrum
              culpa repellat dolore perspiciatis ex! Accusamus assumenda totam
              quis, corporis soluta amet placeat repellat deserunt libero. In
              minima dolorum amet officiis tempora error hic, esse impedit
              excepturi optio cupiditate numquam!
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "200vh",
            backgroundColor: "#fdd",
            borderRadius: "25px",
          }}
        >
          <LearnSide />
        </Box>
      </Stack>
    </Box>
  );
}
