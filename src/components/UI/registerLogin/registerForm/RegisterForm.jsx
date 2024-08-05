import React, { useRef, useState } from "react";
import {
  Box,
  Button,
  DialogActions,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
  FormHelperText,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import PhoneInput from "react-phone-input-2";
import ReCAPTCHA from "react-google-recaptcha";
import useRegistrationValidationSchema from "../../../../Hook/useRegistrationValidationSchema";
import { useFormik } from "formik";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const ragistrationType = [
  "Pandit",
  "Devotee",
  "Vendor",
  "Puja Trainer",
  "Puja Trainee",
];

export default function RegisterForm({ registeDialogClose }) {
  const inputRef = useRef(null);
  const recaptchaRef = useRef(null);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [phone, setPhone] = useState({});
  const [isVerified, setIsVerified] = useState(false);
  const [phoneValidate, setPhoneValidate] = useState(false);
  const [phoneErr, setPhoneErr] = useState("");
  const [captcha, setCaptcha] = useState(false);

  const validationData = useRegistrationValidationSchema();

  function handleOnChange(value, data, event, formattedValue) {
    // setPhone({ rawPhone: value.slice(data.dialCode.length) });
    setPhone({
      phone: value,
      countryCode: data.dialCode,
      rawPhone: value.slice(data.dialCode.length),
    });
  }

  // for formik ===========================================
  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: validationData,

      onSubmit: async (values, { resetForm }) => {
        // Call phoneValidateFn and wait for its completion
        const user = await axios.get(
          `http://localhost:8000/posts?phone=${phone.phone}`
        );
        console.log(user.data);
        console.log(captcha);

        if (user.data.length == 0) {
          console.log("jhklh");
          if (captcha) {
            console.log(captcha);
            if (phone.phone.length < 6) {
              setPhoneErr("Please provide a valid phone number");
              setPhoneValidate(false);
            } else if (captcha) {
              setPhoneErr("");
              setPhoneValidate(true);
              // Proceed with form submission
              await axios.post("http://localhost:8000/posts", {
                ...values,
                phonedata: phone,
                phone: phone.phone,
              });

              // Reset form and clear state variables
              resetForm();
              setPhone("");
              setPhoneErr("");
              setCaptcha(false);
              setIsVerified(false);
              recaptchaRef.current.reset();

              // Display success message
              toast.success(
                "You have registered successfully! Please login to your account.",
                { closeOnClick: true, className: "custom-toast" }
              );
              console.log(isVerified);
            }
          }
        } else {
          setPhoneErr("user already Registered");
        }

        // Check the result of phone validation
      },
    });

  return (
    <form onSubmit={handleSubmit}>
      <ToastContainer />
      <Stack sx={{ padding: " 1.5rem 1.5rem", gap: ".5rem" }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography>Registration Type:</Typography>
          <FormControl sx={{ width: "180px" }}>
            <InputLabel id="demo-simple-select-label">Select</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Select"
              name="userType"
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.userType && Boolean(errors.userType)}
              value={values.userType}
              size="small"
              required
            >
              {ragistrationType.map((i, index) => (
                <MenuItem key={index} value={index + 1}>
                  {i}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Stack>
        <FormHelperText sx={{ color: "red" }}>{errors.userType}</FormHelperText>

        <PhoneInput
          country={"in"}
          enableSearch={true}
          onChange={handleOnChange}
          value={phone.phone}
          inputStyle={{
            height: "2.5rem",
            marginBottom: "15px",
            width: "100%",
          }}
        />
        <FormHelperText sx={{ color: "red" }}>{phoneErr}</FormHelperText>

        <TextField
          label="Email"
          fullWidth
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.email && Boolean(errors.email)}
          helperText={touched.email && errors.email}
          size="small"
        />
        {/* <TextField
          label="Password"
          type="password"
          fullWidth
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.email && Boolean(errors.password)}
          helperText={touched.password && errors.password}
          size="small"
        /> */}
        <FormControl variant="outlined" fullWidth>
          <InputLabel
            htmlFor="outlined-adornment-password"
            sx={{ marginBotton: "2rem" }}
          >
            Password
          </InputLabel>
          <OutlinedInput
            sx={{ marginBotton: "2rem" }}
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.password && Boolean(errors.password)}
            helperText={touched.password && errors.password}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            size="small"
          />
        </FormControl>
        <FormHelperText sx={{ color: "red" }}>
          {touched.password && errors.password}
        </FormHelperText>

        <TextField
          label="confirm Password"
          fullWidth
          name="confirmPassword"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.confirmPassword && Boolean(errors.confirmPassword)}
          helperText={touched.password && errors.confirmPassword}
          size="small"
        />
        <ReCAPTCHA
          sitekey="6LczKLspAAAAAPY1CanBwSkw3wCEUiHSkK1jyzp9"
          onChange={() => setCaptcha(true)}
          ref={recaptchaRef}
        />
        <FormHelperText sx={{ color: "red" }}>
          {!captcha && "please check Captcha"}
        </FormHelperText>

        <DialogActions>
          <Button
            variant="contained"
            color="error"
            onClick={registeDialogClose}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="success"
            autoFocus
            onSubmit={handleSubmit}
          >
            Sign Up
          </Button>
        </DialogActions>
      </Stack>
    </form>
  );
}
