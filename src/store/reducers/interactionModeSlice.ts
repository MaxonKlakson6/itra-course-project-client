import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface InteractionModeInitialState {
  isReadOnly: boolean;
}

const interactionModeSlice = createSlice({
  name: 'interactionMode',
  initialState: {
    isReadOnly: false,
  },
  reducers: {
    changeMode: (state, action: PayloadAction<boolean>) => {
      state.isReadOnly = action.payload;
    },
  },
});

export const { changeMode } = interactionModeSlice.actions;

export default interactionModeSlice.reducer;
