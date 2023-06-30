import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BASE_API from "../../src/components/BASE_API";

const initialState = { isRegister: !!localStorage.getItem("role") };

const registerCustomer = createAsyncThunk(
  "authentication/register",
  async (payload) => {
    try {
      const get = await axios.post(
        `${BASE_API}/customer/auth/register`,
        payload
      );

      return get.data.role;
    } catch (error) {
      throw error;
    }
  }
);

const registerSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {
    register(state, action) {
      state.isRegister = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerCustomer.fulfilled, (state, action) => {
      localStorage.setItem("role", action.payload);
      registerSlice.caseReducers.register(state, {
        payload: !!action.payload,
        type: registerCustomer.typePrefix,
      });
    });
  },
});

export const { register } = registerSlice.actions;

export { registerCustomer };

export default registerSlice;
