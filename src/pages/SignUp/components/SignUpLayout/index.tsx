import { ChangeEvent, FocusEvent, FormEvent } from 'react';
import { FormikErrors, FormikTouched } from 'formik';

import {
  ContentHolder,
  Wrapper,
} from 'src/pages/SignUp/components/SignUpLayout/styles';
import SignUpForm from 'src/pages/SignUp/components/SignUpForm';
import AuthBanner from 'src/components/AuthBanner';
import { SIGN_UP_TEXT } from 'src/constants/signUpText';
import AuthForm from 'src/components/AuthForm';
import { FormValues } from 'src/pages/SignUp/types/formValues';
import { ROUTE_NAMES } from 'src/router/routeNames';

interface SignUpLayoutProps {
  inputValues: FormValues;
  errors: FormikErrors<FormValues>;
  touched: FormikTouched<FormValues>;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (event: FocusEvent) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

const SignUpLayout = ({
  inputValues,
  errors,
  touched,
  handleInputChange,
  handleBlur,
  handleSubmit,
}: SignUpLayoutProps): JSX.Element => (
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
