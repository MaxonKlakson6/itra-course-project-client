import { Tab } from '@mui/material';
import { SyntheticEvent, useState } from 'react';

import {
  FormTabs,
  PreviewCard,
  Wrapper,
  Heading,
  Title,
  CloseButton,
} from 'src/static/styles/formStyles';
import TabPanel from 'src/components/TabPanel';
import CollectionForm from 'src/pages/Profile/components/CollectionForm';
import { CollectionFormProps } from 'src/pages/Profile/types/collectionFormProps';
import defaultImage from 'src/static/images/default.jpg';

interface CollectionFormLayoutProps extends CollectionFormProps {
  imageUrl?: string;
  formTitle: string;
}

const CollectionFormLayout = ({
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
}: CollectionFormLayoutProps): JSX.Element => {
  const [tabValue, setTabValue] = useState<number>(0);
  const [image, setImage] = useState<string>(
    imageUrl || import.meta.env.VITE_DEFAULT_IMAGE
  );

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
        <CloseButton />
      </Heading>
      <FormTabs value={tabValue} onChange={handleChangeTab}>
        <Tab label='Form' />
        <Tab label='Preview' />
      </FormTabs>
      <TabPanel index={0} value={tabValue}>
        <CollectionForm
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

export default CollectionFormLayout;
