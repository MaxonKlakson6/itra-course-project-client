import {
  useDeleteUserMutation,
  useGetUsersQuery,
  useMakeAdminMutation,
  useToggleBlockUserMutation,
} from 'src/api/adminApi';
import UsersLayout from 'src/pages/Users/components/UsersLayout';
import Loader from 'src/components/Loader';

const UsersContainer = () => {
  const { data: users = [], isLoading } = useGetUsersQuery();

  const [deleteUser] = useDeleteUserMutation();
  const [toggleBlock] = useToggleBlockUserMutation();
  const [makeAdmin] = useMakeAdminMutation();
  const handleDelete = (id: number) => {
    deleteUser(id);
  };

  const handleToggleBlock = (id: number) => {
    toggleBlock(id);
  };

  const handleMakeAdmin = (id: number) => {
    makeAdmin(id);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <UsersLayout
      users={users}
      handleDelete={handleDelete}
      handleToggleBlock={handleToggleBlock}
      handleMakeAdmin={handleMakeAdmin}
    />
  );
};

export default UsersContainer;
