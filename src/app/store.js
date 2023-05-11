import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import authReducer from '../features/auth/authSlice';
import { apiSlice } from './api/apiSlice';
import { apiFilmSlice } from './api/apiFilmSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer, //add to 1 api
    [apiFilmSlice.reducerPath]: apiFilmSlice.reducer,
    auth: authReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware, apiFilmSlice.middleware),

  devTools: true,
});

setupListeners(store.dispatch);
