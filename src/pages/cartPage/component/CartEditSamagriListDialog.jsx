import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { Box, Stack } from "@mui/material";
import { object } from "yup";
import AddIcon from "@mui/icons-material/Add";

export default function CartEditSamagriListDialog({
  handleClose,
  vendorAndSamagri,
  orderFuntion,
}) {

  return (
    <>
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        Price Details
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent dividers>
        <>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr 1fr 1fr",
              minWidth: "30rem",
              marginBottom: ".5rem",
              textAlign: "center",
            }}
          >
            <Typography variant="body1">
              <strong>Item</strong>
            </Typography>
            <Typography variant="body1">
              <strong>Quantity</strong>
            </Typography>

            <Typography variant="body1">
              <strong>price/unit</strong>
            </Typography>

            <Typography variant="body1">
              <strong>Price</strong>
            </Typography>
          </Box>
          {/* // samagri list ==================================================== */}
          {vendorAndSamagri.samagriList.map((item, index) => {
            console.log(item);
            return (
              <div key={index}>
                {Object.entries(item).map(([key, value], index) => {
                  console.log(key);
                  console.log(value);
                  return (
                    value.quantity && (
                      <Box
                        sx={{
                          display: "grid",
                          gridTemplateColumns: "2fr 1fr 1fr 1fr",
                          minWidth: "30rem",
                          marginBottom: ".5rem",
                          textAlign: "center",
                        }}
                        key={index}
                      >
                        <Typography variant="body1">{key}</Typography>
                        <Typography variant="body1">
                          {`${value.quantity[0]}${value.quantity[1]}`}
                        </Typography>
                        <Typography variant="body1">
                          {`${value.pricePerUnit[0][0]}/${value.pricePerUnit[0][1]}`}
                        </Typography>
                        <Typography variant="body1">
                          {value.userPrice}
                        </Typography>
                      </Box>
                    )
                  );
                })}
              </div>
            );
          })}

          {/* <hr style={{ borderTop: "3px solid #000", margin: 0 }} /> */}
          {/* <Stack
            direction="row"
            sx={{
              justifyContent: "space-between",
              padding: "0 2rem",
              marginLeft: "3rem",
            }}
          >
            <Typography variant="body1">
              <strong>Total:</strong>
            </Typography>
             <Typography variant="body1">
              <strong>{calculatedList[calculatedList.length - 1]}</strong>
            </Typography>
          </Stack> */}
        </>
      </DialogContent>
      <DialogActions>
        <Button
          autoFocus
          onClick={handleClose}
          variant="contained"
          color="secondary"
        >
          Done
        </Button>
      </DialogActions>
    </>
  );
}
