import { SignUpFormValues } from 'src/pages/SignUp/types/signUpFormValues';

export type SignInFormValues = Omit<SignUpFormValues, 'name' | 'confirm'>;
