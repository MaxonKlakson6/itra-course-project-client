import {
  Alert,
  Snackbar as MuiSnackbar,
  AlertColor,
  SnackbarOrigin,
} from '@mui/material';
import { useState } from 'react';

interface SnackBarProps {
  message: string;
  severity: AlertColor;
  duration: number;
  position: SnackbarOrigin;
  onClose?: () => void;
}
const SnackBar = ({
  message,
  severity,
  duration,
  position,
  onClose,
}: SnackBarProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const handleOpenChange = () => {
    setIsOpen(false);

    if (onClose) {
      onClose();
    }
  };

  return (
    <MuiSnackbar
      open={isOpen}
      autoHideDuration={duration}
      onClose={handleOpenChange}
      anchorOrigin={position}
    >
      <Alert severity={severity}>{message}</Alert>
    </MuiSnackbar>
  );
};

export default SnackBar;
