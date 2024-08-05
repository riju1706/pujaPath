import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Dialog,
  Typography,
  styled,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import PriceDetailsDialog from "./PriceDetailsDialog";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function SelectVendorCard({
  vendor,
  selectedSamagriList,
  orderFuntion,
}) {
  const [open, setOpen] = React.useState(false);
  const [calculatedList, setCalculatedList] = useState([]);

  useEffect(() => {
    const calculation = () => {
      const arr = Object.entries(selectedSamagriList).map(
        ([key, value], index) => {
          // Assuming vendorsamagri is an array
          const pricePerUnit = vendor.pujaSamagri
            .filter((item3) => item3.selectItem === key)
            .map((item3) => [item3.price, item3.perUnit]);
          console.log(+value[0]);
          console.log(pricePerUnit);

          return {
            [key]: {
              quantity: value,
              pricePerUnit,
              userPrice: pricePerUnit[0] && +value[0] * pricePerUnit[0][0],
            },
          };
        }
      );
      const total = arr.reduce((accumulator, item) => {
        return accumulator + item[Object.keys(item)[0]].userPrice;
      }, 0);
      arr.push(total);

      setCalculatedList(arr);
    };
    calculation();
  }, [selectedSamagriList, vendor]);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  /////////////////////////

  return (
    <>
      <Card sx={{ width: 300, borderRadius: "20px" }} elevation={4}>
        <CardMedia
          sx={{ height: 150 }}
          image={vendor.url ? vendor.url : "/img/shop.jpg"}
          itle="green iguana"
        />

        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            <strong>Shop Name:</strong>
            {vendor.shopName}
          </Typography>{" "}
          <Typography gutterBottom variant="body1" component="div">
            <strong>Total Price:</strong>
            {calculatedList[calculatedList.length - 1]}
          </Typography>
          <Button type="text" onClick={handleClickOpen}>
            View Paice Details
          </Button>
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
            onClick={() => orderFuntion(vendor, calculatedList)}
          >
            Order
          </Button>
        </CardActions>
      </Card>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <PriceDetailsDialog
          handleClose={handleClose}
          calculatedList={calculatedList}
        />
      </BootstrapDialog>
    </>
  );
}
