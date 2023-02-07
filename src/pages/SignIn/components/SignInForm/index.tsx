import { Button, Form } from 'src/static/styles/authStyles';
import InputWithError from 'src/components/InputWithError';
import { AuthProps } from 'src/types/authProps';
import { SignInFormValues } from 'src/pages/SignIn/types/formValues';

const SignInForm = ({
  inputValues,
  errors,
  touched,
  handleInputChange,
  handleBlur,
  handleSubmit,
}: AuthProps<SignInFormValues>): JSX.Element => (
  <Form onSubmit={handleSubmit}>
    <InputWithError
      placeholder='Email'
      inputType='email'
      inputValue={inputValues.email}
      name='email'
      errorText={errors.email}
      isTouched={touched.email}
      onChange={handleInputChange}
      handleBlur={handleBlur}
    />
    <InputWithError
      placeholder='Password'
      inputType='password'
      inputValue={inputValues.password}
      name='password'
      errorText={errors.password}
      isTouched={touched.password}
      onChange={handleInputChange}
      handleBlur={handleBlur}
    />
    <Button type='submit'>Sign in</Button>
  </Form>
);

export default SignInForm;
