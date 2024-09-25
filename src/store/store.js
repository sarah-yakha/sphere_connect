import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import userAddSlice from "./slices/userAddSlice";
import messageReducer from "./slices/messageSlice";
import modalReducer from "./slices/modalSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    post: userAddSlice,
    messages: messageReducer,
    modal: modalReducer,
  },
});
