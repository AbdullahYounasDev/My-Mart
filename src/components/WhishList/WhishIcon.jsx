import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const WhishIcon = ({ mapProduct }) => {
  const [changeColor, setChangeColor] = useState(false);

  const likedMe = (e, ProdId) => {
    e.preventDefault();
    if (ProdId === mapProduct.id) {
      // Toggle the state value
      setChangeColor(!changeColor);
    }
  };

  // Set the color based on the state value
  const iconColor = changeColor ? "#33cccc" : "black";

  return (
    <div>
      <button
        to="#"
        className="border-0 bg-transparent"
        onClick={(e) => likedMe(e, mapProduct.id)}
      >
        <FontAwesomeIcon
          icon={faHeart}
          className="icons"
          style={{ color: iconColor }}
        />
      </button>
    </div>
  );
};

export default WhishIcon;
