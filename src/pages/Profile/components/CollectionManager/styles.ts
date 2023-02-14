import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  position: relative;
`;

export const UpdateButton = styled(Link)`
  position: absolute;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #fff;
  color: #000;
  border: 0;
  cursor: pointer;
  top: 15px;
`;

export const DeleteButton = styled.button`
  position: absolute;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 0;
  cursor: pointer;
  top: 50px;
`;
