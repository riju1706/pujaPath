import { Box, Paper, Typography } from "@mui/material";
import CardPandit from "./CardPandit/CardPandit";
import { Stack } from "@mui/material";

export default function AllPanditContainer({ allPandit }) {
  return (
    <Paper sx={{ padding: "32px", backgroundColor: "#ddd" }} elevation={0}>
      <Box>
        <Typography variant="h3" gutterBottom sx={{ textAlign: "center" }}>
          Find Best Pandit
        </Typography>{" "}
      </Box>
      <Stack
        direction="row"
        // spacing={2}
        sx={{
          flexWrap: "wrap",
          justifyContent: "center",
          gap: " 2rem ",
        }}
        // gutterBottom
      >
        {allPandit.map((i, a) => (
          <div key={a}>
            <CardPandit details={i} />
          </div>
        ))}
      </Stack>
    </Paper>
  );
}
