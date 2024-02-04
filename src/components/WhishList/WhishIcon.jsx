import React, { useState, useEffect } from "react";
import ProdForCustomer from "../ProductCopy/ProdForCustomer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const WhishIcon = ({ SelectProd }) => {
  const [iconColor, setIconColor] = useState("black");

  const WhishForProd = ProdForCustomer.find(
    (prod) => prod.id === SelectProd.id
  );

  const likedMe = (e) => {
    e.preventDefault();
    e.stopPropagation();

    // Toggle the wishList property
    WhishForProd.wishList = !WhishForProd.wishList;

    // Update the iconColor based on wishList
    if (WhishForProd.wishList) {
      setIconColor("#33cccc");
    } else {
      setIconColor("black");
    }
  };

  return (
    <div>
      <button
        to="#"
        className="border-0 bg-transparent"
        onClick={(e) => likedMe(e)}
      >
        <FontAwesomeIcon
          id="heartIcon"
          icon={faHeart}
          style={{ color: iconColor }}
          className="icons-30"
        />
      </button>
    </div>
  );
};

export default WhishIcon;
