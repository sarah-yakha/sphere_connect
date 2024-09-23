import { getDatabase, ref, set } from "firebase/database";

export default function writeUserData(messages) {
    const db = getDatabase();
    set(ref(db,"https://sphere-auth-b729a-default-rtdb.firebaseio.com/sphere", JSON.stringify(messages),));
  }