import { useTranslation } from 'react-i18next';

import { Button, Form } from 'src/static/styles/authStyles';
import InputWithError from 'src/components/InputWithError';
import { SignUpFormValues } from 'src/pages/SignUp/types/signUpFormValues';
import { AuthProps } from 'src/types/authProps';

const SignUpForm = ({
  inputValues,
  errors,
  touched,
  handleInputChange,
  handleBlur,
  handleSubmit,
}: AuthProps<SignUpFormValues>): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Form onSubmit={handleSubmit}>
      <InputWithError
        placeholder={t('auth.email')}
        inputValue={inputValues.email}
        inputType='email'
        name='email'
        errorText={errors.email}
        isTouched={touched.email}
        onChange={handleInputChange}
        handleBlur={handleBlur}
      />
      <InputWithError
        placeholder={t('auth.name')}
        inputValue={inputValues.name}
        inputType='text'
        name='name'
        errorText={errors.name}
        isTouched={touched.name}
        onChange={handleInputChange}
        handleBlur={handleBlur}
      />
      <InputWithError
        placeholder={t('auth.password')}
        inputValue={inputValues.password}
        inputType='password'
        name='password'
        errorText={errors.password}
        isTouched={touched.password}
        onChange={handleInputChange}
        handleBlur={handleBlur}
      />
      <InputWithError
        placeholder={t('auth.confirm')}
        inputValue={inputValues.confirm}
        inputType='password'
        name='confirm'
        errorText={errors.confirm}
        isTouched={touched.confirm}
        onChange={handleInputChange}
        handleBlur={handleBlur}
      />
      <Button type='submit'>{t('auth.createAccount')}</Button>
    </Form>
  );
};

export default SignUpForm;
