import { ChangeEvent, FocusEvent, FormEvent } from 'react';
import { FormikErrors, FormikTouched } from 'formik';

import { Button, Form } from 'src/pages/SignUp/components/SignUpForm/styles';
import InputWithError from 'src/components/InputWithError';
import { FormValues } from 'src/pages/SignUp/types/formValues';

interface SignUpFormProps {
  inputValues: FormValues;
  errors: FormikErrors<FormValues>;
  touched: FormikTouched<FormValues>;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (event: FocusEvent) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

const SignUpForm = ({
  inputValues,
  errors,
  touched,
  handleInputChange,
  handleBlur,
  handleSubmit,
}: SignUpFormProps): JSX.Element => (
  <Form onSubmit={handleSubmit}>
    <InputWithError
      placeholder='Email'
      inputValue={inputValues.email}
      inputType='email'
      name='email'
      errorText={errors.email}
      isTouched={touched.email}
      onChange={handleInputChange}
      handleBlur={handleBlur}
    />
    <InputWithError
      placeholder='Name'
      inputValue={inputValues.name}
      inputType='text'
      name='name'
      errorText={errors.name}
      isTouched={touched.name}
      onChange={handleInputChange}
      handleBlur={handleBlur}
    />
    <InputWithError
      placeholder='Password'
      inputValue={inputValues.password}
      inputType='password'
      name='password'
      errorText={errors.password}
      isTouched={touched.password}
      onChange={handleInputChange}
      handleBlur={handleBlur}
    />
    <InputWithError
      placeholder='Confirm password'
      inputValue={inputValues.confirm}
      inputType='password'
      name='confirm'
      errorText={errors.confirm}
      isTouched={touched.confirm}
      onChange={handleInputChange}
      handleBlur={handleBlur}
    />
    <Button type='submit'>Create an account</Button>
  </Form>
);

export default SignUpForm;
