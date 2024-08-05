import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { Box, Grid, Stack, Typography } from "@mui/material";
import PersonalInfoEdit from "../../../components/UI/dashboardAllComp/component/personalInfoEdit/PersonalInfoEdit";
import PaymentMethod from "./PaymentMethod";
import Offer from "./Offer";
import ReviewAndDelivery from "./ReviewAndDelivery";
import Address from "./Address";

// for accordion ========================================
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CheckOutAccordion({
  drawerItem,
  vendorAndSamagri,
  samagriTotal,
  panditPrice,
  checkOutvalue,
  checkoutBtnHandel,
  pujaAddressHandeler,
  samagriAddressHandeler,
  pujaAddress,
  isValidFn,
  isDirtyFn,
}) {
  const [expanded, setExpanded] = React.useState("panel1");

  // useEffect ==============================================
  React.useEffect(() => {
    setExpanded(`panel${checkOutvalue}`);
  }, [checkOutvalue]);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
    checkoutBtnHandel(panel.slice(5, 6));
  };

  return (
    <div>
      {/* address ======================================================= */}
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          aria-controls="panel1d-content"
          id="panel1d-header"
          sx={{
            backgroundColor: expanded === "panel1" ? "#ff80ab" : "#f8bbd0",
            borderRadius: "20px",
          }}
        >
          <Typography>1. Delivery Address: </Typography>
        </AccordionSummary>{" "}
        <AccordionDetails>
          <Address
            checkOutvalue={checkOutvalue}
            pujaAddressHandeler={pujaAddressHandeler}
            samagriAddressHandeler={samagriAddressHandeler}
            pujaAddress={pujaAddress}
            isValidFn={isValidFn}
            isDirtyFn={isDirtyFn}
          />
        </AccordionDetails>
      </Accordion>
      {/* // Payment Method:========================================================== */}
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          aria-controls="panel2d-content"
          id="panel2d-header"
          sx={{
            backgroundColor: expanded === "panel2" ? "#ff80ab" : "#f8bbd0",
            borderRadius: "20px",
          }}
        >
          <Typography>2. Payment Method: </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <PaymentMethod />
        </AccordionDetails>
      </Accordion>
      {/* offer =============================================================== */}
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          aria-controls="panel3d-content"
          id="panel3d-header"
          sx={{
            backgroundColor: expanded === "panel3" ? "#ff80ab" : "#f8bbd0",
            borderRadius: "20px",
          }}
        >
          <Typography>3. Offers:</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Offer />
        </AccordionDetails>
      </Accordion>
      {/* Reviwe Items and Delivery ===================================================== */}
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          aria-controls="panel3d-content"
          id="panel3d-header"
          sx={{
            backgroundColor: expanded === "panel4" ? "#ff80ab" : "#f8bbd0",
            borderRadius: "20px",
          }}
        >
          <Typography>4. : Reviwe Items and Delivery</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ReviewAndDelivery
            drawerItem={drawerItem}
            vendorAndSamagri={vendorAndSamagri}
            samagriTotal={samagriTotal}
            panditPrice={panditPrice}
          />
        </AccordionDetails>
      </Accordion>{" "}
    </div>
  );
}
