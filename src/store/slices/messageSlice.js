import { createSlice } from "@reduxjs/toolkit";
import { auth } from "../../firebase";


const messageSlice = createSlice({
    name: 'messages',
    initialState:{
        messages: JSON.parse(localStorage.getItem('messages')) || [],
        user: ''
    },
    reducers: {
        addMessage(state,action) {
            let option = {
                hour: "numeric",
                minute: "numeric",
                seconds: "numeric",
              };
              
            state.messages.push({message:  action.payload,
                user: auth.currentUser.email,
                date: Intl.DateTimeFormat("ru-Us", option).format()
                
               
            })
            console.log(action.payload)
            console.log(state.messages)
        },

        addUser(state, action) {
            
            state.user = action.payload
            console.log(state.user)
        }
    }
})
export const {addMessage,addUser} = messageSlice.actions;
export default messageSlice.reducer