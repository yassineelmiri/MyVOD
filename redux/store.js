import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import filmReducer from './slices/filmSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    films: filmReducer,
  },
});
