import { createSlice } from "@reduxjs/toolkit";

const fileSlice = createSlice({
    name: 'file',
    initialState: {files: []},
    reducers: {
        addfiles: (state, action) => {
            state.files.push(action.payload);
        },
        removefiles: (state, action) => {
            state.files = state.files.filter(file => {file.id !== action.payload.id});
        },
        getfiles: (state, action) => {
            state.files = action.payload;
        },
        clearfiles: (state) => {
            state.files = [];
        }
    }
})

export const { addfiles, removefiles, getfiles, clearfiles } = fileSlice.actions;
export default fileSlice.reducer;