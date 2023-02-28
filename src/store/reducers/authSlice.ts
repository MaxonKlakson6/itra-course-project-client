import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserData } from 'src/types/userData';

export interface AuthInitialState {
  token: string;
  userData: Omit<UserData, 'token'>;
}

const initialState: AuthInitialState = {
  token: '',
  userData: {
    id: 0,
    email: '',
    name: '',
    role: 'USER',
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    saveToken: (state, action: PayloadAction<UserData>) => {
      const { token, ...otherFields } = action.payload;
      state.token = token;
      state.userData = otherFields;
    },
    resetState: (state) => {
      state.userData = initialState.userData;
      state.token = initialState.token;
    },
  },
});

export const { saveToken, resetState: resetAuthState } = authSlice.actions;

export default authSlice.reducer;
