import styled from '@emotion/styled';
import { Button as MuiButton } from '@mui/material';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  width: 50%;
  background-color: #56b280;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

export const Title = styled.h2`
  font-family: Oswald, sans-serif;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  color: #fff;
`;

export const TogglePageLink = styled(Link)`
  width: fit-content;
  margin: 0 auto;
  text-decoration: none;
`;

export const Button = styled(MuiButton)`
  padding: 7px 42px;
  font-size: 15px;
  text-transform: uppercase;
  color: #fff;
  font-family: Roboto, sans-serif;
  border: 1px solid #fff;
  border-radius: 30px;

  &:hover {
    background-color: #fff;
    color: #56b280;
  }
`;
