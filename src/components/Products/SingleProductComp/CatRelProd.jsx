/** @format */

import React, { useContext, memo } from "react";
import { CatContext } from "../../Context/CategorieContext";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const CatRelProd = ({ productId, productName }) => {
  // if routes cant match then return null
  const AddProd = useSelector((state) => state.features.Product);
  const AddCat = useContext(CatContext);
  const SelectProd = AddProd.find(
    (product) => product.id == productId && product.heading == productName,
  );

  if (!SelectProd) {
    return null;
  }
  // to get product come from prop
  const ProdName = AddProd.find((prod) => prod.heading === productName);
  // to get categorie of that prod
  const CatName = AddCat.find((cat) => ProdName.categorie === cat.heading);
  // to get products from categorie
  const filteredProducts = AddProd.filter(
    (prod) => prod.categorie === CatName.heading,
  );
  // Exclude the product with the same Name as the one received via props
  const filteredRandomProducts = filteredProducts.filter(
    (prod) => prod.heading !== productName,
  );
  // Fisher-Yates shuffle algorithm
  const shuffledProducts = [...filteredRandomProducts];
  for (let i = shuffledProducts.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledProducts[i], shuffledProducts[j]] = [
      shuffledProducts[j],
      shuffledProducts[i],
    ];
  }
  // Take the first 5 products
  const randomFiveProducts = shuffledProducts.slice(0, 5);
  return (
    <div className="container-fluid text-center my-5 py-5 px-0 mx-0">
      <h1 className="fw-semibold text-black">Related Products</h1>
      <div className="m-auto my-4" style={{ maxWidth: "65px" }}>
        <div className="border-green"></div>
      </div>
      <div className="container-fluid text-center my-5 p-0 mx-0">
        <div className="row row-cols-lg-5 row-cols-md-3 row-cols-2">
          {randomFiveProducts.map((mapProduct) => (
            <div className="mt-3" key={mapProduct.id}>
              <Link
                to={`/My-Mart/Product/${mapProduct.heading}/${mapProduct.id}`}
                className="link text-white fw-semibold m-0 p-0 text-center"
                style={{ textDecoration: "none", fontSize: "14px" }}>
                <div className="card d-flex justify-content-center align-items-center flex-column categories">
                  <img
                    src={mapProduct.ImgPath}
                    id={mapProduct.id}
                    className="card-img-top w-100 "
                    alt={mapProduct.heading}
                    style={{
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                  <div className="card-body w-100 d-flex justify-content-center align-items-center flex-column">
                    <h3
                      className="text-center p-0 fw-semibold"
                      style={{ color: "gray", fontSize: "14px" }}>
                      {mapProduct.categorie}
                    </h3>
                    <h2
                      className="fs-5 text-center p-0 fw-semibold"
                      style={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}>
                      {mapProduct.heading}
                    </h2>
                    <div className="d-flex justify-content-center align-items-center w-100">
                      <div>
                        <h4
                          className="p-0 text-green fw-semibold m-0 text-align-center"
                          style={{ fontSize: "16px" }}>
                          {mapProduct.price}.00 Rs
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(CatRelProd);
