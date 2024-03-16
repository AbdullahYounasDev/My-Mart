import React, { memo, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CatContext } from "../Context/CategorieContext";
const TopCategories = () => {
  const AddCate = useContext(CatContext);
  return (
    <>
      <div className="container text-center my-5">
        <h1 className="fw-semibold text-black">Shop By Categories</h1>
        <p className="mt-3">Vist Our Shop To See Amazing Products</p>
        <div className="m-auto my-4" style={{ maxWidth: "65px" }}>
          <div className="border-green"></div>
        </div>
        <div className="row">
          {AddCate.filter((categorie) => categorie.top === true).map(
            (categorie) => (
              <div
                className="col-lg-3 col-md-6 col-sm-6 col-6 mt-4"
                key={categorie.id}
              >
                <Link
                  to={`/My-Mart/Categorie/${categorie.heading}`}
                  className="link"
                  style={{ textDecoration: "none" }}
                >
                  <div className="card d-flex justify-content-center align-items-center flex-column categories">
                    <img
                      src={categorie.ImgPath}
                      id={categorie.id}
                      className="card-img-top w-100 catImag"
                      alt={categorie.heading}
                      style={{
                        height: "200px",
                        objectFit: "contain",
                      }}
                    />
                    <h2
                      className="fs-5 text-center p-sm-2 p-0 "
                      style={{ margin: "2px" }}
                    >
                      {categorie.heading}
                    </h2>
                  </div>
                </Link>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default memo(TopCategories);
