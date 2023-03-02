import { useTranslation } from 'react-i18next';

import {
  LanguageSelect,
  NavBar,
  PageLink,
  PageLinksHolder,
  Wrapper,
} from 'src/components/Header/styles';
import Profile from 'src/components/Profile';
import { ROUTE_NAMES } from 'src/router/routeNames';
import { useAppSelector } from 'src/hooks/reduxHooks';
import { authSelector } from 'src/store/selectors/authSelector';
import { languages } from 'src/localization/languages';

const Header = () => {
  const { userData } = useAppSelector(authSelector);
  const { t, i18n } = useTranslation();

  const handleChange = (selectedLanguage: string) => {
    if (selectedLanguage !== i18n.language) {
      i18n.changeLanguage(selectedLanguage);
    }
  };

  return (
    <Wrapper>
      <NavBar>
        <PageLinksHolder>
          <PageLink to={ROUTE_NAMES.MAIN}>{t('header.mainPage')}</PageLink>
          {userData.role === 'ADMIN' && (
            <PageLink to={ROUTE_NAMES.USERS}>{t('header.users')}</PageLink>
          )}
        </PageLinksHolder>
        <LanguageSelect
          id='some'
          menuItems={languages}
          saveValue={handleChange}
        >
          {t(i18n.language)}
        </LanguageSelect>
        <Profile />
      </NavBar>
    </Wrapper>
  );
};

export default Header;
