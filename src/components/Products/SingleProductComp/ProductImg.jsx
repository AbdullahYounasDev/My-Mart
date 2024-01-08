import React from "react";
import Product from "../Product";
import PageNotFound from "../../Page Not Found/PageNotFound";

const ProductImg = ({ productId, productName }) => {
  // if routes cant match then return null
  const SelectProd = Product.find(
    (product) => product.id == productId && product.heading == productName
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

export default ProductImg;
