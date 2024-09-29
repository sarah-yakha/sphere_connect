import React, { useEffect, useState } from 'react'
import { MessageForm } from './MessageForm'
import { auth } from '../../firebase'
import { getDatabase, onValue, ref } from 'firebase/database'

export const Chat = () => {
    const [databaseUser,setDatabaseUser] = useState([])

    useEffect(()=> {
        
        const db = getDatabase();
      const dbUser = ref(db, "Profile/users");
        onValue(dbUser, (snapshot) => {
          setDatabaseUser(snapshot.val());
          
        });
    
      },[])
      console.log(databaseUser)
  return (
    <div>
        <MessageForm />
    </div>
  )
}
