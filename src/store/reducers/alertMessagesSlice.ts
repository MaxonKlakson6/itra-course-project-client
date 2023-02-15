import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AlertMessage } from 'src/types/AlertMessage';

export interface AlertMessagesInitialState {
  message: AlertMessage;
}

const initialState: AlertMessagesInitialState = {
  message: {
    type: '',
    value: '',
  },
};

const alertMessagesSlice = createSlice({
  name: 'alertMessages',
  initialState,
  reducers: {
    saveMessage: (state, { payload }: PayloadAction<AlertMessage>) => {
      state.message = payload;
    },
    resetMessage: (state) => {
      state.message = initialState.message;
    },
  },
});

export const { saveMessage, resetMessage } = alertMessagesSlice.actions;

export default alertMessagesSlice.reducer;
