/** @format */

import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { UpdateProfSchema } from "../../Schemas/UpdateProfSchema";
import { updateUserProfile } from "../../Features/User";

const UpdateProf = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [OldPass, setOldPass] = useState("");

  const currentUser = useSelector((state) => state.user.currentUser);
  const user = useSelector((state) =>
    state.user.users.find((u) => u.email === currentUser),
  );
  if (!currentUser) {
    return "No User Signup";
  }
  const handleOldPassInp = (e) => {
    setOldPass(e.target.value);
  };

  const initialValue = {
    name: user.name,
    password: user.password,
    confirmPassword: user.confirmPassword,
    country: user.country,
    city: user.city,
    fullAddress: user.fullAddress,
  };
  const { values, errors, handleChange, touched, handleSubmit, resetForm } =
    useFormik({
      initialValues: initialValue,
      validationSchema: UpdateProfSchema,
      onSubmit: (val) => {
        if (OldPass !== user.password) {
          alert("Your Old Password Cant Match with Original Passowrd");
          setOldPass("");
        } else {
          dispatch(updateUserProfile(val));
          navigate(-1);
        }
      },
    });

  return (
    <div className="container-lg container-fluid d-flex align-items-center flex-column mt-5">
      <div
        className="border d-flex justify-content-center align-items-center flex-column p-3 gap-3"
        style={{ maxWidth: "500px", minWidth: "300px" }}>
        <h2 className="fs-3 fw-bold">
          Update Your Profile<span className="text-green fs-1 fw-bold">.</span>
        </h2>
        <div className="w-100">
          <input
            type="text"
            name="name"
            placeholder="New Name (Required)"
            value={values.name}
            onChange={handleChange}
            className="text-black bg-transparent border newsLetterInp p-2 w-100 my-2"
          />
          {errors.name && touched.name ? (
            <p className="text-green fs-14 fw-semibold">{errors.name}</p>
          ) : null}
        </div>
        <div className="w-100">
          <p className="m-0 text-green fw-semibold">
            Enter Old Password To Update Overall Profile
          </p>
          <input
            type="password"
            name="password "
            placeholder="Old Password (Required)"
            value={OldPass}
            onChange={handleOldPassInp}
            className="text-black bg-transparent border newsLetterInp p-2 w-100 my-2"
          />
        </div>
        <div className="w-100">
          <p className="m-0 text-green fw-semibold">Enter New Password</p>
          <input
            type="password"
            name="password"
            placeholder="New Password (Required)"
            value={values.password}
            onChange={handleChange}
            className="text-black bg-transparent border newsLetterInp p-2 w-100 my-2"
          />
          {errors.password && touched.password ? (
            <p className="text-green fs-14 fw-semibold">{errors.password}</p>
          ) : null}
        </div>

        <div className="w-100">
          <p className="m-0 text-green fw-semibold">Confirm New Password</p>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password (Required)"
            value={values.confirmPassword}
            onChange={handleChange}
            className="text-black bg-transparent border newsLetterInp p-2 w-100 my-2"
          />
          {errors.confirmPassword && touched.confirmPassword ? (
            <p className="text-green fs-14 fw-semibold">
              {errors.confirmPassword}
            </p>
          ) : null}
        </div>
        <div className="w-100 d-flex gap-2 ">
          <div className="w-50">
            <input
              type="text"
              name="country"
              placeholder="Change Country (Required)"
              value={values.country}
              onChange={handleChange}
              className="text-black bg-transparent border newsLetterInp p-2 w-50 my-2 mr-2 w-100"
            />
            {errors.fullAddress && touched.fullAddress ? (
              <p className="text-green fs-14 fw-semibold">{errors.country}</p>
            ) : null}
          </div>
          <div className="w-50">
            <input
              type="text"
              name="city"
              placeholder="New City (Required)"
              value={values.city}
              onChange={handleChange}
              className="text-black bg-transparent border newsLetterInp p-2 w-50 my-2 ml-2 w-100"
            />
            {errors.fullAddress && touched.fullAddress ? (
              <p className="text-green fs-14 fw-semibold">{errors.city}</p>
            ) : null}
          </div>
        </div>
        <div className="w-100">
          <input
            type="text"
            name="fullAddress"
            placeholder="New Full Address (Required)"
            value={values.fullAddress}
            onChange={handleChange}
            className="text-black bg-transparent border newsLetterInp p-2 w-100 my-2"
          />
          {errors.fullAddress && touched.fullAddress ? (
            <p className="text-green fs-14 fw-semibold">{errors.fullAddress}</p>
          ) : null}
        </div>
        <input
          type="submit"
          className="rounded-5 border p-2 text-white main-btn"
          onClick={handleSubmit}
          style={{ outline: "none" }}
          value={"Update Now"}
        />
      </div>
    </div>
  );
};

export default UpdateProf;
