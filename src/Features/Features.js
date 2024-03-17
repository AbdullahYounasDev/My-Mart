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
  },
});

export const { toggleWish } = Features.actions;
export default Features.reducer;
