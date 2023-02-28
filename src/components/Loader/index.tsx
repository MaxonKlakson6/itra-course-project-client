import { CircularProgress } from '@mui/material';

import { LoaderWrapper } from 'src/components/Loader/styles';

const Loader = () => (
  <LoaderWrapper>
    <CircularProgress color='success' />
  </LoaderWrapper>
);

export default Loader;
