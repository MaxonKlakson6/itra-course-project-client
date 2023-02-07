import { ContentHolder, Wrapper } from 'src/static/styles/authStyles';
import AuthBanner from 'src/components/AuthBanner';
import { SIGN_IN_TEXT } from 'src/constants/signInText';
import { ROUTE_NAMES } from 'src/router/routeNames';
import { AuthProps } from 'src/types/authProps';
import { SignInFormValues } from 'src/pages/SignIn/types/formValues';
import SignInForm from 'src/pages/SignIn/components/SignInForm';
import AuthForm from 'src/components/AuthForm';

const SignInLayout = ({
  inputValues,
  errors,
  touched,
  handleInputChange,
  handleBlur,
  handleSubmit,
}: AuthProps<SignInFormValues>): JSX.Element => (
  <Wrapper>
    <ContentHolder>
      <AuthBanner
        title={SIGN_IN_TEXT.BANNER_TITLE}
        buttonText={SIGN_IN_TEXT.BANNER_BUTTON}
        anotherPageUrl={ROUTE_NAMES.SIGN_UP}
      />
      <AuthForm title={SIGN_IN_TEXT.FORM_TITLE}>
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

export default SignInLayout;
