import { configureStore } from '@reduxjs/toolkit';
import fileReducer from './slices/fileSlice';
import authReducer from './slices/authSlice';

export const store = configureStore({
  reducer: {
    file: fileReducer,
    auth: authReducer
  },
})