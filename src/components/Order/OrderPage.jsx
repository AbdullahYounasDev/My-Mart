/** @format */
import {
  faArrowAltCircleDown,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const OrderPage = () => {
  const location = useLocation();
  const { SelectProd, amount } = location.state || {};
  const currentUser = useSelector((state) => state.user.currentUser);
  const user = useSelector((state) =>
    state.user.users.find((u) => u.email === currentUser),
  );

  if (!currentUser) {
    return <div className="text-center">No User Signed Up</div>;
  }

  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      <div className="w-100 bg-light p-md-4 p-2">
        <h2 className="my-4 text-center fw-semibold">Order Details</h2>
        <div className="d-flex justify-content-lg-around justify-content-start  gap-3 mt-5 flex-wrap align-item-center">
          <div>
            <h5 className="fw-bold">Personal Details</h5>
            <ul className="list-group-flush">
              <li>
                <span className="fw-bold">Email:</span> {user.email}
              </li>
              <li>
                <span className="fw-bold">Name:</span> {user.name}
              </li>
            </ul>
          </div>
          <div>
            <h5 className="fw-bold">Shipment Address</h5>
            <ul className="list-group-flush">
              <li>
                <span className="fw-bold">Country:</span> {user.country}
              </li>
              <li>
                <span className="fw-bold">City:</span> {user.city}
              </li>
              <li>
                <span className="fw-bold">Full Address:</span>{" "}
                {user.fullAddress}
              </li>
            </ul>
          </div>
        </div>
        <p className="text-center mt-3 mb-0">
          You Can Upadate Personal Details and Shipment Address{" "}
          <FontAwesomeIcon className="text-green" icon={faArrowAltCircleDown} />
        </p>
        <div className="d-flex justify-content-center">
          <Link
            to={"/My-Mart/Update-Profile"}
            className="fs-14 rounded-5 border-0 p-2 px-sm-4 px-3  text-white text-center main-btn fs-5 shadow-lg my-2 d-flex align-items-center justify-content-center">
            Update <FontAwesomeIcon className="mx-2" icon={faUser} />
          </Link>
        </div>
        <h2 className="fw-bold text-center my-4 mt-5">
          Product<span className="fw-bolder text-green">.</span>
        </h2>
        <div className="row border justify-content-between rounded w-100 m-auto">
          <div className="col-md-2 col-12 p-0">
            <img
              src={SelectProd.ImgPath}
              alt={SelectProd.heading}
              width={"100%"}
              height={"100px"}
              style={{ objectFit: "cover" }}
              className="rounded cartIProdmage"
            />
          </div>
          <div className="col-md-2 col-12 d-flex justify-content-center  align-items-center fw-bold fs-5 text-center mt-sm-0 mt-4">
            {SelectProd.heading}
          </div>
          <div className="col-md-2 col-12 d-flex justify-content-center align-items-center fw-bold fs-14">
            Price: {SelectProd.price}
          </div>
          <div className="col-md-2 col-12 d-flex justify-content-center   align-items-center fw-bold ">
            Quantity: {amount}
          </div>
          <div className="col-md-2 col-12 d-flex justify-content-center  align-items-center fw-bold fs-14 mb-sm-0 mb-4">
            Total Price: {amount * SelectProd.price}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
