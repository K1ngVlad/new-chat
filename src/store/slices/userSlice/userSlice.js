import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.id = action.payload.id;
      state.avatar = action.payload.avatar;
    },
    removeUser(state) {
      state.name = null;
      state.email = null;
      state.password = null;
      state.id = null;
      state.avatar = null;
    },
  },
});

const userReducer = userSlice.reducer;

export const { setUser, removeUser } = userSlice.actions;
export { userReducer };
