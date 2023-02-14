import { Button } from '@mui/material';
import styled from '@emotion/styled';

import Dropzone from 'src/components/Dropzone';
import { COLORS } from 'src/static/colors';
import Dropdown from 'src/components/Dropdown';

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ImageLoader = styled(Dropzone)`
  align-self: center;
`;

export const DescriptionField = styled.textarea`
  resize: none;
  padding: 10px;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  outline-color: ${COLORS.GREEN};
`;

export const AddFieldButton = styled(Dropdown)`
  align-self: flex-end;

  & button {
    background-color: ${COLORS.GREEN};
  }

  & button:hover {
    background-color: ${COLORS.DARK_GREEN};
  }
`;

export const CreateCollectionButton = styled(Button)`
  background-color: ${COLORS.GREEN};

  &:hover {
    background-color: ${COLORS.DARK_GREEN};
  }
`;
