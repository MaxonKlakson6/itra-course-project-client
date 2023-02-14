import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MuiLogoutIcon from '@mui/icons-material/Logout';
import { Button } from '@mui/material';

import { COLORS } from 'src/static/colors';

export const Wrapper = styled.div`
  display: flex;
  gap: 15px;
`;

export const ProfileLink = styled(Link)`
  height: 24px;
  width: fit-content;
`;

export const ProfileIcon = styled(PersonOutlineIcon)`
  color: #fff;
  border-radius: 3px;

  &:hover {
    transition: 0.4s;
    background-color: #fff;
    color: ${COLORS.GREEN};
  }
`;

export const LogoutIcon = styled(MuiLogoutIcon)`
  color: #fff;
  border-radius: 3px;

  &:hover {
    transition: 0.4s;
    background-color: #fff;
    color: ${COLORS.GREEN};
  }
`;

export const LogoutButton = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
`;

export const AuthButton = styled(Button)`
  color: #fff;
  border-color: #fff;

  &:hover {
    border-color: #fff;
  }

  & a {
    color: #fff;
    text-decoration: none;
  }
`;
