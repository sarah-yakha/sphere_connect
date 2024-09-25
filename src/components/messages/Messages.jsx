import firebase from "firebase/compat/app";
import { getDatabase, ref, set } from "firebase/database";




export default function writeUserData(messages) {
  const db = getDatabase();
  set(ref(db, 'messagesData'), {
 messages
  });
  }


  
  