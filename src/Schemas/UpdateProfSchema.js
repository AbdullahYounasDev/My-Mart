/** @format */

import * as Yup from "yup";

export const UpdateProfSchema = Yup.object({
  name: Yup.string().min(2).required("Please Enter Name"),
  country: Yup.string().min(2).max(15).required("Enter Your Country Name"),
  city: Yup.string().min(2).max(15).required("Please Enter City"),
  fullAddress: Yup.string().min(10).required("Enter Your Full Address"),
  password: Yup.string().min(6).required("Password is Must"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Password must match",
  ),
});
