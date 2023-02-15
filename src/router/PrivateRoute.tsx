import { Navigate, Outlet } from 'react-router';

import { useAppSelector } from 'src/hooks/reduxHooks';
import { authSelector } from 'src/store/selectors/authSelector';
import { ROUTE_NAMES } from 'src/router/routeNames';

const PrivateRoute = () => {
  const { token } = useAppSelector(authSelector);

  return token ? <Outlet /> : <Navigate to={ROUTE_NAMES.DEFAULT} />;
};

export default PrivateRoute;
