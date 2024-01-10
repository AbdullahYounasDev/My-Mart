import React, { useState } from "react";
import { Link } from "react-router-dom";
import Product from "./Product";
const Products = () => {
  const [AddProd, setAddProd] = useState(Product);
  // Add to Whish List
  const LikedMe = (e, productId) => {
    e.preventDefault();

    // Create a copy of the AddProd array
    const updatedProducts = AddProd.map((product) => {
      if (product.id === productId) {
        // Update the whishlist property for the specific product
        return { ...product, whishlist: !product.whishlist };
      }
      console.log(product);
      return product;
    });

    // Set the state with the updated array
    setAddProd(updatedProducts);
  };

  // Determine the color based on whishlist property
  const heartColor = (productId) => {
    const product = AddProd.find((prod) => prod.id === productId);
    return product && product.whishlist ? "#33cccc" : "gray";
  };
  return (
    <>
      <div className="prod-sec container-fluid text-center py-5">
        <h1 className="text-white fs-70">Products</h1>
        <div className="m-auto my-5" style={{ maxWidth: "65px" }}>
          <div className="border-green"></div>
        </div>
      </div>
      <div className="container text-center my-5">
        <div className="row row-cols-lg-5 row-cols-md-3 row-cols-2">
          {AddProd.map((mapProduct) => (
            <div className="mt-4" key={mapProduct.id}>
              <Link
                to={`/My-Mart/Product/${mapProduct.heading}/${mapProduct.id}`}
                className="link text-white fw-semibold m-0 p-0 text-center"
                style={{ textDecoration: "none", fontSize: "14px" }}
              >
                <div className="card d-flex justify-content-center align-items-center flex-column categories">
                  <img
                    src={mapProduct.ImgPath}
                    id={mapProduct.id}
                    className="card-img-top w-100 "
                    alt={mapProduct.heading}
                    style={{
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                  <div className="card-body w-100 d-flex justify-content-center align-items-center flex-column">
                    <h3
                      className="text-center p-0 fw-semibold"
                      style={{ color: "gray", fontSize: "14px" }}
                    >
                      {mapProduct.categorie}
                    </h3>
                    <h2 className="fs-5 text-center p-0 fw-semibold">
                      {mapProduct.heading}
                    </h2>
                    <div className="d-flex justify-content-between align-items-center w-100">
                      <div>
                        <h4
                          className="p-0 text-green fw-semibold m-0 text-align-center"
                          style={{ fontSize: "16px" }}
                        >
                          {mapProduct.price}.00 Rs
                        </h4>
                      </div>
                      <div>
                        <div
                          className="heart-icon fs-2 "
                          style={{
                            fontFamily: "system-ui",
                            color: heartColor(mapProduct.id),
                          }}
                          onClick={(e) => LikedMe(e, mapProduct.id)}
                        >
                          &#x2665;
                        </div>
                      </div>
                    </div>
                    <button className="rounded-5 border-0 p-2 px-4 text-white text-center main-btn fs-5 shadow-lg my-2 d-flex align-items-center justify-content-center">
                      Add to Cart
                    </button>
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

export default Products;
