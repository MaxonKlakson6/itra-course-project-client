import { Navigate, Route, Routes } from 'react-router';

import { ROUTE_NAMES } from 'src/router/routeNames';
import SignUpContainer from 'src/pages/SignUp/container/SignUpContainer';
import SignInContainer from 'src/pages/SignIn/container/SignInContainer';
import ProfileContainer from 'src/pages/Profile/containers/ProfileContainer';
import MainContainer from 'src/pages/Main/container/MainContainer';
import CreateCollectionContainer from 'src/pages/Profile/containers/CreateCollectionContainer';
import ChangeCollectionContainer from 'src/pages/Profile/containers/ChangeCollectionContainer';
import PrivateRoute from 'src/router/PrivateRoute';
import CreateItemContainer from 'src/pages/Profile/containers/CreateItemContainer';
import ItemContainer from 'src/pages/Item/container/ItemContainer';
import CollectionContainer from 'src/pages/Collection/container/CollectionContainer';
import ChangeItemContainer from 'src/pages/Profile/containers/ChangeItemContainer';
import AdminRoute from 'src/router/AdminRoute';
import UsersContainer from 'src/pages/Users/container/UsersContainer';

const Router = () => (
  <Routes>
    <Route path={ROUTE_NAMES.MAIN} element={<MainContainer />} />
    <Route path={ROUTE_NAMES.SIGN_UP} element={<SignUpContainer />} />
    <Route path={ROUTE_NAMES.SIGN_IN} element={<SignInContainer />} />
    <Route path={ROUTE_NAMES.ITEM} element={<ItemContainer />} />
    <Route path={ROUTE_NAMES.COLLECTION} element={<CollectionContainer />} />
    <Route element={<PrivateRoute />}>
      <Route path={ROUTE_NAMES.PROFILE} element={<ProfileContainer />} />
      <Route
        path={ROUTE_NAMES.CREATE_COLLECTION}
        element={<CreateCollectionContainer />}
      />
      <Route
        path={ROUTE_NAMES.CHANGE_COLLECTION}
        element={<ChangeCollectionContainer />}
      />
      <Route path={ROUTE_NAMES.CREATE_ITEM} element={<CreateItemContainer />} />
      <Route path={ROUTE_NAMES.CHANGE_ITEM} element={<ChangeItemContainer />} />
      <Route element={<AdminRoute />}>
        <Route path={ROUTE_NAMES.USERS} element={<UsersContainer />} />
      </Route>
    </Route>
    <Route path='/' element={<Navigate to={ROUTE_NAMES.MAIN} />} />
  </Routes>
);

export default Router;
