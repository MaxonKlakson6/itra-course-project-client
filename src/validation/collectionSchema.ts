import * as yup from 'yup';

export const collectionSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
});
