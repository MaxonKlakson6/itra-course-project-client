import { Link } from 'react-router-dom';

import {
  NavBar,
  PageLink,
  PageLinksHolder,
  Wrapper,
} from 'src/components/Header/styles';
import Profile from 'src/components/Profile';
import { ROUTE_NAMES } from 'src/router/routeNames';
import { useAppSelector } from 'src/hooks/reduxHooks';
import { authSelector } from 'src/store/selectors/authSelector';

const Header = () => {
  const { userData } = useAppSelector(authSelector);

  return (
    <Wrapper>
      <NavBar>
        <PageLinksHolder>
          <PageLink to={ROUTE_NAMES.MAIN}>Main page</PageLink>
          {userData.role === 'ADMIN' && (
            <PageLink to={ROUTE_NAMES.USERS}>Users</PageLink>
          )}
        </PageLinksHolder>
        <Profile />
      </NavBar>
    </Wrapper>
  );
};

export default Header;
