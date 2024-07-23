import { createSlice } from "@reduxjs/toolkit";

// created slice for auth token in redux store //
const slice = createSlice({
  name: "auth",
  initialState: {
    token: null,
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    }
  },
});
export const { setToken } = slice.actions;
export const selectToken = (state) => state.auth.token;
export default slice.reducer;