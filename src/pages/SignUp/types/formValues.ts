export interface FormValues {
  email: string;
  name: string;
  password: string;
  confirm: string;
}

export type TouchedValues = {
  [key in keyof FormValues]: boolean;
};
