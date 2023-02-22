import styled from '@emotion/styled';

export const ContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ItemRow = styled.div`
  font-family: Roboto, sans-serif;
  align-items: center;
  display: flex;
  gap: 10px;
  overflow: hidden;
  text-overflow: clip;
`;

export const RowName = styled.p`
  font-size: 18px;
  font-weight: 600;
`;
