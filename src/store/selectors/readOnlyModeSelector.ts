import { RootState } from 'src/types/reduxTypes';

export const readOnlyModeSelector = (state: RootState) =>
  state.interactionMode.isReadOnly;
