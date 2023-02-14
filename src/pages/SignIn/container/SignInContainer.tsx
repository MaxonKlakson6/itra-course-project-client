import { useFormik } from 'formik';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

import SignInLayout from 'src/pages/SignIn/components/SignInLayout';
import { SignInFormValues } from 'src/pages/SignIn/types/formValues';
import { signInSchema } from 'src/validation/signInSchema';
import { useSignInMutation } from 'src/api/authApi';
import { useAppDispatch } from 'src/hooks/reduxHooks';
import { saveToken } from 'src/store/reducers/authSlice';
import SnackBar from 'src/components/SnackBar';
import { createPosition } from 'src/helpers/createPosition';
import { ROUTE_NAMES } from 'src/router/routeNames';

const SignInContainer = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [signIn, { data, error, isSuccess, isError }] = useSignInMutation();

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
    <>
      <SignInLayout
        inputValues={values}
        errors={errors}
        touched={touched}
        handleInputChange={handleChange}
        handleBlur={handleBlur}
        handleSubmit={handleSubmit}
      />
      {isError && (
        <SnackBar
          message={error as string}
          severity='error'
          duration={2000}
          position={createPosition('top', 'center')}
        />
      )}
    </>
  );
};

export default SignInContainer;
