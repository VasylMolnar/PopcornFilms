import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import { apiSlice } from './api/apiSlice';
import { apiFilmSlice } from './api/apiFilmSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [apiFilmSlice.reducerPath]: apiFilmSlice.reducer,
    auth: authReducer,
  },

  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});
