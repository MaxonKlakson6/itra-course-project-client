import { Link } from 'react-router-dom';

import { NavBar, TabsHolder, Wrapper } from 'src/components/Header/styles';
import Profile from 'src/components/Profile';

const Header = () => (
  <Wrapper>
    <NavBar>
      <TabsHolder>
        <Link to='Some'>Some</Link>
      </TabsHolder>
      <Profile />
    </NavBar>
  </Wrapper>
);

export default Header;
