import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
    removeUser(state) {
      state.name = null;
      state.email = null;
      state.token = null;
      state.id = null;
    },
  },
});

const userReducer = userSlice.reducer;

export const { setUser, removeUser } = userSlice.actions;
export { userReducer };
