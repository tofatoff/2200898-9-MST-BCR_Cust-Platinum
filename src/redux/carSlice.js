import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  startDate: "",
  endDate: "",
};

export const carSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setStartDate: (state, action) => {
      state.startDate = action.payload;
    },
    setEndDate: (state, action) => {
      state.endDate = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setEndDate, setStartDate } = carSlice.actions;

export default carSlice.reducer;
