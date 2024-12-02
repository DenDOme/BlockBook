import { configureStore } from '@reduxjs/toolkit';
import fileReducer from './slices/fileSlice';
import authReducer from './slices/authSlice';
import tabReducer from './slices/tabSlice';

export const store = configureStore({
  reducer: {
    file: fileReducer,
    auth: authReducer,
    tab: tabReducer
  },
})