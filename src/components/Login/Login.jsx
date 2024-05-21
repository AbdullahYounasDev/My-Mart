/** @format */

import React from "react";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { LoginSchema } from "../../Schemas/LoginSchema";
import { useDispatch, useSelector } from "react-redux";
import { LogIn } from "../../Features/User";

const initialValue = {
  email: "",
  password: "",
};

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Add this line to use navigate
  const user = useSelector((state) => state.user.users);

  const checkEmail = (email) => {
    const sameEmail = user.filter((subUser) => subUser.email === email);
    return sameEmail.length === 0; // Return true if the array is empty, indicating the email is not in use
  };

  const { values, errors, handleChange, touched, handleBlur, handleSubmit } =
    useFormik({
      initialValues: initialValue,
      validationSchema: LoginSchema,
      onSubmit: (val, { resetForm }) => {
        if (checkEmail(val.email)) {
          alert("You Are Not Registered. Please Register To Login");
        } else {
          dispatch(LogIn(val));
          resetForm();
          navigate("/My-Mart/Profile");
        }
      },
    });

  return (
    <div className="container-lg container-fluid d-flex align-items-center flex-column mt-5">
      <div
        className="border d-flex justify-content-center align-items-center flex-column p-3 gap-3"
        style={{ maxWidth: "500px", minWidth: "300px" }}>
        <h2 className="fs-3 fw-bold">
          Login<span className="text-green fs-1 fw-bold">.</span>
        </h2>
        <div className="w-100">
          <input
            type="email"
            name="email"
            placeholder="Ali@gmail.com"
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
        <button
          className="rounded-5 border p-2 text-white main-btn"
          onClick={handleSubmit}>
          Login Now
        </button>
        <div className="mt-3 text-start w-100" style={{ fontSize: "12px" }}>
          <span>If You Not Have Account</span>
          <Link to="/My-Mart/Signup" style={{ textDecoration: "none" }}>
            <span className=" text-green fw-bold"> Create Account Now</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
