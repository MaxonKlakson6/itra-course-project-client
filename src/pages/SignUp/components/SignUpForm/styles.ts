import styled from '@emotion/styled';
import { Button as MuiButton } from '@mui/material';

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Button = styled(MuiButton)`
    width: 100%;
    margin: 20px auto 0;
    padding: 5px 40px;
    border-radius: 30px;
    background: #56B280;
    border: 1px solid #fff;
    font-family: Roboto, sans-serif;
    font-weight: 500;
    font-size: 18px;
    text-transform: none;
    color: #fff;
    &:hover {
        background: #fff;
        border: 1px solid #56B280;
        color: #56B280;
    }
;
`;
