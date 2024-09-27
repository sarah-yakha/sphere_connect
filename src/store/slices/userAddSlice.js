import { createSlice } from "@reduxjs/toolkit";
import { getDatabase, ref } from "firebase/database";
import addPostBekend from "../../hooks/addPostBekend";

const initialState = {
  array: [],
};

const userAddSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addPost(state, action) {
      state.array.push(action.payload);

      addPostBekend(action.payload);
    },
  },
});
export const { addPost } = userAddSlice.actions;
export default userAddSlice.reducer;
