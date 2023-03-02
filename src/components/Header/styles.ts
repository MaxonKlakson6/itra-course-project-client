import styled from '@emotion/styled';
import { Tab } from '@mui/material';
import { Link } from 'react-router-dom';

import { COLORS } from 'src/static/colors';
import Dropdown from 'src/components/Dropdown';

export const Wrapper = styled.header`
  height: 50px;
  background-color: ${COLORS.GREEN};
`;

export const NavBar = styled.nav`
  max-width: 1140px;
  height: 100%;
  margin: 0 auto;
  padding: 0 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PageLinksHolder = styled.div`
  max-width: 600px;
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  gap: 10px;
`;

export const PageLink = styled(Link)`
  font-family: Roboto, sans-serif;
  color: #fff;
`;

export const LanguageSelect = styled(Dropdown)`
  background-color: #fff;
  border-radius: 4px;

  & button {
    background-color: #fff;
    color: ${COLORS.GREEN};
  }

  &:hover {
    background-color: ${COLORS.GREEN};
  }

  & button:hover {
    background-color: ${COLORS.GREEN};
    color: #fff;
  }
`;
