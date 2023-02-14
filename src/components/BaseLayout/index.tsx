import { ReactNode } from 'react';

import { Main, Wrapper } from 'src/components/BaseLayout/styles';
import Header from 'src/components/Header';

interface BaseLayoutProps {
  children: ReactNode;
}

const BaseLayout = ({ children }: BaseLayoutProps): JSX.Element => (
  <Wrapper>
    <Header />
    <Main>{children}</Main>
    <footer>Footer</footer>
  </Wrapper>
);

export default BaseLayout;
