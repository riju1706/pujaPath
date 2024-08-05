import React, { useState } from "react";
import DialogActions from "@mui/material/DialogActions";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { allPuja } from "../../../../../../../data";
import StepOne from "./Steps/StepOne";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepTwo from "./Steps/StepTwo";
import Confirm from "./Steps/Confirm";

const steps = ["Select Puja", "Add Samagri", "Confirm"];

export default function AddEditPuja({ handleClose, user, updadteUserFn }) {
  const [selectPuja, setSelectPuja] = useState(" ");
  const [price, setPrice] = useState();
  const [shortPrice, setShortPrice] = useState();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [samagriWithPuja, setSamagriWithPuja] = useState({});

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  console.log(samagriWithPuja[selectPuja]);

  // handeler for add puja in list
  const addPujaHandeler = () => {
    updadteUserFn({
      ...user,
      mySamagriList: {
        ...(user.mySamagriList || {}),
        myPujaWiseSamagriList: {
          ...(user.mySamagriList?.myPujaWiseSamagriList || {}),
          [selectPuja]: samagriWithPuja[selectPuja],
        },
      },
    });

    handleClose();
  };

  // for pujaSamagri full object
  const samagriWithPujaHandeler = (pujaName, details) => {
    setSamagriWithPuja({ [pujaName]: details });
    setSelectPuja(pujaName);
  };

  console.log(samagriWithPuja);
  // const addSamagriHandeler = (value) => {
  //   console.log(value);
  // };
  return (
    <Box sx={{ padding: "1rem 1rem " }}>
      <DialogTitle id="alert-dialog-title">
        {/* <Typography variant="h4">Add Puja</Typography> */}
      </DialogTitle>
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={activeStep} sx={{ marginX: "4rem" }}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            if (isStepOptional(index)) {
              labelProps.optional = (
                <Typography variant="caption">Optional</Typography>
              );
            }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length - 1 && (
          <React.Fragment>
            <Confirm samagriWithPuja={samagriWithPuja} />
          </React.Fragment>
        )}
        ;
        {activeStep === 0 && (
          <React.Fragment>
            <StepOne
              samagriWithPujaHandeler={samagriWithPujaHandeler}
              samagriWithPuja={samagriWithPuja}
            />
          </React.Fragment>
        )}
        {activeStep === 1 && (
          <React.Fragment>
            <StepTwo
              samagriWithPuja={samagriWithPuja}
              samagriWithPujaHandeler={samagriWithPujaHandeler}
            />
          </React.Fragment>
        )}
      </Box>
      <DialogActions>
        <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
          <Button
            color="inherit"
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
            variant="contained"
            // color="secondary"
          >
            Back
          </Button>
          <Button
            color="inherit"
            onClick={handleClose}
            sx={{ mr: 1 }}
            variant="contained"
          >
            Cancel
          </Button>
          <Box sx={{ flex: "1 1 auto" }} />
          {/* {isStepOptional(activeStep) && (
                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                  Skip
                </Button>
              )} */}

          <Button
            onClick={
              activeStep === steps.length - 1 ? addPujaHandeler : handleNext
            }
            // onClick={addPujaHandeler}
            variant="contained"
            color="secondary"
          >
            {activeStep === steps.length - 1 ? "Finish" : "Next"}
          </Button>
        </Box>
      </DialogActions>
    </Box>
  );
}
