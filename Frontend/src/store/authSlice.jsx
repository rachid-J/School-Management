

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user : null,
    token : localStorage.getItem("token") || null ,
    role : localStorage.getItem("role")  || null,
}


const authSlice = createSlice({
name :"auth",
initialState,
    reducers : {
        login: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.role = action.payload.role;
            localStorage.setItem("token", action.payload.token)
            localStorage.setItem("role", action.payload.role)

        }
    }
})

export const {login} = authSlice.actions;

export default authSlice.reducer;