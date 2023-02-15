import { useFormik } from 'formik';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import SignUpLayout from 'src/pages/SignUp/components/SignUpLayout';
import SnackBar from 'src/components/SnackBar';
import { useSignUpMutation } from 'src/api/authApi';
import { createPosition } from 'src/helpers/createPosition';
import { signUpSchema } from 'src/validation/signUpSchema';
import { ROUTE_NAMES } from 'src/router/routeNames';
import { SignUpFormValues } from 'src/pages/SignUp/types/signUpFormValues';
import { useAlertMessages } from 'src/hooks/useAlertMessages';

const SignUpContainer = (): JSX.Element => {
  const navigate = useNavigate();
  const [signUp, { data, error, isError, isSuccess }] = useSignUpMutation();
  useAlertMessages(error as string, data as string);
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
  } = useFormik<SignUpFormValues>({
    initialValues: {
      email: '',
      name: '',
      password: '',
      confirm: '',
    },
    validationSchema: signUpSchema,
    validateOnBlur: true,
    onSubmit: () => {
      const { confirm, ...valuesToQuery } = values;
      signUp(valuesToQuery);
      resetForm();
    },
  });

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (isSuccess) {
      timeout = setTimeout(() => {
        navigate(ROUTE_NAMES.SIGN_IN);
      }, 2000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [data]);

  return (
    <SignUpLayout
      inputValues={values}
      errors={errors}
      touched={touched}
      handleInputChange={handleChange}
      handleBlur={handleBlur}
      handleSubmit={handleSubmit}
    />
  );
};

export default SignUpContainer;
