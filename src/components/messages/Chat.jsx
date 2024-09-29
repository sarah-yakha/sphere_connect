import React, { useEffect, useState } from 'react'
import { MessageForm } from './MessageForm'
import { auth } from '../../firebase'
import { getDatabase, onValue, ref } from 'firebase/database'
import { Button, Input } from '../Forms'

export const Chat = () => {
    const [databaseUser,setDatabaseUser] = useState([])
    const [value,setValue] = useState('')
    const [send,setSend] = useState(false)
    useEffect(()=> {
        
        const db = getDatabase();
      const dbUser = ref(db, "Profile/users/");
        onValue(dbUser, (snapshot) => {
          setDatabaseUser(snapshot.val());
        });
        
      },[])
      console.log(value)

   
  return (
    <div>
    <form>

    <Input 
        placeholder={'Введите имя пользователя'}
        onChange={(e) => setValue((e.target.value))
        }
        value={value}
    />
    
    </form>
  
  {databaseUser.map((user) => user.nickname == value ? <li onClick={() => {
   setSend(true)
  }} key={user.id}>Написать пользователю {user.nickname} ?</li> : false)}
       {send == true ? <MessageForm user={value}/> : false}
    </div>
  )
}
