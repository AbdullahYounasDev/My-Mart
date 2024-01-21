import React, { useState } from "react";
import { Link } from "react-router-dom";
import Product from "./Product";
import AddtoCart from "../AddToCart/AddtoCart";

const FeatProducts = () => {
  const [AddProd, setAddProd] = useState(Product);
  const filterProduct = AddProd.filter((prod) => prod.featured === true);
  return (
    <>
      <div className="container text-center my-5">
        <h1 className="fw-semibold text-black">Our Featured Products</h1>
        <p className="mt-3">Buy Our Products And Get Exclusive Discounts</p>
        <div className="m-auto my-5" style={{ maxWidth: "65px" }}>
          <div className="border-green"></div>
        </div>
        <div className="row row-cols-lg-5 row-cols-md-3 row-cols-2">
          {filterProduct.map((mapProduct) => (
            <div className="mt-4" key={mapProduct.id}>
              <Link
                to={`/My-Mart/Product/${mapProduct.heading}/${mapProduct.id}`}
                className="link text-white fw-semibold"
                style={{ textDecoration: "none", fontSize: "14px" }}
              >
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
                  <div className="card-body w-100 d-flex align-items-center justify-content-center flex-column">
                    <h3
                      className="text-center p-0 fw-semibold"
                      style={{ color: "gray", fontSize: "14px" }}
                    >
                      {mapProduct.categorie}
                    </h3>
                    <h2
                      className="fs-5 fw-semibold text-center p-0"
                      style={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {mapProduct.heading}
                    </h2>
                    <div className="d-flex justify-content-between align-items-center w-100">
                      <div>
                        <h4
                          className="p-0 text-green fw-semibold m-0 text-align-center"
                          style={{ fontSize: "16px" }}
                        >
                          {mapProduct.price}.00 Rs
                        </h4>
                      </div>
                      <div>
                        <div
                          className="heart-icon fs-2"
                          style={{
                            fontFamily: "system-ui",
                            color: "gray",
                          }}
                        >
                          &#x2665;
                        </div>
                      </div>
                    </div>
                    <AddtoCart />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FeatProducts;
