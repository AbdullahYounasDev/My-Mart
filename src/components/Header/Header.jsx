import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../Search/SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faShoppingCart,
  faHeart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import SearchResDiv from "../Search/SearchResDiv";
import WhishList from "../WhishList/WhishList";

const Header = () => {
  //For Search Bar
  const [SearchMe, setSearchMe] = useState(false);
  const GetSearchBar = (e) => {
    e.preventDefault();
    setSearchMe(!SearchMe);
  };
  const [SearchContent, setSearchContent] = useState("");
  // get Search Content
  const getSearch = (searchCont) => {
    setSearchContent(searchCont);
  };
  // For Whishlist
  const [OpenWhish, setOpenWhish] = useState(false);
  const HandleWish = (e) => {
    e.preventDefault();
    setOpenWhish(!OpenWhish);
    if (OpenWhish == false) document.body.style.overflowY = "hidden";
    else document.body.style.overflowY = "scroll";
  };
  return (
    <div className="bg-transparent position-relative d-flex justify-content-center align-items-center">
      <div className="w-100">
        <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom">
          <div className="container-fluid">
            <Link
              className="navbar-brand fs-1 fw-semibold main-head"
              to="/My-Mart"
            >
              MyMart<span className="text-green fs-1 fw-bold">.</span>
            </Link>
            <div className="d-flex justify-center align-items-center">
              <div
                className="d-flex d-lg-none justify-center align-items-center gap-2"
                style={{ marginTop: "5px" }}
              >
                <div>
                  <button
                    className="border-0 bg-transparent"
                    onClick={GetSearchBar}
                  >
                    <FontAwesomeIcon icon={faSearch} className="icons" />
                  </button>
                </div>
                <div>
                  <button className="border-0 bg-transparent">
                    <FontAwesomeIcon icon={faShoppingCart} className="icons" />
                  </button>
                </div>
                <div>
                  <button className="border-0 bg-transparent">
                    <FontAwesomeIcon icon={faUser} className="icons" />
                  </button>
                </div>
              </div>
              <button
                className="navbar-toggler border-0"
                style={{ boxShadow: "none" }}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon text-black"></span>
              </button>
            </div>
            <div
              className="collapse navbar-collapse d-flex justify-content-center align-items-center"
              id="navbarSupportedContent"
            >
              {/* Icons for Md to Sm */}
              {/* Navigation */}
              <ul className="navbar-nav mb-2 mb-lg-0 gap-lg-5 fw-semibold gap-3 fs-5">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/My-Mart"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/My-Mart/Product"
                  >
                    Product
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/My-Mart/About"
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/My-Mart/Contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            {/* Icons for Lg */}
            <div className="d-none d-lg-flex justify-center align-items-center gap-2 ">
              <div>
                <button
                  to="#"
                  className="border-0 bg-transparent "
                  onClick={GetSearchBar}
                >
                  <FontAwesomeIcon icon={faSearch} className="icons" />
                </button>
              </div>
              <div>
                <button to="#" className="border-0 bg-transparent">
                  <FontAwesomeIcon icon={faShoppingCart} className="icons" />
                </button>
              </div>
              <div>
                <button
                  to="#"
                  className="border-0 bg-transparent"
                  onClick={HandleWish}
                >
                  <FontAwesomeIcon icon={faHeart} className="icons" />
                </button>
              </div>
              <div>
                <button to="#" className="border-0 bg-transparent">
                  <FontAwesomeIcon icon={faUser} className="icons" />
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
      {SearchMe && (
        <SearchBar getSearch={getSearch} setSearchMe={setSearchMe} />
      )}
      {SearchMe && (
        <SearchResDiv setSearch={SearchContent} setSearchMe={setSearchMe} />
      )}
      {OpenWhish && (
        <WhishList setOpenWhish={setOpenWhish} OpenWhish={OpenWhish} />
      )}
    </div>
  );
};

export default Header;
