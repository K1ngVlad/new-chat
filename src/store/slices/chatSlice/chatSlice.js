import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {},
});

const chatReducer = chatSlice.reducer;

// export const {  } = chatSlice.actions;
export { chatReducer };
