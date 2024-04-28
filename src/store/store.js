/** @format */

import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import Features from "../Features/Features";
import User from "../Features/User";

const rootReducer = combineReducers({
  features: Features,
  user: User,
});

export const store = configureStore({
  reducer: rootReducer,
});
