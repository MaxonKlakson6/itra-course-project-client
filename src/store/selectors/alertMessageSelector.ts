import { RootState } from 'src/types/reduxTypes';

export const alertMessageSelector = (state: RootState) => state.message.message;
