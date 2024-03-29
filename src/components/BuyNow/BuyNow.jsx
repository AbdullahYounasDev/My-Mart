import React, { memo } from "react";
import "../../index.css";

const BuyNow = () => {
  return (
    <>
      <button className="fs-14 rounded-5 border px-sm-4 px-3 py-0 text-white text-center main-btn shadow-lg my-2 d-flex align-items-center justify-content-center"
      style={{height:"50px"}}
      >
        Buy Now
      </button>
    </>
  );
};

export default memo(BuyNow);
