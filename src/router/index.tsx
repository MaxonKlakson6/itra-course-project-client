import { Navigate, Route, Routes } from 'react-router';

import { ROUTE_NAMES } from 'src/router/routeNames';
import SignUpContainer from 'src/pages/SignUp/container/SignUpContainer';
import SignInContainer from 'src/pages/SignIn/container/SignInContainer';
import ProfileContainer from 'src/pages/Profile/containers/ProfileContainer';
import DefaultContainer from 'src/pages/Default/container/DefaultContainer';
import CreateCollectionContainer from 'src/pages/Profile/containers/CreateCollectionContainer';
import ChangeCollectionContainer from 'src/pages/Profile/containers/ChangeCollectionContainer';
import PrivateRoute from 'src/router/PrivateRoute';
import CreateItemContainer from 'src/pages/Profile/containers/CreateItemContainer';
import ItemContainer from 'src/pages/Item/container/ItemContainer';
import CollectionContainer from 'src/pages/Collection/container/CollectionContainer';
import ChangeItemContainer from 'src/pages/Profile/containers/ChangeItemContainer';

const Router = () => (
  <Routes>
    <Route path={ROUTE_NAMES.DEFAULT} element={<DefaultContainer />} />
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
    </Route>
    <Route path='/' element={<Navigate to={ROUTE_NAMES.DEFAULT} />} />
  </Routes>
);

export default Router;
