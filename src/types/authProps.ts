import { FormikErrors, FormikTouched } from 'formik';
import { ChangeEvent, FocusEvent, FormEvent } from 'react';

export interface AuthProps<Form> {
  inputValues: Form;
  errors: FormikErrors<Form>;
  touched: FormikTouched<Form>;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (event: FocusEvent) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
}
