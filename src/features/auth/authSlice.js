import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userId: null,
  accessToken: null,
  role: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      return { ...state, ...action.payload };
    },

    logOut: (state, action) => {
      state.userId = null;
      state.accessToken = null;
      state.role = null;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

//select

export const selectCurrentUserId = state => state.auth.userId;
export const selectCurrentToken = state => state.auth.accessToken;
export const selectCurrentUserRole = state => state.auth.role;
