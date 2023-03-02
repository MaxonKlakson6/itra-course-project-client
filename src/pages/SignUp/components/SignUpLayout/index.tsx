import { useTranslation } from 'react-i18next';

import { ContentHolder, Wrapper } from 'src/static/styles/authStyles';
import SignUpForm from 'src/pages/SignUp/components/SignUpForm';
import AuthBanner from 'src/components/AuthBanner';
import AuthForm from 'src/components/AuthForm';
import { ROUTE_NAMES } from 'src/router/routeNames';
import { SignUpFormValues } from 'src/pages/SignUp/types/signUpFormValues';
import { AuthProps } from 'src/types/authProps';

const SignUpLayout = ({
  inputValues,
  errors,
  touched,
  handleInputChange,
  handleBlur,
  handleSubmit,
}: AuthProps<SignUpFormValues>): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <ContentHolder>
        <AuthBanner
          title={t('auth.signUpBannerTitle')}
          buttonText={t('auth.signUpBannerButton')}
          anotherPageUrl={ROUTE_NAMES.SIGN_IN}
        />
        <AuthForm title={t('auth.createAccount')}>
          <SignUpForm
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

export default SignUpLayout;
