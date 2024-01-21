import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Categorie from "./Categorie";
import Product from "../Products/Product";
import AddtoCart from "../AddToCart/AddtoCart";

const SingleCategorie = () => {
  const { categorieName } = useParams();
  //   Use to check category name in Url and in actual category
  const selectedCategory = Categorie.find(
    (category) => category.heading == categorieName
  );
  const [AddProd, setAddCatProd] = useState(Product);

  return (
    <>
      {selectedCategory ? (
        <div>
          {/* if categorie in url is present  then show this */}
          <div className="categorie-sec container-fluid text-center py-5">
            <h1 className="text-white fs-70">{selectedCategory.heading}</h1>
            <div className="m-auto my-5" style={{ maxWidth: "65px" }}>
              <div className="border-green"></div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          {/* Else Show this */}
          <div className="categorie-sec container-fluid text-center py-5">
            <h1 className="text-white fs-70">Categorie Not Found</h1>
            <div className="m-auto my-5" style={{ maxWidth: "65px" }}>
              <div className="border-green"></div>
            </div>
          </div>
        </div>
      )}

      <div className="container text-center my-5">
        <div className="row row-cols-lg-5 row-cols-md-3 row-cols-2">
          {/* This is use to check if Product has categorie of same name as categorie in Url then show these products in page */}
          {AddProd.filter(
            (filterProd) => filterProd.categorie === categorieName
          ).map((mapProduct) => (
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
                      className="fs-4 text-center p-0 fw-semibold"
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
                          className="heart-icon fs-2 "
                          style={{ fontFamily: "system-ui", color: "grey" }}
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

export default SingleCategorie;
