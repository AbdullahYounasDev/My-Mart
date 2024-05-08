/** @format */

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHeartCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { userWishlist, removeFromWhishlist } from "../../Features/User";

const WhishIcon = ({ SelectProd }) => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const userWishList = useSelector(
    (state) =>
      state.user.users.find((user) => user.email === currentUser)
        ?.userWishlist || [],
  );
  const dispatch = useDispatch();

  const isAddedToWishlist = userWishList.some(
    (item) => item.id === SelectProd.id,
  );

  const toggleWishlist = () => {
    if (currentUser) {
      if (!isAddedToWishlist) {
        dispatch(userWishlist(SelectProd));
        alert(SelectProd.heading + " is Added to Whishlist");
      } else {
        dispatch(removeFromWhishlist(SelectProd.id));
      }
    } else {
      alert("Please Login First");
    }
  };

  return (
    <button className="border-0 bg-transparent" onClick={toggleWishlist}>
      {isAddedToWishlist ? (
        <FontAwesomeIcon
          id="heartIcon"
          icon={faHeartCircleCheck}
          className="icons-30 whishCheck"
        />
      ) : (
        <FontAwesomeIcon id="heartIcon" icon={faHeart} className="icons-30" />
      )}
    </button>
  );
};
export default WhishIcon;
