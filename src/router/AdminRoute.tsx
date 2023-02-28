import { Navigate, Outlet } from 'react-router';

import { useAppSelector } from 'src/hooks/reduxHooks';
import { authSelector } from 'src/store/selectors/authSelector';
import { ROUTE_NAMES } from 'src/router/routeNames';

const AdminRoute = () => {
  const { userData } = useAppSelector(authSelector);

  return userData.role === 'ADMIN' ? (
    <Outlet />
  ) : (
    <Navigate to={ROUTE_NAMES.MAIN} />
  );
};

export default AdminRoute;
