import React, { useState } from "react";
import { Link } from "react-router-dom";
import Product from "../Product";
import PageNotFound from "../../Page Not Found/PageNotFound";

const ProductDetails = ({ productId, productName }) => {
  // if routes cant match then return null
  const SelectProd = Product.find(
    (product) => product.id == productId && product.heading == productName
  );

  if (!SelectProd) {
    return null;
  }

  const [amount, setAmount] = useState(1);
  const [prodPrice, setProdPrice] = useState(SelectProd.price);
  // For Increment Amount and Quntity
  const incAmount = () => {
    let newAmount = amount;
    let newPrice = prodPrice;
    setAmount(newAmount + 1);
    setProdPrice(newPrice + SelectProd.price);
    if (newAmount >= 20) {
      setAmount(20);
      setProdPrice(newPrice);
    }
  };
  // For Decrement Amount and Quntity
  const DecAmount = () => {
    let newAmount = amount;
    let newPrice = prodPrice;
    setAmount(newAmount - 1);
    setProdPrice(newPrice - SelectProd.price);
    if (newAmount <= 1) {
      setAmount(1);
      setProdPrice(SelectProd.price);
    }
  };
  return (
    <div
      className="d-flex flex-column gap-4 justify-content-center"
      style={{ height: "100%" }}
    >
      <div className="d-flex fs-5 fw-bold text-black gap-3 ">
        <Link
          style={{ textDecoration: "none" }}
          className="text-black"
          to={`/My-Mart/Product`}
        >
          Product
        </Link>
        /
        <Link
          style={{ textDecoration: "none" }}
          className="text-black"
          to={`/My-Mart/Categorie/${SelectProd.categorie}`}
        >
          {SelectProd.categorie}
        </Link>
        /
        <Link
          style={{ textDecoration: "none" }}
          className="text-black"
          to={`/My-Mart/Product/${SelectProd.heading}/${SelectProd.id}`}
        >
          {SelectProd.heading}
        </Link>
      </div>
      <h1 className="fw-semibold text-black">{SelectProd.heading}</h1>
      <h3 className="fs-4 text-green fw-bold">{SelectProd.categorie}</h3>
      <p className="fs-5 text-black ">{SelectProd.smallDes}</p>
      <h1 className="fs-2 text-black fw-bold">{prodPrice}.00 Rs</h1>
      <div className="d-flex flex-wrap gap-4">
        <div className="d-flex justify-content-center align-items-center gap-2">
          <button
            className="rounded-start-pill border py-2 px-3 text-white main-btn fs-5"
            onClick={incAmount}
          >
            +
          </button>
          <input
            type="input"
            className=" px-2 py-2 m-0 text-center"
            value={amount}
            style={{ width: "70px", outline: "none", borderRadius: "10px" }}
            readOnly
          />
          <button
            className="rounded-end-pill border py-2 px-3 text-white main-btn fs-5"
            onClick={DecAmount}
          >
            -
          </button>
        </div>
        <button className="rounded-5 border py-2 px-3 text-white main-btn fs-5">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
