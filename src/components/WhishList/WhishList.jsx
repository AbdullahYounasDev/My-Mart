/** @format */

import React, { memo, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"; // Import useDispatch
import { removeFromWhishlist } from "../../Features/User";

const WhishList = ({ setOpenWhish, OpenWhish }) => {
  // useDispatch hook to dispatch actions
  const dispatch = useDispatch();

  // to check user
  const allUser = useSelector((state) => state.user.users);
  const currentUser = useSelector((state) => state.user.currentUser);
  const filterdUser = allUser.find((user) => currentUser == user.email);

  //For closing whishlist
  const closeWhishList = () => {
    setOpenWhish(false);
    if (OpenWhish == false) document.body.style.overflowY = "hidden";
    else document.body.style.overflowY = "scroll";
  };

  const stopProp = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  // Function to remove item from wishlist
  const handleRemoveFromWishlist = (productId, e) => {
    // Dispatch the removeFromWhishlist action with productId
    dispatch(removeFromWhishlist(productId));
  };

  return (
    <div
      className="position-absolute  sub-whish-list border border-2 start-0 top-0 px-3 py-4"
      onClick={stopProp}>
      <div className="d-flex justify-content-between align-items-center">
        <h3 className="fw-bold">
          Whish List<span className="text-green fs-3 fw-bold">.</span>
        </h3>
        <button
          className="bg-transparent border-0 icons d-flex justify-content-center align-items-center"
          onClick={closeWhishList}>
          <h4>
            <FontAwesomeIcon icon={faTimes} />
          </h4>
        </button>
      </div>
      <div className="d-flex flex-column gap-2 mt-3">
        {currentUser ? (
          filterdUser.userWishlist.length > 0 ? (
            filterdUser.userWishlist.map((mapProduct) => (
              <div key={mapProduct.id}>
                <Link
                  to={`/My-Mart/Product/${mapProduct.heading}/${mapProduct.id}`}
                  style={{ textDecoration: "none" }}>
                  <div
                    key={mapProduct.id}
                    className="container-fluid whishProd d-flex justify-content-start align-items-center border p-2"
                    style={{ width: "315px" }}>
                    <div>
                      <img
                        src={mapProduct.ImgPath}
                        alt={mapProduct.heading}
                        className="searchImg"
                      />
                    </div>
                    <div className="w-100">
                      <div className="ms-3 d-flex justify-content-between align-items-center mb-2">
                        <h4
                          className="text-black fw-semibold m-0 fs-5"
                          style={{ textDecoration: "none" }}>
                          {mapProduct.heading}
                        </h4>
                        <h4
                          className="mx-4 icons d-lg-block d-none"
                          style={{ cursor: "pointer" }}
                          onClick={() =>
                            handleRemoveFromWishlist(mapProduct.id)
                          } // Call handleRemoveFromWishlist with productId
                        >
                          <FontAwesomeIcon icon={faTimes} />
                        </h4>
                      </div>
                      <div className="ms-3 d-flex justify-content-between align-items-center">
                        <h6 className="text-black">{mapProduct.price}.00 Rs</h6>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <h3 className="text-center mt-4 fw-semibold">
              {" "}
              <span className="text-green">Whishlist</span> is Empty
            </h3>
          )
        ) : (
          <>
            <p className="text-center mt-5 fw-bold mb-0">
              Please
              <Link to={"/My-Mart/Login"}>
                {" "}
                <span className="text-green">Login</span>
              </Link>{" "}
              Or{" "}
              <Link to={"/My-Mart/Signup"}>
                <span className="text-green">Sign Up</span>
              </Link>
            </p>
            <p
              className="text-center fw-semibold p-0 m-0 "
              style={{ fontSize: "14px" }}>
              To Add Your Favourite Products Here
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default memo(WhishList);
