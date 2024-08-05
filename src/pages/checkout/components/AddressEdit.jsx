import {
  Box,
  Card,
  CardContent,
  Stack,
  TextField,
  Button,
} from "@mui/material";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup"; // Import Yup for validation
import useAddressValidationSchema from "../../../Hook/useAddressValidation";

const AddressEdit = ({ user, valueFn, isValidFn, isDirtyFn }) => {
  // for rormil valudation =========================================
  const validationSchema = useAddressValidationSchema();

  const initialValues = {
    fName: user?.fName || "",
    lName: user?.lName || "",
    email: user?.email || "",
    phone: user?.phone || "",
    whatsApp: user?.whatsApp || "",
    address1: user?.address1 || "",
    city: user?.city || "",
    state: user?.state || "",
    country: user?.country || "",
    zip: user?.zip || "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      // Logic for form submission goes here
      console.log("Form submitted with values:", values);
      // Example of calling a function passed as prop
      if (valueFn) {
        valueFn(values);
      }
    },
  });
  // Update isValid and isDirty state based on Formik's internal state
  React.useEffect(() => {
    isValidFn(formik.isValid);
    isDirtyFn(formik.dirty);
  }, [formik.isValid, formik.dirty, formik.values]);

  return (
    <Box sx={{ marginTop: "1.5rem" }}>
      <Card sx={{ padding: "1rem" }}>
        <CardContent>
          <form
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            onSubmit={formik.handleSubmit}
          >
            <Stack direction="row" sx={{ gap: "1rem" }}>
              <TextField
                label="First Name"
                name="fName"
                variant="outlined"
                value={formik.values.fName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.fName && Boolean(formik.errors.fName)}
                helperText={formik.touched.fName && formik.errors.fName}
              />
              <TextField
                label="Last Name"
                name="lName"
                variant="outlined"
                value={formik.values.lName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.lName && Boolean(formik.errors.lName)}
                helperText={formik.touched.lName && formik.errors.lName}
              />
            </Stack>

            <TextField
              label="Email"
              name="email"
              variant="outlined"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email ? formik.errors.email : " "}
            />

            <TextField
              label="Phone"
              name="phone"
              variant="outlined"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            />

            <TextField
              label="WhatsApp"
              name="whatsApp"
              variant="outlined"
              value={formik.values.whatsApp}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.whatsApp && Boolean(formik.errors.whatsApp)}
              helperText={formik.touched.whatsApp && formik.errors.whatsApp}
            />

            <TextField
              label="Address"
              name="address1"
              variant="outlined"
              value={formik.values.address1}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.address1 && Boolean(formik.errors.address1)}
              helperText={formik.touched.address1 && formik.errors.address1}
            />

            <Stack direction="row" sx={{ gap: "1rem" }}>
              <TextField
                label="City"
                name="city"
                variant="outlined"
                value={formik.values.city}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.city && Boolean(formik.errors.city)}
                helperText={formik.touched.city && formik.errors.city}
              />
              <TextField
                label="State"
                name="state"
                variant="outlined"
                value={formik.values.state}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.state && Boolean(formik.errors.state)}
                helperText={formik.touched.state && formik.errors.state}
              />
            </Stack>

            <Stack direction="row" sx={{ gap: "1rem" }}>
              <TextField
                label="Country"
                name="country"
                variant="outlined"
                value={formik.values.country}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.country && Boolean(formik.errors.country)}
                helperText={formik.touched.country && formik.errors.country}
              />
              <TextField
                label="Zip code"
                name="zip"
                variant="outlined"
                value={formik.values.zip}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.zip && Boolean(formik.errors.zip)}
                helperText={formik.touched.zip && formik.errors.zip}
              />
            </Stack>

            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default AddressEdit;
