import { getDatabase } from "firebase/database";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCHcVkFs60jjyMtvM7P6xN6ZFkBkP2RbgI",
    authDomain: "sphere-auth-b729a.firebaseapp.com",
    projectId: "sphere-auth-b729a",
    storageBucket: "sphere-auth-b729a.appspot.com",
    messagingSenderId: "935243217293",
    appId: "1:935243217293:web:70a85af7ee4ab1a946a5c4",
    databaseUrl: "https://sphere-auth-b729a-default-rtdb.firebaseio.com/sphere"
  };
  
 export const app = initializeApp(firebaseConfig);
 export const database = getDatabase(app);