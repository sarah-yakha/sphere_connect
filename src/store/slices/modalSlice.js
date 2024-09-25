import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const userAddSlice = createSlice({
  name: "modal",

  initialState,
  reducers: {
    openModal(state) {
      state.isOpen = true;
    },
    closeModal(state) {
      state.isOpen = false;
    },
  },
});
export const { openModal, closeModal } = userAddSlice.actions;
export default userAddSlice.reducer;
