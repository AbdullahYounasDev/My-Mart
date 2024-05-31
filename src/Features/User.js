/** @format */

// Features.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  currentUser: null,
};

export const User = createSlice({
  name: "Users",
  initialState,
  reducers: {
    SignUp: (state, action) => {
      const {
        name,
        email,
        password,
        confirmPassword,
        country,
        city,
        fullAddress,
      } = action.payload;
      const newUser = {
        name,
        email,
        password,
        confirmPassword,
        country,
        city,
        fullAddress,
        userCart: [],
        userWishlist: [],
        userOrders: [],
      };
      state.users.push(newUser);
      state.currentUser = email; // Set the current user to the new user's email
    },
    LogIn: (state, action) => {
      const { email, password } = action.payload;
      const user = state.users.find(
        (user) => user.email === email && user.password === password,
      );
      if (user) {
        state.currentUser = user.email;
      }
    },
    userCart: (state, action) => {
      const { SelectProd, amount } = action.payload;
      const regUser = state.users.find(
        (User) => User.email == state.currentUser,
      );
      if (regUser) {
        regUser.userCart.push({ product: SelectProd, amount: amount });
      }
    },
    removeFromCart: (state, action) => {
      const regUser = state.users.find(
        (User) => User.email === state.currentUser,
      );
      if (regUser) {
        const userCart = regUser.userCart;
        const index = userCart.findIndex(
          (item) => item.product.id === action.payload,
        );
        if (index !== -1) {
          userCart.splice(index, 1);
        }
      }
    },
    cartClear: (state) => {
      const regUser = state.users.find(
        (User) => User.email === state.currentUser,
      );
      if (regUser) {
        regUser.userCart = [];
      }
    },
    userWishlist: (state, action) => {
      const regUser = state.users.find(
        (User) => User.email == state.currentUser,
      );
      if (regUser) {
        regUser.userWishlist.push(action.payload);
      }
    },
    removeFromWhishlist: (state, action) => {
      const regUser = state.users.find(
        (User) => User.email === state.currentUser,
      );
      if (regUser) {
        const userWhish = regUser.userWishlist;
        const index = userWhish.findIndex((item) => item.id === action.payload);
        if (index !== -1) {
          userWhish.splice(index, 1);
        }
      }
    },
    LogOut: (state) => {
      state.currentUser = null;
    },
    updateUserProfile: (state, action) => {
      const { name, password, confirmPassword, country, city, fullAddress } =
        action.payload;
      const regUser = state.users.find(
        (User) => User.email === state.currentUser,
      );
      if (regUser) {
        regUser.name = name;
        regUser.password = password;
        regUser.confirmPassword = confirmPassword;
        regUser.country = country;
        regUser.city = city;
        regUser.fullAddress = fullAddress;
      }
    },
    addToOrders: (state, action) => {
      const regUser = state.users.find(
        (user) => user.email === state.currentUser,
      );
      if (regUser) {
        regUser.userOrders.push(action.payload); // Push entire order object to userOrders
      }
    },
  },
});

export const {
  SignUp,
  LogIn,
  updateUserProfile,
  LogOut,
  userCart,
  removeFromCart,
  cartClear,
  userWishlist,
  removeFromWhishlist,
  addToOrders,
} = User.actions;
export default User.reducer;
