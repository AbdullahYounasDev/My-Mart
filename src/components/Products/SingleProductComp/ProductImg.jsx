/** @format */

import React, { memo } from "react";
import { useSelector } from "react-redux";

const ProductImg = ({ productId, productName }) => {
  // if routes cant match then return null
  const AddProd = useSelector((state) => state.features.Product);
  const SelectProd = AddProd.find(
    (product) => product.id == productId && product.heading == productName,
  );
  if (!SelectProd) {
    return null;
  }
  return (
    <div>
      <img
        src={SelectProd.ImgPath}
        alt={`${SelectProd.heading} Image`}
        className="w-100 rounded-4 shadow-sm prod-img"
        style={{ height: "600px", objectFit: "cover" }}
      />
    </div>
  );
};

export default memo(ProductImg);
