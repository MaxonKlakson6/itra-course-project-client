import { ReactNode } from 'react';

import {
  ContentWrapper,
  Main,
  Wrapper,
} from 'src/components/BaseLayout/styles';
import Header from 'src/components/Header';
import SnackBar from 'src/components/SnackBar';
import { useAppSelector } from 'src/hooks/reduxHooks';
import { alertMessageSelector } from 'src/store/selectors/alertMessageSelector';
import { createPosition } from 'src/helpers/createPosition';

interface BaseLayoutProps {
  children: ReactNode;
}

const BaseLayout = ({ children }: BaseLayoutProps): JSX.Element => {
  const { type, value } = useAppSelector(alertMessageSelector);

  return (
    <>
      <Wrapper>
        <Header />
        <Main>
          <ContentWrapper>{children}</ContentWrapper>
        </Main>
        <footer>Footer</footer>
      </Wrapper>
      {type === 'error' && (
        <SnackBar
          message={value}
          severity='error'
          duration={2000}
          position={createPosition('top', 'center')}
        />
      )}
      {type === 'success' && (
        <SnackBar
          message={value}
          severity='success'
          duration={2000}
          position={createPosition('top', 'center')}
        />
      )}
    </>
  );
};

export default BaseLayout;
