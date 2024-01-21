import React from "react";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <>
      <div className="hero-sec p-sm-5 p-2">
        <div className="container-fluid my-5 p-5 bg-black text-white m-0 d-flex justify-content-center align-items-center flex-column bg-transparent">
          <h1 className="fs-70 shadow-lg text-center fs-25">
            Healthy Food &<br className="d-none d-sm-block" /> Organic Market
          </h1>
          <p className="fs-5 fs-lg-4 fs-md-4 shadow-lg my-3 mb-4 text-center fs-14">
            All Products Are{" "}
            <span className="text-green fw-semibold">Healthy</span>
          </p>
          <div className="gap-3 d-flex justify-content-center align-items-center flex-wrap flex-row">
            <button className="rounded-5 border-0 p-2 px-sm-4 px-3  text-white main-btn fs-5 shadow-lg">
              <Link
                className="text-white fs-14"
                aria-current="page"
                to="/My-Mart/Product"
                style={{ textDecoration: "none" }}
              >
                Shop Now
              </Link>
            </button>
            <button className="rounded-5 border-0 p-2 px-sm-4 px-3 text-white main-btn fs-5 shadow-lg">
              <Link
                className="text-white fs-14"
                aria-current="page"
                to="/My-Mart/Contact"
                style={{ textDecoration: "none" }}
              >
                Contact Us
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
