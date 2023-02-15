import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from 'src/hooks/reduxHooks';
import {
  ProfileLink,
  ProfileIcon,
  LogoutIcon,
  LogoutButton,
  Wrapper,
  AuthButton,
} from 'src/components/Profile/styles';
import { ROUTE_NAMES } from 'src/router/routeNames';
import { resetAuthState } from 'src/store/reducers/authSlice';
import { authSelector } from 'src/store/selectors/authSelector';

const Profile = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { token } = useAppSelector(authSelector);

  const handleLogout = () => {
    localStorage.clear();
    dispatch(resetAuthState());
    navigate(ROUTE_NAMES.DEFAULT);
  };

  if (token) {
    return (
      <Wrapper>
        <ProfileLink to={ROUTE_NAMES.PROFILE}>
          <ProfileIcon />
        </ProfileLink>
        <LogoutButton onClick={handleLogout}>
          <LogoutIcon />
        </LogoutButton>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <AuthButton variant='outlined'>
        <Link to={ROUTE_NAMES.SIGN_IN}>Sign in</Link>
      </AuthButton>
      <AuthButton variant='outlined'>
        <Link to={ROUTE_NAMES.SIGN_UP}>Sign up</Link>
      </AuthButton>
    </Wrapper>
  );
};

export default Profile;
