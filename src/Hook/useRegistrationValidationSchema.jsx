import React, { useMemo } from "react";
import * as Yup from "yup";
import {
  useRegistrationTypeSchema,
  useUserEmailValidationSchema,
  usePasswordValidationSchema,
  useConfirmPassValidationSchema,
} from "./component/usealluserDetailsvalidation";
import {
  useselectPujaScheme,
  useSelectDateTimeSchema,
} from "./component/usePanditDateSelectValidation";

export default function useRegistrationValidationSchema() {
  const registrationTypeSchema = useRegistrationTypeSchema();
  const emailValidationSchema = useUserEmailValidationSchema();
  const passwordValidationSchema = usePasswordValidationSchema();
  const confirmPassValidationSchema = useConfirmPassValidationSchema();

  return Yup.object().shape({
    userType: registrationTypeSchema,
    email: emailValidationSchema,
    password: passwordValidationSchema,
    confirmPassword: confirmPassValidationSchema,
  });
}

export function usePanditBookSchema() {
  const selectPujaSchema = useselectPujaScheme();
  const SelectDateTimeSchema = useSelectDateTimeSchema();

  return Yup.object().shape({
    selectPuja: selectPujaSchema,
    dateTime: SelectDateTimeSchema,
  });
}
