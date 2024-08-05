import { Box, Button, DialogActions, Stack, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import { useNavigate } from "react-router-dom";

export default function LoginForm({ fetchUser, registeDialogClose }) {
  const [phone, setPhone] = useState();
  const navigate = useNavigate();

  function handleOnChange(value, data, event, formattedValue) {
    // setPhone({ rawPhone: value.slice(data.dialCode.length) });
    console.log(value.slice(data.dialCode.length));
    console.log(data);
    setPhone(value);
    console.log(value);
  }

  // Hook ==============================================
  const [phNumber, setPhNumber] = useState("");
  const [pass, setPass] = useState("");
  const [login, setLogin] = useState(false);
  // const navigate = useNavigate();

  // Handeler ===========================================
  // const closeContexts = useContext(closeContext);

  const handelLogin = async (e) => {
    e.preventDefault();
    console.log(phNumber);

    const res = await axios.get(
      `http://localhost:8000/posts?phone=${phNumber}`
    );
    console.log(res.data);

    const user = await res.data.find((d) => d.phone == phNumber);

    if (user) {
      if (user.password == pass) {
        // if (user.userType == 1) {
        //   navigate("/dashboard");
        // } else if (user.userType == 2) {
        //   navigate("/dashboard");
        // } else if (user.userType == 3) {
        //   navigate("/dashboard");
        // } else if (user.userType == 4) {
        //   navigate("/dashboard");
        // } else if (user.userType == 5) {
        //   navigate("/course");
        // }

        // closeContexts.closeFunction(true);
        sessionStorage.setItem("user", JSON.stringify(user));

        setLogin(true);
        // closeContexts.userLoginFn(true);
        fetchUser();
        registeDialogClose();

        // alert("you have successfully loged in")
      } else {
        alert("invalid number or password");
      }
    } else {
      alert("invalid number or password");
    }
  };

  return (
    <Box>
      <form onSubmit={handelLogin}>
        <PhoneInput
          country={"in"}
          enableSearch={true}
          value={phNumber}
          onChange={(phone) => setPhNumber(phone)}
          inputProps={{
            name: "mobile",
          }}
          inputStyle={{
            height: "3.5rem",

            width: "100%",
          }}
        />
        <TextField
          label="Password"
          onChange={(e) => setPass(e.target.value)}
          value={pass}
          fullWidth
          sx={{ marginTop: "1rem" }}
        />

        <DialogActions>
          <Button
            variant="contained"
            color="error"
            onClick={registeDialogClose}
          >
            Cancel
          </Button>
          <Button variant="contained" color="success" autoFocus type="submit">
            Log In
          </Button>
        </DialogActions>
      </form>
    </Box>
  );
}
