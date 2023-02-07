import { ReactNode } from 'react';

import { FormWrapper, Title, Wrapper } from 'src/components/AuthForm/styles';

interface AuthFormProps {
  children: ReactNode;
  title: string;
}

const AuthForm = ({ children, title }: AuthFormProps): JSX.Element => (
  <Wrapper>
    <Title>{title}</Title>
    <FormWrapper>
      {children}
    </FormWrapper>
  </Wrapper>
);

export default AuthForm;
