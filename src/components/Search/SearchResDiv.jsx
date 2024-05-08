/** @format */

import { Link } from "react-router-dom";
import { useContext } from "react";
import { useSelector } from "react-redux";

const SearchResDiv = ({ setSearch, setSearchMe }) => {
  const AddProd = useSelector((state) => state.features.Product);
  const searchLowerCase = setSearch.toLowerCase(); // Convert search query to lowercase
  // Check if the search query is empty
  if (searchLowerCase.trim() === "") {
    return null; // Don't render anything if the search query is empty
  }
  const searchResults = AddProd.filter((prod) => {
    const productHeadingLowerCase = prod.heading.toLowerCase(); // Convert product heading to lowercase
    return productHeadingLowerCase.includes(searchLowerCase);
  });
  const closeSearch = () => {
    setSearchMe(false);
  };

  return (
    <>
      {searchResults.length > 0 ? (
        <div
          onClick={closeSearch}
          className="border border-2 p-2 d-flex justify-content-start align-items-start flex-column shadow-lg gap-3 position-absolute bg-white transform-middle SearchResDiv ">
          {searchResults.map((mapProduct) => (
            <Link
              key={mapProduct.id}
              to={`/My-Mart/Product/${mapProduct.heading}/${mapProduct.id}`}
              style={{ textDecoration: "none" }}>
              <div
                className="container-fluid d-flex justify-content-start align-items-center border p-2"
                style={{ width: "315px" }}>
                <div>
                  <img
                    src={mapProduct.ImgPath}
                    alt={mapProduct.heading}
                    className="searchImg"
                  />
                </div>
                <div className="ms-3">
                  <h4
                    className="text-black fw-semibold"
                    style={{ textDecoration: "none" }}>
                    {mapProduct.heading}
                  </h4>
                  <h6 className="text-black">{mapProduct.price}.00 Rs</h6>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="border border-2 p-2 d-flex justify-content-between align-items-center shadow-sm gap-3 position-absolute bg-white transform-middle SearchResDiv">
          <h6>Product Not Found!!!!</h6>
        </div>
      )}
    </>
  );
};

export default SearchResDiv;
