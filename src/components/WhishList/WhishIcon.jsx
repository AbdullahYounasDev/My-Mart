import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { toggleWish } from "../../Features/Features";
import { useDispatch, useSelector } from "react-redux";

const WhishIcon = ({ SelectProd }) => {
  const dispatch = useDispatch();
  const AddProd = useSelector((state) => state.Product);
  const WhishForProd = AddProd.find((prod) => prod.id === SelectProd.id);

  return (
    <div>
      <button
        to="#"
        className="border-0 bg-transparent"
        onClick={() => dispatch(toggleWish(WhishForProd.id))}
      >
        <FontAwesomeIcon
          id="heartIcon"
          icon={faHeart}
          style={{ color: WhishForProd.wishList ? "#33cccc" : "black" }}
          className="icons-30"
        />
      </button>
    </div>
  );
};
export default WhishIcon;
