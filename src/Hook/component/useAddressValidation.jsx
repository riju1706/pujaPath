import * as Yup from "yup";

export function usefirstNameSchema() {
  return Yup.string().required("Please Enter valid Name");
}

export function useLastNameSchema() {
  return Yup.string("Enter valid last name");
}
export function useSchema() {
  return Yup.string("Enter valid last name");
}
