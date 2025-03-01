

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token : localStorage.getItem("token") || null ,
    role :null
}


const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers : {
        setAuth : (state, action) => {
            state.token = action.payload.token;
            localStorage.setItem("token", action.payload.token)

        },
        setRole : (state, action) => {
            state.role = action.payload;
        },
        logout:(state) => {
            state.token = null;
            state.role = null;
            localStorage.removeItem("token")
        }
    }
})

export const { setAuth , setRole , logout } = authSlice.actions;

export default authSlice.reducer;