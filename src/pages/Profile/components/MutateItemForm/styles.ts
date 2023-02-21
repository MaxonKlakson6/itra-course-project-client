import styled from '@emotion/styled';
import { Button, Chip } from '@mui/material';

import { COLORS } from 'src/static/colors';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Tag = styled(Chip)`
  background-color: ${COLORS.GREEN};
`;

export const TagsHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 5px;
  row-gap: 10px;
`;

export const AddTagButton = styled(Button)`
  align-self: flex-end;

  background-color: ${COLORS.GREEN};

  &:hover {
    background-color: ${COLORS.DARK_GREEN};
  }
`;

export const CreateItemButton = styled(Button)`
  background-color: ${COLORS.GREEN};
  color: #fff;
  &:hover {
    background-color: ${COLORS.DARK_GREEN};
  }
`;
