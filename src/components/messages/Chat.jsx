import React, { useEffect, useState } from "react";
import { MessageForm } from "./MessageForm";
import { auth, db } from "../../firebase";
import { getDatabase, onValue, ref } from "firebase/database";
import { Button, Input } from "../Forms";

export const Chat = () => {
  const [databaseUser, setDatabaseUser] = useState([]);
  const [value, setValue] = useState("");
  const [send, setSend] = useState(false);
  const [messages,setMessages] = useState([])
  useEffect(() => {
    const db = getDatabase();
    const dbUser = ref(db, "Profile/users/");
    onValue(dbUser, (snapshot) => {
      setDatabaseUser(snapshot.val());
    });
  }, []);
  console.log(value);


  return (
    <div>
      <select defaultValue={value}>
        <option selected="selected">Список пользователей</option>
        {databaseUser.map((user) => {
          return (
            <option
              onClick={() => {
                setValue(user.nickname);
               console.log('ss')}}
              defaultValue={user.nickname}
              key={user.id}
            >
              {user.nickname}
            </option>
          );
        })}
      </select>
      <form>
        <Input
          placeholder={"Введите имя пользователя"}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
      </form>

      {databaseUser.map((user) =>
        user.nickname == value ? (
          <li
            onClick={() => {
              setSend(true);
            }}
            key={user.id}
          >
            Написать пользователю {user.nickname} ?
          </li>
        ) : (
          false
        )
      )}
      {send == true ? <MessageForm user={value} /> : false}
    </div>
  );
};
