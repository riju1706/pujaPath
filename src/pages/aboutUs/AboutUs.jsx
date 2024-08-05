import {
  Box,
  Card,
  CardContent,
  Paper,
  Typography,
  Stack,
  TextField,
  TextareaAutosize,
  Button,
} from "@mui/material";
import React from "react";
import CallIcon from "@mui/icons-material/Call";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function AboutUs() {
  return (
    <Paper>
      <Box
        width="100%"
        height="20rem"
        sx={{ background: "url(img/aboutUs.png)" }}
      ></Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        {/* // about us description ============================================= */}
        <Card
          sx={{
            width: "60%",
            position: "relative",
            top: "-5rem",
            borderRadius: "20px",
            padding: ".5rem",
          }}
          elevation={4}
        >
          <CardContent>
            <Typography
              variant="h3"
              sx={{ textAlign: "center", marginBottom: "1rem" }}
            >
              About us
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: ".5rem" }}>
              Welcome to Pujapath, your sacred journey to spiritual connection
              made effortless. At Pujapath, we believe in fostering meaningful
              connections between pandits and devotees, facilitating seamless
              rituals and ceremonies that enrich lives.
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: ".5rem" }}>
              Our platform is a harmonious blend of tradition and technology,
              where ancient practices meet modern convenience. Whether you're
              seeking guidance for a traditional ceremony or yearning for
              spiritual solace, Pujapath is your trusted companion on the path
              to divine blessings.
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: ".5rem" }}>
              Founded with a vision to bridge the gap between seekers and
              spiritual guides, Pujapath is more than just a service; it's a
              community bound by faith, respect, and reverence. Our dedicated
              team is committed to providing a seamless experience, ensuring
              that every interaction is imbued with authenticity and reverence.
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: ".5rem" }}>
              For pandits, Pujapath offers a platform to showcase their
              expertise and connect with individuals seeking their guidance. For
              users, it's an opportunity to discover experienced pandits,
              schedule appointments, and embark on meaningful spiritual
              journeys.
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ width: "90%" }}>
          <Typography
            variant="h3"
            sx={{ textAlign: "center", marginBottom: "3rem" }}
          >
            <PermPhoneMsgIcon fontSize="large" />
            Contact us
          </Typography>
          <Stack direction="row" sx={{ gap: "3rem" }}>
            {/* // contact us form ================================================ */}
            <Card
              sx={{
                width: "45%",
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "20px",
              }}
              elevation={4}
            >
              <Stack direction="column">
                <Typography variant="h6">Prabhabi Infocom</Typography>
                <Typography variant="h6">Agartala, Tripura</Typography>
                <Typography variant="body1">
                  <CallIcon fontSize="small" />
                  9123456789
                </Typography>
                <Typography variant="body1">
                  <LocalPostOfficeIcon fontSize="small" />
                  abc@gmail.com
                </Typography>
              </Stack>
              <Stack direction="row" sx={{ gap: "1rem" }}>
                <FacebookIcon fontSize="large" style={{ color: "secondary" }} />
                <InstagramIcon
                  style={{ color: "secondary" }}
                  fontSize="large"
                />
                <WhatsAppIcon style={{ color: "secondary" }} fontSize="large" />
              </Stack>
            </Card>
            <Card
              sx={{
                width: "45%",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                padding: "2rem",
                borderRadius: "20px",
              }}
              elevation={4}
            >
              <TextField label="Full Name" />
              <TextField label="your email address" />
              <TextField
                label="enter your messsage"
                multiline
                rows={4} // Adjust the number of rows as needed
                fullWidth
              />
              <Button
                sx={{
                  backgroundColor: "secondary",
                  "&:hover": {
                    backgroundColor: "secondary",
                  },
                }}
                variant="contained"
              >
                Send
              </Button>
            </Card>
          </Stack>
        </Box>
      </Box>
    </Paper>
  );
}
