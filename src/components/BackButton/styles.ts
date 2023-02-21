import styled from '@emotion/styled';

import { COLORS } from 'src/static/colors';

export const CloseButton = styled.button`
  border: 0;
  background-color: #fff;
  cursor: pointer;
  color: ${COLORS.GREY};

  &:hover svg {
    color: ${COLORS.DARK_GREY};
  }
`;
