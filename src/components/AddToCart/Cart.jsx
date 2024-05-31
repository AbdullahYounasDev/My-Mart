/** @format */

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../Features/User";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const removeCart = (id) => {
    dispatch(removeFromCart(id));
  };
  const allUser = useSelector((state) => state.user.users);
  const currentUser = useSelector((state) => state.user.currentUser);

  const filterdUser = allUser.filter((user) => currentUser == user.email);
  const AllUserInfoAboutProd = filterdUser.map((user) => user.userCart);
  const cartProd = AllUserInfoAboutProd.flat().map(
    (userCart) => userCart.product,
  );
  const amount = AllUserInfoAboutProd.flat().map((userCart) => userCart.amount);

  // // Calculate total price for each product
  const totalPrices = cartProd.map((prod, index) => prod.price * amount[index]);

  // // Calculate overall cart total
  const cartTotal = totalPrices.reduce((acc, curr) => acc + curr, 0);
  return (
    <div className="container-lg container-fluid my-lg-4 my-2 border p-3">
      <div className="d-flex flex-wrap justify-content-between align-items-center">
        <h2 className="fs-3 fw-bold">My Cart</h2>
        <div className="d-flex flex-wrap justify-content-between align-items-center gap-sm-5 gap-2 m-sm-0 mt-3">
          <h6 style={{ float: "right" }} className="fw-bold">
            Total Amount :{" "}
            <span className="text-green">{cartTotal + ".00 Rs"}</span>
          </h6>
          <h6 style={{ float: "right" }} className="fw-bold">
            Total Items : <span className="text-green">{cartProd.length}</span>
          </h6>
        </div>
      </div>
      <div className="row my-4 flex-wrap justify-content-center align-items-center">
        {currentUser ? (
          cartProd.length > 0 ? (
            cartProd.map((prod, index) => (
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
            ))
          ) : (
            <h3 className="text-center mt-4 fw-semibold">
              {" "}
              <span className="text-green">Cart</span> is Empty
            </h3>
          )
        ) : (
          <>
            <h3 className="text-center mt-5 fw-bold mb-0">
              Please
              <Link to={"/My-Mart/Login"}>
                {" "}
                <span className="text-green">Login</span>
              </Link>{" "}
              Or{" "}
              <Link to={"/My-Mart/Signup"}>
                <span className="text-green">Sign Up</span>
              </Link>
            </h3>
            <p
              className="text-center fw-semibold p-0 "
              style={{ marginTop: "10px" }}>
              And Make Cart Active For Only You
            </p>
          </>
        )}
      </div>
      <div className="d-flex justify-content-between w-100">
        <button
          className="fs-14 rounded-5 border-0 p-2 px-sm-4 px-3 mx-2 mb-3 mt-4 text-white text-center main-btn shadow-lg d-flex align-items-center justify-content-center"
          onClick={() => navigate(-1)}>
          Go Back
        </button>
        {cartProd.length > 0 ? (
          <>
            <Link
              to={"/My-Mart/CartOrder"}
              className="fs-14 rounded-5 border-0 p-2 px-sm-4 px-3 mx-2 mb-3 mt-4 text-white text-center main-btn shadow-lg d-flex align-items-center justify-content-center"
              style={{ background: "#ff6683" }}>
              {" "}
              Buy All
            </Link>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Cart;
