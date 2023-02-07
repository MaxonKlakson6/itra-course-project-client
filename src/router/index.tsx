import { Navigate, Route, Routes } from 'react-router';

import { ROUTE_NAMES } from 'src/router/routeNames';
import SignUpContainer from 'src/pages/SignUp/container/SignUpContainer';
import SignInContainer from 'src/pages/SignIn/container/SignInContainer';

const Router = () => (
  <Routes>
    <Route path={ROUTE_NAMES.SIGN_UP} element={<SignUpContainer />} />
    <Route path={ROUTE_NAMES.SIGN_IN} element={<SignInContainer />} />
    <Route path='/' element={<Navigate to={ROUTE_NAMES.SIGN_UP} />} />
  </Routes>
);

export default Router;
