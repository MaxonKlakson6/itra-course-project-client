import styled from '@emotion/styled';

import { COLORS } from 'src/static/colors';
import { Input } from 'src/components/InputWithError/styles';

export const Wrapper = styled.div`
  margin-bottom: 23px;
  display: flex;
  gap: 10px;
  align-items: flex-end;
`;

export const InputField = styled(Input)`
  flex-grow: 1;
`;

export const DeleteButton = styled.button`
  width: 24px;
  height: 24px;
  background-color: #fff;
  border: 0;
  cursor: pointer;

  & svg {
    color: ${COLORS.GREY};
  }

  &:hover svg {
    transition: 0.3s;
    color: ${COLORS.DARK_GREY};
  }
`;
