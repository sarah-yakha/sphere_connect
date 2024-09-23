import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  array: [],
};

const userAddSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addPost(state, action) {
      state.array.push(action.payload);
    },
  },
});
export const { addPost } = userAddSlice.actions;
export default userAddSlice.reducer;
