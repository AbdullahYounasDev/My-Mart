/** @format */

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userCart, removeFromCart } from "../../Features/User";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AddtoCart = ({ SelectProd, amount, setAmount }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);
  const userCartItems = useSelector(
    (state) =>
      state.user.users.find((user) => user.email === currentUser)?.userCart ||
      [],
  );
  const isAddedToCart = userCartItems.some(
    (item) => item.product.id === SelectProd.id,
  );

  const handleCart = () => {
    if (currentUser) {
      if (isAddedToCart) {
        dispatch(removeFromCart(SelectProd.id));
      } else {
        dispatch(userCart({ SelectProd: SelectProd, amount: amount }));
      }
      setAmount(1);
    }
  };

  return (
    <button
      className="fs-14 rounded-5 border-0 p-2 px-sm-4 px-3  text-white text-center main-btn fs-5 shadow-lg my-2 d-flex align-items-center justify-content-center"
      onClick={handleCart}
      style={{ background: isAddedToCart ? "#ff6683" : "#33cccc" }}>
      <Link
        to={"/My-Mart/Cart"}
        style={{ textDecoration: "none", color: "white" }}>
        {isAddedToCart ? `Remove ` : "Add "}
        <FontAwesomeIcon icon={faShoppingCart} />
      </Link>
    </button>
  );
};

export default AddtoCart;
