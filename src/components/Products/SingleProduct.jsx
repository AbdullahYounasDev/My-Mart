import React from "react";
import ProductImg from "./SingleProductComp/ProductImg";
import ProductDetails from "./SingleProductComp/ProductDetails";
import { useParams } from "react-router-dom";
import CatRelProd from "./SingleProductComp/CatRelProd";
const SingleProduct = () => {
  const { productName, productId } = useParams();

  return (
    <div>
      <div className="container mt-5">
        <div className="row justify-content-between">
          <div className="col-lg-4 col-md-12 p-0">
            <ProductImg productId={productId} productName={productName} />
          </div>
          <div className="col-lg-7 col-md-12 py-5">
            <ProductDetails productId={productId} productName={productName} />
          </div>
        </div>
        <CatRelProd productId={productId} productName={productName} />
      </div>
    </div>
  );
};

export default SingleProduct;
