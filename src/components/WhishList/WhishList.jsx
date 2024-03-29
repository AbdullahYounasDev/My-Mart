import React, { memo, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import WhishIcon from "./WhishIcon";
import { useSelector } from "react-redux";

const WhishList = ({ setOpenWhish, OpenWhish }) => {
  // Product data in AddProd
  const AddProd = useSelector((state) => state.Product);
  //For closing whishlist
  const closeWhishList = () => {
    setOpenWhish(false);
    if (OpenWhish == false) document.body.style.overflowY = "hidden";
    else document.body.style.overflowY = "scroll";
  };
  // Check If Product whishList is true
  const WhishProduct = AddProd.filter((product) => {
    return product.wishList == true;
  });

  const stopProp = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  return (
    <div
      className="position-absolute  sub-whish-list border border-2 start-0 top-0 px-3 py-4"
      onClick={stopProp}
    >
      <div className="d-flex justify-content-between align-items-center">
        <h3 className="fw-bold">
          Whish List<span className="text-green fs-3 fw-bold">.</span>
        </h3>
        <button
          className="bg-transparent border-0 icons d-flex justify-content-center align-items-center"
          onClick={closeWhishList}
        >
          <h4>
            <FontAwesomeIcon icon={faTimes} />
          </h4>
        </button>
      </div>
      <div className="d-flex flex-column gap-2 mt-3">
        {WhishProduct.map((mapProduct) => (
          <div key={mapProduct.id}>
            <Link
              to={`/My-Mart/Product/${mapProduct.heading}/${mapProduct.id}`}
              style={{ textDecoration: "none" }}
            >
              <div
                key={mapProduct.id}
                className="container-fluid d-flex justify-content-start align-items-center border p-2"
                style={{ width: "315px" }}
              >
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
                      style={{ textDecoration: "none" }}
                    >
                      {mapProduct.heading}
                    </h4>
                    <WhishIcon SelectProd={mapProduct} />
                  </div>
                  <div className="ms-3 d-flex justify-content-between align-items-center">
                    <h6 className="text-black">{mapProduct.price}.00 Rs</h6>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(WhishList);
