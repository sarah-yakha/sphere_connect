import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage, removeMessage } from "../../store/slices/messageSlice";
import writeUserData from "./Messages";
import { getFirestore } from "firebase/firestore/lite";
import { getDatabase, onValue, ref } from "firebase/database";
import styles from "./MessageForm.module.scss";
import { auth } from "../../firebase";
import { renderToString } from "react-dom/server";

export const MessageForm = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
const [MessagesDataBase,setMessagesDataBase] = useState([])
  const user = useSelector((state) => state.user.email);
  let message = useSelector((state) => state.messages);
  
  console.log(message)
  
  const [mess, setMess] = useState("");
  const dispatch = useDispatch();
  const add = () => dispatch(addMessage(mess));
  const remove = ()=> dispatch(removeMessage())
  
  const db = getDatabase();
  const databaseMessage = ref(db, "messagesData/messages");
  remove()
  
  useEffect(() => {
    console.log(message)
    writeUserData(message)
  }, [count]);
  
  useEffect(()=> {
    
    onValue(databaseMessage, (snapshot) => {
      setMessagesDataBase(snapshot.val() || []);
      
    });

  },[])
  
  
  const inputMessage = (e) => {
    setMess(e.target.value);
  };

  return (
    <div>
      <div className={styles.parentContain}>

      <div className={styles.messageContainer}>

      {MessagesDataBase.map((item, index) => {
       
        return (
          <li className={item.user === auth.currentUser.email ? styles.one : styles.two} key={index}>
            {item.user}: {item.message} {item.date}
          </li>
        );
      })}
      <form className={styles.formContain}>
        <div>
          <p>{user}</p>
        </div>
        <input
          value={mess}
          onChange={inputMessage}
          placeholder={'Введите сообщение'}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            add();
            
    setCount(count + 1);
            setMess('')
          
          }}
        >
          {" "}
          Отправить{" "}
        </button>
      </form>
      </div>
      </div>
    </div>
  );
};
