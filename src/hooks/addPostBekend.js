import React from "react";
import { database } from "../firebase";
import { getDatabase, ref, set, get } from "firebase/database";

export default async function addPostBekend(newPost) {
  const db = getDatabase();
  const postRef = ref(db, "post");

  try {
    const snapshot = await get(postRef);
    const existingPosts = snapshot.val() || [];
    const updatePosts = [...existingPosts, newPost];

    await set(postRef, updatePosts);
    console.log("пост добавлен");
  } catch (error) {
    console.error("ощибка", error);
  }
}
