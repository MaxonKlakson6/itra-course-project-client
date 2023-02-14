import styled from '@emotion/styled';
import { Tab, Tabs } from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

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

export const TabsHolder = styled.div`
  max-width: 600px;
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  justify-content: space-between;
`;

export const WhiteTab = styled(Tab)`
  color: #fff;
`;
