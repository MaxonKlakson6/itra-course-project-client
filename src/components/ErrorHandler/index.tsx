import { ReactNode } from 'react';
import { Typography } from '@mui/material';

interface ErrorHandlerProps {
  isError: boolean;
  errorMessage: string | undefined;
  children: ReactNode;
}

const ErrorHandler = ({
  isError,
  errorMessage,
  children,
}: ErrorHandlerProps) => (
  <div>
    {isError ? <Typography variant='h4'>{errorMessage}</Typography> : children}
  </div>
);

export default ErrorHandler;
