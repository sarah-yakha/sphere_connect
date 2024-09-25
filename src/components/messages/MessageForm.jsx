import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../store/slices/messageSlice";
import writeUserData from "./Messages";
import { getFirestore } from "firebase/firestore/lite";
import { getDatabase, onValue, ref } from "firebase/database";
import styles from './MessageForm.module.css'

export const MessageForm = () => {
  const [count,setCount] = useState(0)
  let MessagesDataBase = []
  const user = useSelector((state) => state.user.email);
  let proverka = useSelector((state) => state.messages.messages);
  
  localStorage.setItem("messages", JSON.stringify(proverka));
  
  const [mess, setMess] = useState("");
  const dispatch = useDispatch();
  const add = () => dispatch(addMessage(mess));
  
  const db = getDatabase();
  const databaseMessage =  ref(db,'messagesData' ,)
  const messBase = async () => {
    
    await onValue(databaseMessage,(snapshot) => {
      MessagesDataBase = snapshot.val()
      console.log(MessagesDataBase)
      
    })
  }
  useEffect(()=>{
   setCount(count + 1)
  },MessagesDataBase)
  messBase()
  const arrayMess = proverka || MessagesDataBase.messages
  console.log(arrayMess)
  
  const inputMessage = (e) => {
    setMess(e.target.value);
  };
  
  return (
    <div>
      <form>
        <div>
          <p>{user}</p>
        </div>
        <input
          // value={mess}
          onChange={inputMessage}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
          writeUserData(proverka)
            add();
    console.log(user);
    console.log(proverka);
          }}
        >
          {" "}
          Отправить{" "}
        </button>
      </form>
      {arrayMess.map((item, index) => {
        console.log(item.user);
        console.log(user)
        return (
          <li className={item.user === user ? 'one' : 'two'} key={index}>
            {item.user}: {item.message}{" "}
            {item.date}
          </li>
        );
      })}
    </div>
  );
};
