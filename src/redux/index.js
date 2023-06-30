import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./action-slice";
import registerSlice from "./register-slice";
import bankSlice from "./bayarSlice";

export const store = configureStore({
  reducer: {
    authStore: authSlice.reducer,
    regStore: registerSlice.reducer,
    bankStore: bankSlice.reducer,
  },
});
