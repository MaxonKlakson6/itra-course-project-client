import { useTranslation } from 'react-i18next';

import { ContentHolder, Wrapper } from 'src/static/styles/authStyles';
import AuthBanner from 'src/components/AuthBanner';
import SignInForm from 'src/pages/SignIn/components/SignInForm';
import AuthForm from 'src/components/AuthForm';
import { ROUTE_NAMES } from 'src/router/routeNames';
import { AuthProps } from 'src/types/authProps';
import { SignInFormValues } from 'src/pages/SignIn/types/formValues';

const SignInLayout = ({
  inputValues,
  errors,
  touched,
  handleInputChange,
  handleBlur,
  handleSubmit,
}: AuthProps<SignInFormValues>): JSX.Element => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <ContentHolder>
        <AuthBanner
          title={t('auth.signInBannerTitle')}
          buttonText={t('auth.signInBannerButton')}
          anotherPageUrl={ROUTE_NAMES.SIGN_UP}
        />
        <AuthForm title={t('auth.login')}>
          <SignInForm
            inputValues={inputValues}
            errors={errors}
            touched={touched}
            handleInputChange={handleInputChange}
            handleBlur={handleBlur}
            handleSubmit={handleSubmit}
          />
        </AuthForm>
      </ContentHolder>
    </Wrapper>
  );
};

export default SignInLayout;
