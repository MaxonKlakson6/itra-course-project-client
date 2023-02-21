import * as yup from 'yup';

export const itemSchema = yup.object().shape({
  title: yup.string().required(),
});
