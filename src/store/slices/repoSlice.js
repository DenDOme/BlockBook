import { createSlice } from "@reduxjs/toolkit";

const repoSlice = createSlice({
    name: 'repo',
    initialState: {repository: {}},
    reducers : {
        setRepo: (state, action) => {
            state.repository = action.payload;
        },
        clearRepo: (state) => {
            state.repository = {};
        }
    }
})

export const {setRepo, clearRepo} = repoSlice.actions
export default repoSlice.reducer