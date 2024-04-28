/** @format */

import * as Yup from "yup";

export const LoginSchema = Yup.object({
  email: Yup.string().email().required("Please Enter Email"),
  password: Yup.string().min(6).required("Password is Must"),
});
