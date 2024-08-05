import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

export default function PujaSamagriCard({
  setPujaDetailsFn,
  handleClickOpen,
  pujaSamagri,
}) {
  const leardMoreHandeler = (item) => {
    setPujaDetailsFn(item);
    handleClickOpen();
  };
  return (
    <>
      <Card sx={{ maxWidth: 345, borderRadius: "20px" }} elevation={4}>
        <CardMedia
          sx={{ height: 150 }}
          image={pujaSamagri.image}
          itle="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {pujaSamagri.name}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "end", margin: "0 .5rem .5rem 0" }}>
          <Button
            variant="contained"
            size="small"
            sx={{
              backgroundColor: "secondary",
              "&:hover": {
                backgroundColor: "secondary",
              },
            }}
          >
            Buy
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
