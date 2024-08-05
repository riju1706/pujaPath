import * as Yup from "yup";

export function useselectPujaScheme() {
  return Yup.string().required("Please select Puja");
}
export function useSelectDateTimeSchema() {
  return Yup.string().nullable().required("Please select a Date and Time");
}
