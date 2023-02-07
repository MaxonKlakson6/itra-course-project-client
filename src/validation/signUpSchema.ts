import * as yup from 'yup';

export const signUpSchema = yup.object().shape({
  email: yup.string().trim().email().required(),
  name: yup.string().trim().required(),
  password: yup.string().trim().required(),
  confirm: yup.string().trim().oneOf([yup.ref('password'), null], 'Passwords aren\'t equal'),
});
