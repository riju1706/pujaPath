import { Box, Card, CardContent, Stack, TextField } from "@mui/material";
import React, { useEffect } from "react";
import useAddressValidationSchema from "../../../../../Hook/useAddressValidation";
import { useFormik } from "formik";

export default function PersonalInfoEdit({ user, item, valueFn, isValidFn }) {
  const [userDetails, setUserDetails] = React.useState(user ? user : {});

  // for formik validation =========================================
  const validationSchema = useAddressValidationSchema();

  const editHandelChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((i) => ({ ...i, [name]: value }));
  };

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
      valueFn(userDetails);
    },
  });
  // Update isValid and isDirty state based on Formik's internal state
  React.useEffect(() => {
    isValidFn(formik.isValid);
    valueFn(formik.values);
  }, [formik.isValid, formik.values]);
  return (
    <Box sx={{ marginTop: "1.5rem" }}>
      <Card sx={{ padding: "1rem" }}>
        {/* <CardContent
          sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          <Stack direction="row" sx={{ gap: "1rem" }}>
            <TextField
              label="First Name"
              name="fName"
              varient="outlined"
              value={userDetails.fName}
              onChange={editHandelChange}
            />
            <TextField
              label="Last name"
              name="lName"
              varient="outlined"
              value={userDetails.lName}
              onChange={editHandelChange}
            />
          </Stack>
          <TextField
            label="Email"
            value={userDetails.email}
            name="email"
            onChange={editHandelChange}
          />

          <TextField
            label="Phone"
            value={userDetails.phone}
            onChange={editHandelChange}
            name="phone"
          />

          <TextField
            label="Whatsapp"
            value={userDetails.whatsApp}
            name="whatsApp"
            onChange={editHandelChange}
          />
          <TextField
            label="Address"
            name="address1"
            value={userDetails.address1}
            onChange={editHandelChange}
          />

          <Stack direction="row" sx={{ gap: "1rem" }}>
            <TextField
              label="City"
              varient="outlined"
              value={userDetails.city}
            />
            <TextField
              label="State"
              name="state"
              varient="outlined"
              value={userDetails.state}
              onChange={editHandelChange}
            />
          </Stack>

          <Stack direction="row" sx={{ gap: "1rem" }}>
            <TextField
              label="Country"
              name="country"
              varient="outlined"
              value={userDetails.country}
              onChange={editHandelChange}
            />
            <TextField
              label="Zip code"
              name="zip"
              varient="outlined"
              value={userDetails.zip}
              onChange={editHandelChange}
            />
          </Stack>
        </CardContent> */}
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

            {/* <Button type="submit" variant="contained" color="primary">
              Submit
            </Button> */}
          </form>
        </CardContent>
      </Card>
    </Box>
  );
}
