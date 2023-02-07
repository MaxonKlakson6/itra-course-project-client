import { ReactNode } from 'react';

import { Main, Wrapper } from 'src/components/BaseLayout/styles';

interface BaseLayoutProps {
  children: ReactNode;
}

const BaseLayout = ({ children }: BaseLayoutProps): JSX.Element => (
  <Wrapper>
    <header>Header</header>
    <Main>{children}</Main>
    <footer>Footer</footer>
  </Wrapper>
);

export default BaseLayout;
