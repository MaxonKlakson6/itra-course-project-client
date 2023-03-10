import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';

import { User } from 'src/types/user';
import { userColumns } from 'src/constants/userColumns';
import Tools from 'src/pages/Users/components/Tools';
import { ROUTES_WITH_ID } from 'src/router/routeNames';

interface UsersLayoutProps {
  users: User[];
  handleDelete: (id: number) => void;
  handleToggleBlock: (id: number) => void;
  handleMakeAdmin: (id: number) => void;
}

const UsersLayout = ({
  users,
  handleDelete,
  handleToggleBlock,
  handleMakeAdmin,
}: UsersLayoutProps) => {
  const columns: GridColDef<User>[] = [
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      renderCell: (params) => (
        <Link to={`${ROUTES_WITH_ID.PROFILE}/${params.row.id}`}>
          {params.row.name}
        </Link>
      ),
    },
    ...userColumns,
    {
      field: 'actions',
      headerName: 'Actions',
      flex: 1,
      renderCell: (params) => (
        <Tools
          id={params.row.id}
          isBlocked={params.row.isBlocked}
          handleDelete={handleDelete}
          handleToggleBlock={handleToggleBlock}
          handleMakeAdmin={handleMakeAdmin}
        />
      ),
    },
  ];

  return (
    <div style={{ height: '400px' }}>
      <DataGrid
        columns={columns}
        rows={[...users]}
        disableColumnMenu
        disableExtendRowFullWidth
        hideFooter
      />
    </div>
  );
};

export default UsersLayout;
