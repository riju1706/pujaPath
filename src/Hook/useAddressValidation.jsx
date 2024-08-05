import React, { useMemo } from "react";
import * as Yup from "yup";

import {
  usefirstNameSchema,
  useUserEmailValidationSchema,
  useLastNameSchema,
  useMobileSchema,
  useWhatsappSchema,
  useaddressSchema,
  usecitySchema,
  usestateSchema,
  usecountrySchema,
  usezipSchema,
} from "./component/usealluserDetailsvalidation";
import { Email } from "@mui/icons-material";

export default function useAddressValidationSchema() {
  const firstNameSchema = usefirstNameSchema();
  const lastNameSchema = useLastNameSchema();
  const emailValidationSchema = useUserEmailValidationSchema();
  const MobileSchema = useMobileSchema();
  const whatsappSchema = useWhatsappSchema();
  const addressSchema = useaddressSchema();
  const citySchema = usecitySchema();
  const stateSchema = usestateSchema();
  const countrySchema = usecountrySchema();
  const zipSchema = usezipSchema();

  return Yup.object().shape({
    fName: firstNameSchema,
    lName: lastNameSchema,
    email: emailValidationSchema,
    phone: MobileSchema,
    whatsApp: whatsappSchema,
    address1: addressSchema,
    city: citySchema,
    state: stateSchema,
    country: countrySchema,
    zip: zipSchema,
  });
}
