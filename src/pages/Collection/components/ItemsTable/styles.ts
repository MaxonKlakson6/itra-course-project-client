import styled from '@emotion/styled';
import { TableCell } from '@mui/material';

export const Cell = styled(TableCell)`
  min-width: 200px;
  max-width: 200px;
  overflow: hidden;
  text-overflow: clip;
`;

export const HeadingCell = styled(Cell)`
  font-weight: 600;
`;
