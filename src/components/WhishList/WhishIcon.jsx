/** @format */

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { toggleWish } from "../../Features/Features";
import { useDispatch, useSelector } from "react-redux";

const WhishIcon = ({ SelectProd }) => {
  const CurrentUser = useSelector((state) => state.user.currentUser);

  const dispatch = useDispatch();
  const AddProd = useSelector((state) => state.features.Product);
  const WhishForProd = AddProd.find((prod) => prod.id === SelectProd.id);

  return (
    <>
      <button
        to="#"
        className="border-0 bg-transparent"
        onClick={(e) => {
          if (CurrentUser) {
            dispatch(toggleWish(WhishForProd.id));
          } else {
            alert("Please Register To Activate Whishlist");
          }
          e.preventDefault();
        }}>
        <FontAwesomeIcon
          id="heartIcon"
          icon={faHeart}
          style={{ color: WhishForProd.wishList ? "#33cccc" : "black" }}
          className="icons-30"
        />
      </button>
    </>
  );
};
export default WhishIcon;
