import styled from '@emotion/styled';
import { Button } from '@mui/material';

import { COLORS } from 'src/static/colors';

export const Heading = styled.div`
  max-width: fit-content;
  margin: 0 auto;
`;

export const NameTitle = styled.h1`
  margin-bottom: 20px;
  font-family: Roboto, sans-serif;
  font-size: 24px;
  text-align: center;
`;

export const CreateButton = styled(Button)`
  background-color: ${COLORS.GREEN};

  &:hover {
    background-color: ${COLORS.DARK_GREEN};
  }

  & a {
    text-decoration: none;
    color: #fff;
  }
`;

export const CollectionsHolder = styled.div`
  width: 100%;
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(3, 300px);
  justify-content: space-between;
  row-gap: 30px;
`;
