import { Link } from 'react-router-dom';

import { NavBar, TabsHolder, Wrapper } from 'src/components/Header/styles';
import Profile from 'src/components/Profile';
import { ROUTE_NAMES } from 'src/router/routeNames';

const Header = () => (
  <Wrapper>
    <NavBar>
      <TabsHolder>
        <Link to={ROUTE_NAMES.MAIN}>Main page</Link>
      </TabsHolder>
      <Profile />
    </NavBar>
  </Wrapper>
);

export default Header;
