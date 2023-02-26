import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { TagCloud } from 'react-tagcloud';

import { COLORS } from 'src/static/colors';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const SearchLinksHolder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Cloud = styled(TagCloud)`
  max-width: 400px;
  padding: 10px;
  align-self: flex-end;
  border: 2px solid ${COLORS.GREEN};
  border-radius: 10px;

  & span {
    cursor: pointer;
  }
  & span:hover {
    transition: 0.3s;
    transform: scale(1.1);
  }
`;

export const ItemsHolder = styled.div`
  max-width: fit-content;
  margin: 10px auto;
`;

export const ItemLink = styled(Link)`
  font-family: Roboto, sans-serif;
  font-size: 18px;
  color: #000;
`;
