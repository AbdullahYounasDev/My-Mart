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
      const { name, email, password, confirmPassword } = action.payload;
      const newUser = {
        name,
        email,
        password,
        confirmPassword,
        userCart: [],
        userWishlist: [],
        userOrders: [],
      };
      state.users.push(newUser);
    },
    LogIn: (state, action) => {
      const { email, password } = action.payload;
      const user = state.users.find(
        (user) => user.email === email && user.password === password,
      );
      if (user) {
        state.currentUser = user;
      }
    },
    Logout: (state) => {
      state.currentUser = null;
    },
  },
});

export const { SignUp, LogIn, Logout } = User.actions;
export default User.reducer;
