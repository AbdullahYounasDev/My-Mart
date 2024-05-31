/** @format */
import {
  faArrowAltCircleDown,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToOrders } from "../../Features/User";

const OrderCartProd = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);
  const user = useSelector((state) =>
    state.user.users.find((u) => u.email === currentUser),
  );
  if (!currentUser) {
    return <div className="text-center">No User Signed Up</div>;
  }
  const AllUserInfoAboutProd = user.userCart;
  const cartProd = AllUserInfoAboutProd.flat().map(
    (userCart) => userCart.product,
  );
  const amount = AllUserInfoAboutProd.flat().map((userCart) => userCart.amount);
  const [confirmOrder, setConfirmOrder] = useState(false);
  const handleAddToOrder = () => {
    dispatch(addToOrders(AllUserInfoAboutProd)); // Dispatch the action with the order object
    setConfirmOrder(true);
    alert("Your Order is Submitted and On the way of Your Address");
  };
  // // Calculate total price for each product
  const totalPrices = cartProd.map((prod, index) => prod.price * amount[index]);

  // // Calculate overall cart total
  const cartTotal = totalPrices.reduce((acc, curr) => acc + curr, 0);

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
        {cartProd.map((prod, index) => (
          <div
            key={prod.id}
            className="col-lg-12 col-md-4 col-6 d-flex justify-content-center align-items-center">
            <div className="row my-4 flex-wrap justify-content-center align-items-center w-100 gap-2 cartItem rounded  position-relative">
              <div className="col-lg-2 col-12 d-flex justify-content-center align-items-center p-0">
                <img
                  src={prod.ImgPath}
                  alt={prod.heading}
                  width={"100%"}
                  height={"100px"}
                  style={{ objectFit: "cover" }}
                  className="rounded cartIProdmage"
                />
              </div>
              <div className="col-lg-2 col-12 d-flex justify-content-center  align-items-center fw-bold fs-5 text-center">
                {prod.heading}
              </div>
              <div className="col-lg-2 col-12 d-flex justify-content-center align-items-center fw-bold fs-14">
                Price: {prod.price}
              </div>
              <div className="col-lg-2 col-12 d-flex justify-content-center   align-items-center fw-bold ">
                Quantity: {amount[index]}
              </div>
              <div className="col-lg-2 col-12 d-flex justify-content-center  align-items-center fw-bold fs-14">
                Total Price: {amount[index] * prod.price}
              </div>
              <hr className=" w-75 d-lg-block d-none" />
            </div>
          </div>
        ))}
        <div className="d-flex flex-wrap justify-content-center align-items-center gap-sm-5 gap-2 m-sm-0 mt-3">
          <h6 style={{ float: "right" }} className="fw-bold">
            Total Amount :{" "}
            <span className="text-green">{cartTotal + ".00 Rs"}</span>
          </h6>
          <h6 style={{ float: "right" }} className="fw-bold">
            Total Items : <span className="text-green">{cartProd.length}</span>
          </h6>
        </div>
        <div className="d-flex justify-content-center mt-2">
          <button
            className={`fs-14 rounded-5 border-0 p-2 px-sm-4 px-3 text-white text-center main-btn fs-5 shadow-lg my-2 d-flex align-items-center justify-content-center ${
              confirmOrder ? "confirmed-btn" : ""
            }`}
            style={{ background: confirmOrder ? "#FF6683" : "#33ccc" }}
            onClick={confirmOrder ? () => {} : handleAddToOrder}>
            {confirmOrder ? "Confirmed" : "Confirm Order"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderCartProd;
