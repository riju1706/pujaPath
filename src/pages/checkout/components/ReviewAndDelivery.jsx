import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import CartVendorSection from "../../cartPage/component/CartVendorSection";

export default function ReviewAndDelivery({
  drawerItem,
  vendorAndSamagri,
  samagriTotal,
  panditPrice,
}) {

  return (
    <div>
      {" "}
      <Box
        sx={{
          backgroundColor: "#fce4ec",
          padding: ".3rem",
          borderRadius: "20px",
          marginBottom: "1rem",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            marginBottom: "1rem",
            marginLeft: "2rem",
            textAlign: "center",
          }}
        >
          <strong> Pandit</strong>
        </Typography>
        {drawerItem.map((i, a) => {
          return (
            <Box key={a} sx={{ marginBottom: "1.5rem" }}>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(7, 1fr)",
                  alignItems: "center",
                  gap: " 2rem",
                  width: "100%",
                  justifyItems: "center",
                  paddingRight: "1rem",
                  position: "relative",
                }}
              >
                <Avatar
                  alt="pandit"
                  src={i.user.url}
                  sx={{ width: 80, height: 80 }}
                  // variant="rounded"
                />

                <Typography varient="h6">
                  {i.user.fName} {i.user.lName}
                </Typography>

                <Typography varient="h6">{i.selectPuja} Puja</Typography>

                <Box>
                  <Typography varient="h6" sx={{ textDecoration: "underline" }}>
                    {i.DateTime.format("DD-MM-YYYY")}
                  </Typography>

                  <Typography varient="h6" sx={{ textDecoration: "underline" }}>
                    {i.DateTime.format("HH-mm")}
                  </Typography>
                </Box>

                <Typography varient="h6">Rs: {panditPrice}</Typography>
              </Box>
            </Box>
          );
        })}
      </Box>
      {/* //// for vendor section(Samagri) ======================================= */}
      <Box
        sx={{
          backgroundColor: "#ffcdd2",
          padding: ".3rem",
          borderRadius: "20px",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            marginBottom: "1rem",
            marginLeft: "2rem",
            textAlign: "center",
          }}
        >
          <strong>Samagries</strong>
        </Typography>
        <CartVendorSection
          vendorAndSamagri={vendorAndSamagri}
          samagriTotal={samagriTotal}
          checkOut={true}
        />
      </Box>
    </div>
  );
}
