import React, { useState, useEffect } from "react";
import ProdForCustomer from "../ProductCopy/ProdForCustomer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const WhishIcon = ({ SelectProd }) => {
  // const [changeColor, setChangeColor] = useState(false);

  const WhishForProd = ProdForCustomer.find(
    (prod) => prod.id === SelectProd.id
  );

  const likedMe = (e) => {
    e.preventDefault();

    // Toggle the wishList property
    WhishForProd.wishList = !WhishForProd.wishList;
  };

  // Set the color based on the state value
  // const iconColor = changeColor ? "#33cccc" : "black";

  return (
    <div>
      <button
        to="#"
        className="border-0 bg-transparent"
        onClick={(e) => likedMe(e)}
      >
        <FontAwesomeIcon icon={faHeart} className="icons-30" />
      </button>
    </div>
  );
};

export default WhishIcon;
