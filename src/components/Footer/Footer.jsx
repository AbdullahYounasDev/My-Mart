import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobile,
  faMapMarkerAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import Categorie from "../Categories/Categorie";

// initial val
const initialVal = {
  newesEmail: "",
};

const Footer = () => {
  // paragraph text which change when user fill wrong inp
  const [changeNewes, setChangeNewes] = useState(
    "Subscribe to the weekly NewsLetter for all rescent updates"
  );
  // use to store email in database
  const [StoreEmail, setStoreEmail] = useState([]);
  // use to input value when input val change
  const [newesEmail, setnewesEmail] = useState(initialVal.newesEmail);
  // regex exp for validation of email
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  // onChange func
  const changeNewesInp = (e) => {
    setnewesEmail(e.target.value);
  };
  // onClick func
  const submitLetter = (e) => {
    e.preventDefault();
    //if there is no val
    if (newesEmail.trim() === "") {
      return;
    }
    // if inp val cant meet with regex val
    else if (!isValidEmail(newesEmail)) {
      setChangeNewes("Please use right syntax of your email. Thanks!");
      return;
    }
    // if email is already in use
    else if (StoreEmail.some((email) => email === newesEmail)) {
      setChangeNewes(
        "This email is already in use. Please use another email. Thanks!"
      );
      return;
    }
    // normal
    else {
      setChangeNewes(
        "Subscribe to the weekly NewsLetter for all rescent updates"
      );
    }
    // use to store in database on click
    setStoreEmail([...StoreEmail, newesEmail]);
    setnewesEmail("");
  };
  return (
    <>
      <div className="container-fluid bg-light py-4 px-5 border-top mt-5">
        <div className="row flex-wrap">
          {/* Find in Fast */}
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 d-flex align-items-center flex-column mt-lg-0 mt-3">
            <h3 className="text-black fw-medium fs-4 fw-semibold m-0">
              Find in Fast
            </h3>
            <ul className="navbar-nav fw-medium gap-1 fs-5 mt-4 text-center">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/Product"
                >
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/Blog"
                >
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/About"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/Contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/* Categories */}
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 d-flex align-items-center flex-column mt-lg-0 mt-3">
            <h3 className="text-black fw-medium fs-4 fw-semibold m-0">
              Categories
            </h3>
            <ul className="navbar-nav fw-medium gap-1 fs-5 mt-4 text-center">
              {Categorie.map((categorie) => (
                <li className="nav-item" key={categorie.id}>
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to={`/Categorie/${categorie.heading}`}
                  >
                    {categorie.heading}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact */}
          <div className="col-12 col-lg-4 d-flex align-items-center flex-column mt-lg-0 mt-3">
            <h3 className="text-black fw-medium fs-4 fw-semibold m-0">
              Contact Us
            </h3>
            <p className="mt-4 fs-5 text-center p-1">
              If You Have Any Type of Question Please Contact Us at
              Example@gmail.com
            </p>
            <div className="text-black mt-3 gap-2 d-flex flex-column">
              <h3>
                <FontAwesomeIcon icon={faMobile} className="location" />
                <span className="fs-5 ms-2">+92 0234 456</span>
              </h3>
              <h3>
                <FontAwesomeIcon icon={faMapMarkerAlt} className="location" />
                <span className="fs-5 ms-2">123 United States</span>
              </h3>
            </div>
          </div>
        </div>
        {/* News Letter */}
        <div className="container-fluid mt-5 border p-5">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 d-flex flex-row mt-lg-0 mt-3 justify-content-center align-items-center">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-black"
                style={{ height: "50px" }}
              />
              <h3 className="ms-2 fs-5 fw-semibold text-black">
                SIGN-UP FOR <br /> NEWSLETTER
              </h3>
            </div>
            {/* paragraph of newes letter */}
            <div className="col-12 col-sm-12 col-md-6 col-lg-4 d-flex flex-row mt-lg-0 mt-3 text-black fs-5 text-md-start text-lg-start text-center">
              <p>{changeNewes}</p>
            </div>
            {/* input field of newes letter */}
            <div className="col-12 col-lg-4 d-flex flex-row text-black justify-content-center align-items-center">
              <div className="border border-2 border p-2 d-flex justify-content-between align-items-center">
                <input
                  name="newesLetter"
                  onChange={changeNewesInp}
                  value={newesEmail}
                  type="email"
                  placeholder="Email Address"
                  className="text-black bg-transparent border-0 newsLetterInp"
                />
                <button
                  className="rounded-5 border p-2 text-white main-btn"
                  onClick={submitLetter}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="container-fluid text-center bg-black text-white p-4 w-100">
        <p className="m-0">
          &copy; 2023
          <span className="fw-semibold text-green"> MyMart</span>. All rights
          reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
