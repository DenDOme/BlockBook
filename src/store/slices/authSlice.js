import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: Cookies.get('token') || null,
        isAuthenticated: !!Cookies.get('token'),
    },
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
            state.isAuthenticated = true;
            Cookies.set('token', action.payload, {expires: 7});
        },
        clearToken: (state) => {
            state.token = null;
            state.isAuthenticated = false;
            Cookies.remove('token');
        },
    },
})

export const {setToken, clearToken} = authSlice.actions;
export default authSlice.reducer;