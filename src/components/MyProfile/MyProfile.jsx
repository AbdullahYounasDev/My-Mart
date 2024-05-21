/** @format */

import {
  faBoxesPacking,
  faDoorClosed,
  faDoorOpen,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector } from "react-redux";

const MyProfile = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const user = useSelector((state) =>
    state.user.users.find((u) => u.email === currentUser),
  );

  return !user ? (
    <div>No user logged in</div>
  ) : (
    <div className="my-profile">
      <div className="categorie-sec container-fluid text-center py-5">
        <h3 className="text-green fw-bold fs-5">Hello</h3>
        <h1 className="text-white fs-70 m-0">
          {user.name}
          <span className="text-green fw-bold">.</span>
        </h1>
        <h3 className="text-white fw-bold fs-5">
          Welcome to <span className="text-green">My Mart</span>
        </h3>
      </div>
      <div className="container mt-5 ">
        <h2 className="my-3 fw-semibold">Your Profile:</h2>
        <div className="row mb-3">
          <div className="col-md-4 ">
            <strong>Name:</strong> {user.name}
          </div>
          <div className="col-md-4 ">
            <strong>Email:</strong> {user.email}
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-4 ">
            <strong>Country:</strong> {user.country}
          </div>
          <div className="col-md-4 ">
            <strong>City:</strong> {user.city}
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-12 ">
            <strong>Full Address:</strong> {user.fullAddress}
          </div>
        </div>
        <div className="d-flex gap-3 flex-wrap">
          <button className="fs-14 rounded-5 border-0 p-2 px-sm-4 px-3  text-white text-center main-btn fs-5 shadow-lg my-2 d-flex align-items-center justify-content-center">
            Update <FontAwesomeIcon className="mx-2" icon={faUser} />
          </button>
          <button className="fs-14 rounded-5 border-0 p-2 px-sm-4 px-3  text-white text-center main-btn fs-5 shadow-lg my-2 d-flex align-items-center justify-content-center">
            Orders <FontAwesomeIcon className="mx-2" icon={faBoxesPacking} />
          </button>
          <button className="fs-14 rounded-5 border-0 p-2 px-sm-4 px-3  text-white text-center main-btn fs-5 shadow-lg my-2 d-flex align-items-center justify-content-center">
            Logout <FontAwesomeIcon className="mx-2" icon={faDoorOpen} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
