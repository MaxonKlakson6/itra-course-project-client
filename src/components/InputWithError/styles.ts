import styled from '@emotion/styled';
import { FormHelperText, TextField } from '@mui/material';

import { COLORS } from 'src/static/colors';

export const Input = styled(TextField)`
  input::placeholder {
    padding-left: 5px;
  }
  .MuiInput-root:hover:not(.Mui-disabled):before {
    border-bottom: 1px solid rgba(0, 0, 0, 0.42);
  }
  .MuiInput-root:after {
    border-bottom: 1px solid ${COLORS.GREEN};
  }
`;

export const ErrorText = styled(FormHelperText)`
  min-height: 20px;
  color: red;
`;
