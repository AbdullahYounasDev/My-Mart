import React, { useState, useContext, memo } from "react";
import { Link } from "react-router-dom";
import Categorie from "./Categorie";
import { CatContext } from "../Context/CategorieContext";
const Categories = () => {
  const AddCate = useContext(CatContext);
  return (
    <>
      <div className="categorie-sec container-fluid text-center py-5">
        <h1 className="text-white fs-70">Categories</h1>
        <div className="m-auto my-5" style={{ maxWidth: "65px" }}>
          <div className="border-green"></div>
        </div>
      </div>
      <div className="container text-center my-5">
        <div className="row">
          {AddCate.map((categorie) => (
            <div
              className="col-lg-3 col-md-6 col-sm-6 col-6 mt-2"
              key={categorie.id}
            >
              <Link
                to={`/My-Mart/Categorie/${categorie.heading}/`}
                className="link"
                style={{ textDecoration: "none" }}
              >
                <div className="card d-flex justify-content-center align-items-center flex-column categories">
                  <img
                    src={categorie.ImgPath}
                    id={categorie.id}
                    className="card-img-top w-100 "
                    alt={categorie.heading}
                    style={{
                      height: "200px",
                      objectFit: "contain",
                    }}
                  />
                  <div className="card-body">
                    <h2 className="fs-5 text-center p-0">
                      {categorie.heading}
                    </h2>
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

export default memo(Categories);
