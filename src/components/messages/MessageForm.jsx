import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage, removeMessage } from "../../store/slices/messageSlice";
import writeUserData from "./Messages";
import { getFirestore } from "firebase/firestore/lite";
import { getDatabase, onValue, ref } from "firebase/database";
import styles from "./MessageForm.module.css";
import { auth } from "../../firebase";
import { renderToString } from "react-dom/server";
import { Button, Input } from "../Forms";

export const MessageForm = (userName) => {
  const [count, setCount] = useState(0);
  const [MessagesDataBase, setMessagesDataBase] = useState([]);
  const userNickname = useSelector((state) => state.user);
  let message = useSelector((state) => state.messages);
  console.log(userNickname);
  console.log(message);

  const [mess, setMess] = useState("");
  const dispatch = useDispatch();
  const add = () => dispatch(addMessage(mess));
  const remove = () => dispatch(removeMessage());
  const myName = JSON.parse(localStorage.getItem("userNick"));
  const db = getDatabase();
  const databaseMessage = ref(
    db,
    `messagesData/messages/${myName.nickname}${userName.user}`
  );
  remove();

  useEffect(() => {
    console.log(message);
    writeUserData(message, userName);
  }, [count]);

  useEffect(() => {
    onValue(databaseMessage, (snapshot) => {
      setMessagesDataBase(snapshot.val() || []);
    });
  }, []);

  const inputMessage = (e) => {
    setMess(e.target.value);
  };

  return (
    <div>
      <div className={styles.parentContain}>
        <div className={styles.messageContainer}>
          <p>{userName.user}</p>

          {MessagesDataBase.map((item, index) => {
            return (
              <li
                className={
                  item.user !== userName.user ? styles.one : styles.two
                }
                key={index}
              >
                {item.user}: {item.message} {item.date}
              </li>
            );
          })}
          <form className={styles.formContain}>
            <Input
              value={mess}
              onChange={inputMessage}
              placeholder={"Введите сообщение"}
            />
            <Button
              onClick={(e) => {
                e.preventDefault();
                add();

                setCount(count + 1);
                setMess("");
              }}
            >
              {" "}
              Отправить{" "}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
