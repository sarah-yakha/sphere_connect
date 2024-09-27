import { createSlice } from "@reduxjs/toolkit";
import { auth } from "../../firebase";
import writeUserData from "../../components/messages/Messages";


const  initialState = { 
    user: null,
    message: null,
    date: null, 
}

const messageSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        addMessage(state,action) {
            let option = {
                hour: "numeric",
                minute: "numeric",
                seconds: "numeric",
              };
              
            state.user = auth.currentUser.email;
                state.message = action.payload;
                state.date = Intl.DateTimeFormat("ru-Us", option).format()
                
                localStorage.setItem('user', JSON.stringify(state))
                console.log(state.messages)
            }
        ,
        removeMessage(state) {
            state.user = null;
            state.message = null;
            state.date = null
        }
,
        addUser(state, action) {
            
            state.user = action.payload
            console.log(state.user)
        }
    }
})
export const {addMessage,addUser,removeMessage} = messageSlice.actions;
export default messageSlice.reducer