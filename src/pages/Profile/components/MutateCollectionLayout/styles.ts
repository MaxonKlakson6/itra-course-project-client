import styled from '@emotion/styled';
import { Button, Tabs } from '@mui/material';
import { Link } from 'react-router-dom';

import { COLORS } from 'src/static/colors';
import CollectionCard from 'src/components/CollectionCard';

export const Wrapper = styled.div`
  width: 600px;
  padding: 30px;
  margin: 50px auto 0;
  position: relative;
  border: 1px solid ${COLORS.GREEN};
  border-radius: 5px;
`;

export const Heading = styled.div`
  margin-bottom: 20px;
`;

export const CloseButton = styled(Link)`
  position: absolute;
  top: 15px;
  right: 15px;
  border: 0;
  background-color: #fff;
  cursor: pointer;
  color: ${COLORS.GREY};

  &:hover svg {
    color: ${COLORS.DARK_GREY};
  }
`;

export const FormTabs = styled(Tabs)`
  margin-bottom: 30px;
`;

export const Title = styled.h2`
  margin-top: 10px;
  font-family: Oswald, sans-serif;
  font-size: 22px;
  font-weight: 500;
  text-align: center;
`;

export const PreviewCard = styled(CollectionCard)`
  margin: 0 auto;
`;
