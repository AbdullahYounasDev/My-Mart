import React from "react";
import me from "../Images/me.jpg";
import team from "../Images/team.jpg";
import mart from "../Images/mart.jpg";
import CustomerSat from "../Home/CustomerSat";
const About = () => {
  return (
    <div>
      <div className="about-sec container-fluid text-center py-5">
        <h1 className="text-white fs-70">About Us</h1>
        <div className="m-auto my-5" style={{ maxWidth: "65px" }}>
          <div className="border-green"></div>
        </div>
      </div>

      <div className="container">
        <CustomerSat />
        <div className="row mt-5">
          <div className="col-12 col-lg-5 col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
            <img src={me} alt="" className="w-100 rounded shadow-lg" />
          </div>
          <div className="col-12 col-lg-7 col-md-6 col-sm-12 py-3 d-flex flex-column justify-content-center ps-lg-5 ps-md-5 ps-0">
            <h2 className="fw-semibold text-black">About us</h2>
            <p className="fs-5 text-black">
              At MyMart, we believe in transforming your shopping experience
              into something extraordinary. Our online marketplace is not just a
              platform for transactions; it's a destination where quality meets
              convenience, and customer satisfaction is our top priority.
            </p>
          </div>
        </div>
        <div className="row mt-5 flex-row-reverse">
          <div className="col-12 col-lg-5 col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
            <img src={mart} alt="" className="w-100 rounded shadow-lg" />
          </div>
          <div className="col-12 col-lg-7 col-md-6 col-sm-12 py-3 d-flex flex-column justify-content-center">
            <h2 className="fw-semibold text-black">Our Story</h2>
            <p className="fs-5 text-black">
              Founded in 2021, MyMart has emerged as a beacon of innovation and
              reliability in the world of online shopping. What started as a
              vision to create a seamless and enjoyable shopping experience has
              grown into a thriving eCommerce ecosystem that caters to the
              diverse needs and tastes of our valued customers.
            </p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12 col-lg-5 col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
            <img src={team} alt="" className="w-100 rounded shadow-lg" />
          </div>
          <div className="col-12 col-lg-7 col-md-6 col-sm-12 py-3 d-flex flex-column justify-content-center ps-lg-5 ps-md-5 ps-0">
            <h2 className="fw-semibold text-black">Our Mission</h2>
            <p className="fs-5 text-black">
              At the core of our mission is a commitment to providing
              unparalleled value to our customers. We strive to be more than
              just an eCommerce platform; we aim to be your go-to destination
              for all your shopping needs. Our mission is to deliver a curated
              selection of high-quality products, paired with exceptional
              customer service, ensuring your satisfaction with every purchase.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
