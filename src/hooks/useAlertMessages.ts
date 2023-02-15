import { useEffect } from 'react';

import { useAppDispatch } from 'src/hooks/reduxHooks';
import {
  resetMessage,
  saveMessage,
} from 'src/store/reducers/alertMessagesSlice';
import { AlertMessage } from 'src/types/AlertMessage';

export const useAlertMessages = (error: string, success: string) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    let message: AlertMessage;
    if (error) {
      message = {
        type: 'error',
        value: error,
      };
      dispatch(saveMessage(message));
    }
    if (success) {
      message = {
        type: 'success',
        value: success,
      };
      dispatch(saveMessage(message));
    }
    const timeout = setTimeout(() => {
      dispatch(resetMessage());
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [error, success]);
};
