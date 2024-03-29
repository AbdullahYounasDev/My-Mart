import { createSlice } from "@reduxjs/toolkit";
import Product from "../components/Products/Product";

const Features = createSlice({
  name: "Products",
  initialState: {
    Product,
  },
  reducers: {
    toggleWish: (state, action) => {
      const ProdIndex = state.Product.findIndex(
        (prod) => prod.id === action.payload
      );
      if (ProdIndex !== -1) {
        const product = state.Product[ProdIndex];
        product.wishList = !product.wishList; // Toggle the wish state
        state.Product[ProdIndex] = product; // Update the Product in the state
      }
    },
    updateProductAmount: (state, action) => {
      const {id, amount} = action.payload;
     const ProdIndex = state.Product.findIndex(
      (prod)=> prod.id === id
     )
     if (ProdIndex !== -1) {
      const product = state.Product[ProdIndex];
      product.amount = amount; // change the amount
      state.Product[ProdIndex] = product; // Update the Product in the state
    }
    },
    toggleCart: (state, action) => {
      const ProdIndex = state.Product.findIndex(
        (prod) => prod.id === action.payload
      );
      if (ProdIndex !== -1) {
        const product = state.Product[ProdIndex];
        product.carted = !product.carted; // Toggle the Carted Product state
        state.Product[ProdIndex] = product; // Update the Product in the state
      }
    },
    toggleCartFalse: (state, action)=>{
      const ProdIndex = state.Product.findIndex(
        (prod) => prod.id === action.payload
      );
      if (ProdIndex !== -1) {
        const product = state.Product[ProdIndex];
        product.carted = false; // Toggle the Carted Product state
        state.Product[ProdIndex] = product; // Update the Product in the state
      }
    }
  },
});

export const { toggleWish, updateProductAmount, toggleCart,toggleCartFalse } = Features.actions;
export default Features.reducer;
