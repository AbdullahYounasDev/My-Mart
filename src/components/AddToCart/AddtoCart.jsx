import React, { memo } from "react";
import "../../index.css";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggleCart, updateProductAmount } from "../../Features/Features";


const AddtoCart = ({SelectProd, amount, setAmount}) => {
  const dispatch = useDispatch()

  const handleCart =  () => {
    dispatch(toggleCart(SelectProd.id))
    dispatch(updateProductAmount({ id: SelectProd.id, amount: amount }));
    if(SelectProd.carted == false){
      alert(amount + " Piece of " + SelectProd.heading + " are added to Cart")
      setAmount(1)
    }
  }
  
  return (
    <>
      <button className="fs-14 rounded-5 border-0 p-2 px-sm-4 px-3  text-white text-center main-btn fs-5 shadow-lg my-2 d-flex align-items-center justify-content-center"
      onClick={handleCart}
      style={SelectProd.carted ? {background:"#ff6683"}: {background:"#33cccc"}}
      >
        <Link to={"/My-Mart/Cart"} style={{textDecoration:"none", color:"white"}}>
        {SelectProd.carted ? "Remove From Cart" : "Add to Cart"}
        </Link>
      </button>
    </>
  );
};

export default memo(AddtoCart);

