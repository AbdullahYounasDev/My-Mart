/** @format */

import * as Yup from "yup";

export const SignUpSchema = Yup.object({
  name: Yup.string().min(2).max(15).required("Please Enter Name"),
  email: Yup.string().email().required("Please Enter Email"),
  password: Yup.string().min(6).required("Password is Must"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Password must match",
  ),
});
