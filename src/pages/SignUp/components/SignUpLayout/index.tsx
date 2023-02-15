import { ContentHolder, Wrapper } from 'src/static/styles/authStyles';
import SignUpForm from 'src/pages/SignUp/components/SignUpForm';
import AuthBanner from 'src/components/AuthBanner';
import AuthForm from 'src/components/AuthForm';
import { SIGN_UP_TEXT } from 'src/constants/signUpText';
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
}: AuthProps<SignUpFormValues>): JSX.Element => (
  <Wrapper>
    <ContentHolder>
      <AuthBanner
        title={SIGN_UP_TEXT.BANNER_TITLE}
        buttonText={SIGN_UP_TEXT.BANNER_BUTTON}
        anotherPageUrl={ROUTE_NAMES.SIGN_IN}
      />
      <AuthForm title={SIGN_UP_TEXT.FORM_TITLE}>
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

export default SignUpLayout;
