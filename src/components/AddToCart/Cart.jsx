/** @format */

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { toggleCartFalse } from "../../Features/Features";
import BuyNow from "../BuyNow/BuyNow";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const date = new Date();
  const dispatch = useDispatch();
  const removeCart = (id) => {
    dispatch(toggleCartFalse(id));
  };
  const cartProd = useSelector((state) => state.features.Product);
  const filteredCart = cartProd.filter((prod) => prod.carted == true);
  // Calculate total price for each product
  const totalPrices = filteredCart.map((prod) => prod.price * prod.amount);

  // Calculate overall cart total
  const cartTotal = totalPrices.reduce((acc, curr) => acc + curr, 0);
  return (
    <div className="container-lg container-fluid my-lg-4 my-2 border p-3">
      <div className="d-flex flex-wrap justify-content-between align-items-center">
        <h2 className="fs-3 fw-bold">My Cart</h2>
        <h6 style={{ float: "right" }} className="fw-bold">
          Total Amount :{" "}
          <span className="text-green">{cartTotal + ".00 Rs"}</span>
        </h6>
      </div>
      <div className="row my-4 flex-wrap justify-content-center align-items-center">
        {filteredCart.length > 0 ? (
          filteredCart.map((prod) => (
            <div
              key={prod.id}
              className="col-lg-12 col-md-4 col-6 d-flex justify-content-center align-items-center">
              <div className="row my-4 flex-wrap justify-content-center align-items-center w-100 gap-2 cartItem rounded  position-relative">
                <div className="col-lg-2 col-12 d-flex justify-content-start align-items-center d-lg-none position-absolute top-0 z-1 p-0 m-0 mt-2 ">
                  <h4
                    className="mx-4 icons text-white"
                    style={{ cursor: "pointer" }}
                    onClick={() => removeCart(prod.id)}>
                    <FontAwesomeIcon icon={faTimes} />
                  </h4>
                </div>
                <div className="col-lg-2 col-12 d-flex justify-content-center align-items-center p-0">
                  <h4
                    className="mx-4 icons d-lg-block d-none"
                    style={{ cursor: "pointer" }}
                    onClick={() => removeCart(prod.id)}>
                    <FontAwesomeIcon icon={faTimes} />
                  </h4>
                  <img
                    src={prod.ImgPath}
                    alt={prod.heading}
                    width={"100%"}
                    height={"100px"}
                    style={{ objectFit: "cover" }}
                    className="rounded"
                  />
                </div>
                <div className="col-lg-2 col-12 d-flex justify-content-center  align-items-center fw-bold fs-5 text-center">
                  {prod.heading}
                </div>
                <div className="col-lg-2 col-12 d-flex justify-content-center align-items-center fw-bold fs-14">
                  Price: {prod.price}
                </div>
                <div className="col-lg-2 col-12 d-flex justify-content-center   align-items-center fw-bold ">
                  Quantity: {prod.amount}
                </div>
                <div className="col-lg-2 col-12 d-flex justify-content-center  align-items-center fw-bold fs-14">
                  Total Price: {prod.amount * prod.price}
                </div>
                <div className="text-center mt-3" style={{ fontSize: "10px" }}>
                  {date.getDate()} - {date.getMonth()} - {date.getFullYear()}
                </div>
                <hr className=" w-75 d-lg-block d-none" />
              </div>
            </div>
          ))
        ) : (
          <h2 className="fs-3 text-center">Cart is Empty</h2>
        )}
      </div>
      <div className="d-flex justify-content-between w-100">
        <button
          className="fs-14 rounded-5 border-0 p-2 px-sm-4 px-3 mx-2 mb-3 mt-4 text-white text-center main-btn shadow-lg d-flex align-items-center justify-content-center"
          onClick={() => navigate(-1)}>
          Go Back
        </button>
        {filteredCart.length > 0 ? (
          <>
            <BuyNow />
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Cart;
