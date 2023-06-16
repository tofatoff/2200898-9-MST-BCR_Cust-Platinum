import { configureStore } from "@reduxjs/toolkit";
import carSlice from "./redux/carSlice";

export const store = configureStore({
  reducer: {
    car: carSlice,
  },
});
