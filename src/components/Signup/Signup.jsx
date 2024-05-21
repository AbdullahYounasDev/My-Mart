/** @format */

import React from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { SignUpSchema } from "../../Schemas/SginupSchema";
import { useDispatch, useSelector } from "react-redux";
import { SignUp } from "../../Features/User";

const initialValue = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  country: "",
  city: "",
  fullAddress: "",
};

const Signup = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.users);

  // Function to check if email is in use or not
  const checkEmail = (email) => {
    const sameEmail = user.filter((subUser) => subUser.email === email);
    return sameEmail.length === 0; // Return true if the array is empty, indicating the email is not in use
  };

  const {
    values,
    errors,
    handleChange,
    touched,
    handleBlur,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues: initialValue,
    validationSchema: SignUpSchema,
    onSubmit: (val) => {
      if (checkEmail(val.email)) {
        dispatch(SignUp(val));
        resetForm();
      } else {
        alert(val.email + " is already in use");
      }
    },
  });

  return (
    <div className="container-lg container-fluid d-flex align-items-center flex-column mt-5">
      <div
        className="border d-flex justify-content-center align-items-center flex-column p-3 gap-3"
        style={{ maxWidth: "500px", minWidth: "300px" }}>
        <h2 className="fs-3 fw-bold">
          Sign Up<span className="text-green fs-1 fw-bold">.</span>
        </h2>
        <div className="w-100">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className="text-black bg-transparent border newsLetterInp p-2 w-100 my-2"
          />
          {errors.name && touched.name ? (
            <p className="text-green fs-14 fw-semibold">{errors.name}</p>
          ) : null}
        </div>
        <div className="w-100">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className="text-black bg-transparent border newsLetterInp p-2 w-100 my-2"
          />
          {errors.email && touched.email ? (
            <p className="text-green fs-14 fw-semibold">{errors.email}</p>
          ) : null}
        </div>
        <div className="w-100">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className="text-black bg-transparent border newsLetterInp p-2 w-100 my-2"
          />
          {errors.password && touched.password ? (
            <p className="text-green fs-14 fw-semibold">{errors.password}</p>
          ) : null}
        </div>
        <div className="w-100">
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            className="text-black bg-transparent border newsLetterInp p-2 w-100 my-2"
          />
          {errors.confirmPassword && touched.confirmPassword ? (
            <p className="text-green fs-14 fw-semibold">
              {errors.confirmPassword}
            </p>
          ) : null}
        </div>
        <p className="align-self-start text-green fw-semibold">
          Please fill out Your Address Correctly
        </p>
        <div className="w-100 d-flex gap-2 ">
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={values.country}
            onChange={handleChange}
            onBlur={handleBlur}
            className="text-black bg-transparent border newsLetterInp p-2 w-50 my-2 mr-2"
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={values.city}
            onChange={handleChange}
            onBlur={handleBlur}
            className="text-black bg-transparent border newsLetterInp p-2 w-50 my-2 ml-2"
          />
        </div>
        <div className="w-100">
          <input
            type="text"
            name="fullAddress"
            placeholder="Full Address"
            value={values.fullAddress}
            onChange={handleChange}
            onBlur={handleBlur}
            className="text-black bg-transparent border newsLetterInp p-2 w-100 my-2"
          />
          {errors.fullAddress && touched.fullAddress ? (
            <p className="text-green fs-14 fw-semibold">{errors.fullAddress}</p>
          ) : null}
        </div>
        <button
          className="rounded-5 border p-2 text-white main-btn"
          onClick={handleSubmit}>
          Create Account
        </button>
        <div className="mt-3 text-start w-100" style={{ fontSize: "12px" }}>
          <span>Already Have Account</span>
          <Link to="/My-Mart/Login" style={{ textDecoration: "none" }}>
            <span className=" text-green fw-bold"> Login Now</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
