import styled from '@emotion/styled';
import { Tab, Tabs } from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Link } from 'react-router-dom';

import { COLORS } from 'src/static/colors';

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

export const WhiteTab = styled(Tab)`
  color: #fff;
`;
