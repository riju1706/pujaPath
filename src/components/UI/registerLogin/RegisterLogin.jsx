import { useTransition, animated, useSpring } from "react-spring";
import LoginForm from "./loginform/LoginForm";
import RegisterForm from "./registerForm/RegisterForm";
import { Dialog, DialogContent, DialogTitle, Tab, Tabs } from "@mui/material";
import { closeContext } from "../../../closeContext/closeContext";
import { useContext, useState } from "react";
import "react-phone-input-2/lib/style.css"; // Ensure you import the CSS

export default function RegisterLogin({ fetchUser }) {
  // hook ========================================================
  const closeContexts = useContext(closeContext);
  const { open, registeDialogOpen, registeDialogClose } =
    useContext(closeContext);
  const [tabValue, setTabValue] = useState(0);

  // spring ===============================================

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Dialog open={open} onClose={registeDialogClose}>
      <DialogTitle sx={{ width: "500px" }}>
        <Tabs value={tabValue} onChange={handleTabChange} centered>
          <Tab label="Log In" />
          <Tab label="Sign Up" />
        </Tabs>
      </DialogTitle>
      <DialogContent>
        {tabValue == 0 && (
          <LoginForm
            registeDialogClose={registeDialogClose}
            fetchUser={fetchUser}
          />
        )}
        {tabValue == 1 && (
          <RegisterForm registeDialogClose={registeDialogClose} />
        )}
      </DialogContent>
    </Dialog>
  );
}
