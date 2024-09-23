import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import userAddSlice from "./slices/userAddSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    post: userAddSlice,
  },
});
