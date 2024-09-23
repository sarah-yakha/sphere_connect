import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../store/slices/messageSlice";
import writeUserData from "./Messages";

export const MessageForm = () => {
  const proverka = useSelector((state) => state.messages.messages);
  const user = useSelector((state) => state.user.email);
  
  localStorage.setItem("messages", JSON.stringify(proverka));
  
  const [mess, setMess] = useState("");
  const dispatch = useDispatch();
  const add = () => dispatch(addMessage(mess));
  
  
  
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
      {proverka.map((item, index) => {
        console.log(item);
        return (
          <li key={index}>
            {item.user}: {item.message}{" "}
            {item.date}
          </li>
        );
      })}
    </div>
  );
};
