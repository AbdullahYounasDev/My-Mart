import React, { useState, useEffect, useContext, memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { AppContext } from "../Context/ProductContext";

const WhishIcon = ({ SelectProd }) => {
  const [iconColor, setIconColor] = useState("black");
  const AddProd = useContext(AppContext);

  const WhishForProd = AddProd.find((prod) => prod.id === SelectProd.id);

  const likedMe = (e) => {
    e.preventDefault();
    e.stopPropagation();

    // Toggle the wishList property
    WhishForProd.wishList = !WhishForProd.wishList;

    // Update the iconColor based on wishList
    if (WhishForProd.wishList == true) {
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

export default memo(WhishIcon);
