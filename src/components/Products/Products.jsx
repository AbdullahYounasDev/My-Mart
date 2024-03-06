import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../Context/ProductContext";
const Products = () => {
  const AddProd = useContext(AppContext);

  return (
    <>
      <div className="prod-sec container-fluid text-center py-5">
        <h1 className="text-white fs-70">Products</h1>
        <div className="m-auto my-5" style={{ maxWidth: "65px" }}>
          <div className="border-green"></div>
        </div>
      </div>
      <div className="container text-center my-5">
        <div className="row row-cols-lg-5 row-cols-md-3 row-cols-2">
          {AddProd.map((mapProduct) => (
            <div className="mt-4" key={mapProduct.id}>
              <Link
                to={`/My-Mart/Product/${mapProduct.heading}/${mapProduct.id}`}
                className="link text-white fw-semibold m-0 p-0 text-center"
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
                  <div className="card-body w-100 d-flex justify-content-center align-items-center flex-column">
                    <h3
                      className="text-center p-0 fw-semibold"
                      style={{ color: "gray", fontSize: "14px" }}
                    >
                      {mapProduct.categorie}
                    </h3>
                    <h2
                      className="fs-5 text-center p-0 fw-semibold"
                      style={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {mapProduct.heading}
                    </h2>
                    <div className="d-flex justify-content-center align-items-center w-100">
                      <div>
                        <h4
                          className="p-0 text-green fw-semibold m-0 text-align-center"
                          style={{ fontSize: "16px" }}
                        >
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
    </>
  );
};

export default Products;
