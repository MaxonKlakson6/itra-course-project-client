import { FormControl } from '@mui/material';
import { useTranslation } from 'react-i18next';

import {
  AddButton,
  SubmitButton,
  DescriptionField,
  Form,
  ImageLoader,
} from 'src/static/styles/formStyles';
import { ErrorText } from 'src/components/InputWithError/styles';
import CollectionOptionalFieldInput from 'src/pages/Profile/components/CollectionOptionalFieldInput';
import InputWithError from 'src/components/InputWithError';
import Select from 'src/components/Select';
import { optionalFieldsTypes } from 'src/constants/optionalFieldsTypes';
import { subjects } from 'src/constants/subjects';
import { OptionalFieldTypes } from 'src/types/optionalFieldTypes';
import { CollectionFormProps as FormProps } from 'src/pages/Profile/types/collectionFormProps';

interface CollectionFormProps extends FormProps {
  image: string;
  handleImageChange: (newImage: string) => void;
}

const CollectionForm = ({
  image,
  values,
  optionalFields,
  touched,
  errors,
  handleBlur,
  handleChange,
  handleImageChange,
  createNewField,
  handleChangeOptionalField,
  deleteOptionalField,
  handleCreateCollection,
  handleChangeImageUrl,
}: CollectionFormProps): JSX.Element => {
  const { t } = useTranslation();

  const saveType = (chosenType: string) => {
    createNewField(chosenType as OptionalFieldTypes);
  };

  return (
    <Form onSubmit={handleCreateCollection}>
      <ImageLoader
        image={image}
        changeImage={handleImageChange}
        handleChangeImageUrl={handleChangeImageUrl}
      />
      <InputWithError
        placeholder={t('createCollectionPage.titlePlaceholder')}
        inputType='text'
        inputValue={values.title}
        name='title'
        errorText={errors.title}
        isTouched={touched.title}
        onChange={handleChange}
        handleBlur={handleBlur}
      />
      <Select
        options={subjects}
        labelId='subject-label'
        label={t('createCollectionPage.subjectLabel')}
        value={values.subject}
        name='subject'
        handleChange={handleChange}
      />
      <FormControl>
        <DescriptionField
          rows={5}
          placeholder={
            t('createCollectionPage.descriptionPlaceholder') as string
          }
          value={values.description}
          name='description'
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <ErrorText>{touched.description && errors.description}</ErrorText>
      </FormControl>
      {optionalFields.map((optionalField, index) => (
        <CollectionOptionalFieldInput
          key={optionalField.id}
          id={optionalField.id}
          index={index}
          label={optionalField.label}
          handleChange={handleChangeOptionalField}
          deleteOptionalField={deleteOptionalField}
        />
      ))}
      <AddButton
        id='collection-type'
        menuItems={optionalFieldsTypes}
        saveValue={saveType}
      >
        {t('createCollectionPage.addField')}
      </AddButton>
      <SubmitButton type='submit' variant='contained'>
        {t('submit')}
      </SubmitButton>
    </Form>
  );
};

export default CollectionForm;
