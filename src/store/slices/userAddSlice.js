// import { createSlice } from "@reduxjs/toolkit";
// import { getDatabase, ref } from "firebase/database";
// import addPostBekend from "../../hooks/addPostBekend";

// const initialState = {
//   array: [],
// };

// const userAddSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     addPost(state, action) {
//       state.array.push(action.payload);

//       addPostBekend(action.payload);
//     },
//   },
// });
// export const { addPost } = userAddSlice.actions;
// export default userAddSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";
import addPostBekend from "../../hooks/addPostBekend";

// Начальное состояние
const initialState = {
  array: [],
};

// Создание slice
const userAddSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Редьюсер для добавления поста в локальное состояние
    addPost(state, action) {
      state.array.push(action.payload);
    },
  },
});

// Асинхронное действие для добавления поста в Firebase и Redux
export const addPostAsync = (newPost) => async (dispatch) => {
  try {
    await addPostBekend(newPost); // Сохранение поста в Firebase
    dispatch(addPost(newPost)); // Добавление поста в Redux
  } catch (error) {
    console.error("Ошибка при добавлении поста в Firebase:", error);
  }
};

// Экспорт редьюсера и действий
export const { addPost } = userAddSlice.actions;
export default userAddSlice.reducer;