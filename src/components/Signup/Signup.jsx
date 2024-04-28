/** @format */

import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container-lg container-fluid d-flex align-items-center flex-column mt-5">
      <div
        className="border d-flex justify-content-center align-items-center flex-column p-3 gap-3"
        style={{ maxWidth: "500px", minWidth: "300px" }}>
        <h2 className="fs-3 fw-bold">
          Sign Up<span className="text-green fs-1 fw-bold">.</span>
        </h2>
        <input
          type="text"
          placeholder="Name"
          className="text-black bg-transparent border newsLetterInp p-2 w-100 my-2"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="text-black bg-transparent border newsLetterInp p-2 w-100 my-2"
        />
        <input
          type="password"
          placeholder="Password"
          className="text-black bg-transparent border newsLetterInp p-2 w-100 my-2"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="text-black bg-transparent border newsLetterInp p-2 w-100 my-2"
        />
        <button className="rounded-5 border p-2 text-white main-btn">
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

export default Login;
