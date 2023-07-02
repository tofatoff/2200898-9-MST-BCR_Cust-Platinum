import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BASE_API from "../../src/components/BASE_API";

const initialState = { isAuthenticated: !!localStorage.getItem("token") };

const loginCustomer = createAsyncThunk(
  "authentication/login",
  async (payload) => {
    try {
      const get = await axios.post(`${BASE_API}/customer/auth/login`, payload);

      return get.data;
    } catch (error) {
      throw error;
    }
  }
);

const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = action.payload;
    },
    logout(state, action) {
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      localStorage.removeItem("updateCar");
      localStorage.removeItem("orderId");
      localStorage.removeItem("getCarData");
      localStorage.removeItem("start_Payment", new Date().toLocaleString());
      localStorage.removeItem("bankName");
      state.isAuthenticated = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginCustomer.fulfilled, (state, action) => {
      localStorage.setItem("token", action.payload.access_token);
      localStorage.setItem("role", action.payload.role);
      authSlice.caseReducers.login(state, {
        payload: !!action.payload,
        type: loginCustomer.typePrefix,
      });
    });
    builder.addCase(loginCustomer.rejected, (state) => {
      authSlice.caseReducers.login(state, {
        payload: false,
        type: loginCustomer.typePrefix,
      });
    });
  },
});

export const { login, logout } = authSlice.actions;

export { loginCustomer };

export default authSlice;
