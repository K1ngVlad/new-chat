import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setChats(state, action) {
      state.chats = action.payload;
    },
    setCurrentChat(state, action) {
      state.currentChat = action.payload;
    },
  },
});

const chatReducer = chatSlice.reducer;

export const { setChats, setCurrentChat } = chatSlice.actions;
export { chatReducer };
