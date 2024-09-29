import { createSlice } from "@reduxjs/toolkit";
import writeUsers from "../../components/form/usersDatabase";

const initialState = {
    email: null,
    token: null,
    id: null,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser(state, action) {
            state.email = action.payload.email,
            state.token = action.payload.token,
            state.id = action.payload.id

            console.log(state.email)
            localStorage.setItem('user', JSON.stringify(state))
            
        },
        removeUser(state) { 
            state.email = null
            state.token = null
            state.id = null
        }
        
    }
})
export const {setUser,removeUser} = userSlice.actions
export default userSlice.reducer