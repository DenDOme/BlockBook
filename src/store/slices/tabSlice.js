import { createSlice } from "@reduxjs/toolkit";

const tabSlice = createSlice({
    name: 'tab',
    initialState: { tabs: [], activeTab: 0 },
    reducers: {
        addTab: (state, action) => {
            const existingTab = state.tabs.find(tab => tab.id === action.payload.id);

            if (existingTab) {
                state.activeTab = action.payload.id;
            } else {
                state.tabs.push(action.payload);
                state.activeTab = action.payload.id;
            }
        },
        removeTab: (state, action) => {
            state.tabs = state.tabs.filter(tab => tab.id !== action.payload);
            state.activeTab = state.tabs.length > 0 ? state.tabs[state.tabs.length - 1].id : 0;
        },
        clearTabs: (state) => {
            state.tabs = [];
        },
        changeTab: (state, action) => {
            state.activeTab = action.payload.id;
        }
    }
})

export const { addTab, removeTab, clearTabs, changeTab } = tabSlice.actions
export default tabSlice.reducer