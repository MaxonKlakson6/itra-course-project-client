import { Tab } from '@mui/material';
import { SyntheticEvent, useState } from 'react';
import CancelIcon from '@mui/icons-material/Cancel';

import {
  FormTabs,
  PreviewCard,
  Wrapper,
  Heading,
  Title,
  CloseButton,
} from 'src/pages/Profile/components/MutateCollectionLayout/styles';
import TabPanel from 'src/components/TabPanel';
import defaultImage from 'src/static/images/default.jpg';
import MutateForm from 'src/pages/Profile/components/MutateCollectionForm';
import { MutateFormProps } from 'src/pages/Profile/types/createCollectionProps';
import { ROUTE_NAMES } from 'src/router/routeNames';

interface MutateCollectionLayoutProps extends MutateFormProps {
  imageUrl?: string;
  formTitle: string;
}

const MutateCollectionLayout = ({
  formTitle,
  imageUrl,
  values,
  errors,
  touched,
  optionalFields,
  handleBlur,
  handleChange,
  createNewField,
  handleChangeOptionalField,
  deleteOptionalField,
  handleCreateCollection,
  handleChangeImageUrl,
}: MutateCollectionLayoutProps): JSX.Element => {
  const [tabValue, setTabValue] = useState<number>(0);
  const [image, setImage] = useState<string>(imageUrl || defaultImage);

  const handleChangeTab = (event: SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleImageChange = (newImage: string) => {
    setImage(newImage);
  };

  return (
    <Wrapper>
      <Heading>
        <Title>{formTitle}</Title>
        <CloseButton to={ROUTE_NAMES.PROFILE}>
          <CancelIcon />
        </CloseButton>
      </Heading>
      <FormTabs value={tabValue} onChange={handleChangeTab}>
        <Tab label='Form' />
        <Tab label='Preview' />
      </FormTabs>
      <TabPanel index={0} value={tabValue}>
        <MutateForm
          image={image}
          values={values}
          errors={errors}
          touched={touched}
          optionalFields={optionalFields}
          handleChange={handleChange}
          handleBlur={handleBlur}
          handleImageChange={handleImageChange}
          createNewField={createNewField}
          handleChangeOptionalField={handleChangeOptionalField}
          deleteOptionalField={deleteOptionalField}
          handleCreateCollection={handleCreateCollection}
          handleChangeImageUrl={handleChangeImageUrl}
        />
      </TabPanel>
      <TabPanel index={1} value={tabValue}>
        <PreviewCard
          image={image}
          title={values.title}
          subject={values.subject}
          description={values.description}
        />
      </TabPanel>
    </Wrapper>
  );
};

export default MutateCollectionLayout;
