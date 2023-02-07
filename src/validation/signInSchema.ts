import * as yup from 'yup';

export const signInSchema = yup.object().shape({
  email: yup.string().trim().email().required(),
  password: yup.string().trim().required(),
});
