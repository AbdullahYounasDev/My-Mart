import React, { useState } from "react";
import Product from "../Product";
import Categorie from "../../Categories/Categorie";
import { Link } from "react-router-dom";

const CatRelProd = ({ productId, productName }) => {
  // if routes cant match then return null
  const SelectProd = Product.find(
    (product) => product.id == productId && product.heading == productName
  );

  if (!SelectProd) {
    return null;
  }
  const [AddProd, setAddProd] = useState(Product);
  const [AddCat, setAddCat] = useState(Categorie);
  // to get product come from prop
  const ProdName = AddProd.find((prod) => prod.heading === productName);
  // to get categorie of that prod
  const CatName = AddCat.find((cat) => ProdName.categorie === cat.heading);
  // to get products from categorie
  const filteredProducts = AddProd.filter(
    (prod) => prod.categorie === CatName.heading
  );
  // Exclude the product with the same Name as the one received via props
  const filteredRandomProducts = filteredProducts.filter(
    (prod) => prod.heading !== productName
  );
  // Fisher-Yates shuffle algorithm
  const shuffledProducts = [...filteredRandomProducts];
  for (let i = shuffledProducts.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledProducts[i], shuffledProducts[j]] = [
      shuffledProducts[j],
      shuffledProducts[i],
    ];
  }
  // Take the first 5 products
  const randomFiveProducts = shuffledProducts.slice(0, 4);
  return (
    <div className="container text-center my-5 py-5">
      <h1 className="fw-semibold text-black">Related Products</h1>
      <div className="m-auto my-5" style={{ maxWidth: "65px" }}>
        <div className="border-green"></div>
      </div>
      <div className="container text-center my-5">
        <div className="row row-cols-lg-4 row-cols-md-3 row-cols-2">
          {randomFiveProducts.map((mapProduct) => (
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
                          style={{ fontFamily: "system-ui", color: "grey" }}
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
    </div>
  );
};

export default CatRelProd;
