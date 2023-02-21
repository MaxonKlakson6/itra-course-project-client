import { Button, Tabs } from '@mui/material';
import styled from '@emotion/styled';

import Dropzone from 'src/components/Dropzone';
import { COLORS } from 'src/static/colors';
import Dropdown from 'src/components/Dropdown';
import CollectionCard from 'src/components/CollectionCard';
import BackButton from 'src/components/BackButton';

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

export const CloseButton = styled(BackButton)`
  position: absolute;
  top: 15px;
  right: 15px;
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

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ImageLoader = styled(Dropzone)`
  align-self: center;
`;

export const DescriptionField = styled.textarea`
  resize: none;
  padding: 10px;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  outline-color: ${COLORS.GREEN};
`;

export const AddButton = styled(Dropdown)`
  align-self: flex-end;

  & button {
    background-color: ${COLORS.GREEN};
  }

  & button:hover {
    background-color: ${COLORS.DARK_GREEN};
  }
`;

export const SubmitButton = styled(Button)`
  background-color: ${COLORS.GREEN};
  color: #fff;

  &:hover {
    background-color: ${COLORS.DARK_GREEN};
  }
`;
