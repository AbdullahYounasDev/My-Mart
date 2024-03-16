import React, { memo, useContext } from "react";
import { AppContext } from "../../Context/ProductContext";

const ProductImg = ({ productId, productName }) => {
  // if routes cant match then return null
  const AddProd = useContext(AppContext);
  const SelectProd = AddProd.find(
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

export default memo(ProductImg);
