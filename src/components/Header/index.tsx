import { Link } from 'react-router-dom';

import {
  NavBar,
  PageLink,
  PageLinksHolder,
  Wrapper,
} from 'src/components/Header/styles';
import Profile from 'src/components/Profile';
import { ROUTE_NAMES } from 'src/router/routeNames';

const Header = () => (
  <Wrapper>
    <NavBar>
      <PageLinksHolder>
        <PageLink to={ROUTE_NAMES.MAIN}>Main page</PageLink>
      </PageLinksHolder>
      <Profile />
    </NavBar>
  </Wrapper>
);

export default Header;
