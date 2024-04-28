/** @format */

import { configureStore } from "@reduxjs/toolkit";
import Features from "../Features/Features";
export const store = configureStore({
  reducer: Features,
});
