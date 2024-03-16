import React, { memo } from "react";
import "../../index.css";

const AddtoCart = () => {
  return (
    <>
      <button className="fs-14 rounded-5 border-0 p-2 px-sm-4 px-3  text-white text-center main-btn fs-5 shadow-lg my-2 d-flex align-items-center justify-content-center">
        Add to Cart
      </button>
    </>
  );
};

export default memo(AddtoCart);
