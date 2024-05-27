/** @format */

import React, { memo } from "react";
import "../../index.css";
import { useNavigate } from "react-router-dom";

const BuyNow = ({ SelectProd, amount }) => {
  const navigate = useNavigate();

  const handleOrderNow = () => {
    navigate("/My-Mart/Order", {
      state: { SelectProd, amount },
    });
  };

  return (
    <button
      onClick={handleOrderNow}
      className="fs-14 rounded-5 border-0 p-2 px-sm-4 px-3  text-white text-center main-btn fs-5 shadow-lg my-2 d-flex align-items-center justify-content-center"
      style={{ background: "#ff6683" }}>
      Order Now
    </button>
  );
};

export default memo(BuyNow);
