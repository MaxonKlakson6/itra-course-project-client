import { useFormik } from 'formik';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import SignInLayout from 'src/pages/SignIn/components/SignInLayout';
import { useAppDispatch } from 'src/hooks/reduxHooks';
import { saveToken } from 'src/store/reducers/authSlice';
import { useAlertMessages } from 'src/hooks/useAlertMessages';
import { useSignInMutation } from 'src/api/authApi';
import { signInSchema } from 'src/validation/signInSchema';
import { ROUTE_NAMES } from 'src/router/routeNames';
import { SignInFormValues } from 'src/pages/SignIn/types/formValues';

const SignInContainer = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [signIn, { data, error, isSuccess }] = useSignInMutation();

  useAlertMessages(error as string, '');

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
  } = useFormik<SignInFormValues>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: signInSchema,
    validateOnBlur: true,
    onSubmit: () => {
      signIn(values);
      resetForm();
    },
  });

  useEffect(() => {
    if (isSuccess && data) {
      dispatch(saveToken(data));
      navigate(ROUTE_NAMES.DEFAULT);
    }
  }, [isSuccess]);

  return (
    <SignInLayout
      inputValues={values}
      errors={errors}
      touched={touched}
      handleInputChange={handleChange}
      handleBlur={handleBlur}
      handleSubmit={handleSubmit}
    />
  );
};

export default SignInContainer;
