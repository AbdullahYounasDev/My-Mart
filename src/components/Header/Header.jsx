import React, { useState, useEffect, memo } from "react";
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
    e.stopPropagation();
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
    e.stopPropagation();
    setOpenWhish(!OpenWhish);
    if (OpenWhish == false) document.body.style.overflow = "hidden ";
    else document.body.style.overflowY = "scroll";
  };
  if (OpenWhish == true) {
    document.body.onclick = () => {
      setOpenWhish(false);
      document.body.style.overflowY = "scroll";
    };
  }
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

            <button
              className="navbar-toggler border-0 shadow-none"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon color-black icons fs-5 border-0 shadow-none"></span>
            </button>
            <div
              className="offcanvas offcanvas-end"
              tabIndex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <Link
                  className="navbar-brand fs-1 fw-semibold main-head"
                  to="/My-Mart"
                >
                  MyMart<span className="text-green fs-1 fw-bold">.</span>
                </Link>
                <button
                  type="button"
                  className="btn-close border-0 shadow-none"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body justify-content-center align-items-center">
                {/* Icons for Md to Sm */}
                {/* Navigation */}
                <div className="d-flex d-lg-none justify-content-center align-items-center gap-3 mb-4">
                  <div>
                    <button
                      type="button"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                      className="border-0 bg-transparent "
                      onClick={GetSearchBar}
                    >
                      <FontAwesomeIcon icon={faSearch} className="icons" />
                    </button>
                  </div>
                  <div>
                    <button
                      type="button"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                      to="#"
                      className="border-0 bg-transparent"
                      onClick={HandleWish}
                    >
                      <FontAwesomeIcon icon={faHeart} className="icons" />
                    </button>
                  </div>
                  <div>
                    <button
                      className="border-0 bg-transparent"
                      type="button"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    >
                      <FontAwesomeIcon
                        icon={faShoppingCart}
                        className="icons"
                      />
                    </button>
                  </div>
                  <div>
                    <button
                      className="border-0 bg-transparent"
                      type="button"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    >
                      <FontAwesomeIcon icon={faUser} className="icons" />
                    </button>
                  </div>
                </div>
                <ul className="navbar-nav mb-2 mb-lg-0 gap-lg-5 fw-semibold gap-3 fs-5 d-flex justify-content-center align-items-center">
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
            </div>
            {/* Icons for Lg */}
            <div className="d-none d-lg-flex justify-content-center align-items-center gap-3 ">
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
        <SearchBar
          getSearch={getSearch}
          setSearchMe={setSearchMe}
          SearchMe={SearchMe}
        />
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

export default memo(Header);
