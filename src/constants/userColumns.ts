import { GridColDef } from '@mui/x-data-grid';

export const userColumns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'ID',
    width: 20,
  },
  {
    field: 'isBlocked',
    headerName: 'Block status',
    type: 'boolean',
    width: 100,
  },
  {
    field: 'email',
    headerName: 'Email',
    flex: 1,
  },
  {
    field: 'role',
    headerName: 'Role',
    width: 70,
  },
];
