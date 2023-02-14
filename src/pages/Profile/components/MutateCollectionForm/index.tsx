import { FormControl } from '@mui/material';

import {
  AddFieldButton,
  CreateCollectionButton,
  DescriptionField,
  Form,
  ImageLoader,
} from 'src/pages/Profile/components/MutateCollectionForm/styles';
import { OptionalFieldTypes } from 'src/types/optionalFieldTypes';
import OptionalField from 'src/pages/Profile/components/OptionalField';
import { ErrorText } from 'src/components/InputWithError/styles';
import InputWithError from 'src/components/InputWithError';
import Select from 'src/components/Select';
import { MutateFormProps as FormProps } from 'src/pages/Profile/types/createCollectionProps';
import { optionalFieldsTypes } from 'src/constants/optionalFieldsTypes';
import { subjects } from 'src/constants/subjects';

interface CreateFormProps extends FormProps {
  image: string;
  handleImageChange: (newImage: string) => void;
}

const MutateForm = ({
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
}: CreateFormProps): JSX.Element => {
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
        placeholder='Collection title'
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
        label='Subject'
        value={values.subject}
        name='subject'
        handleChange={handleChange}
      />
      <FormControl>
        <DescriptionField
          rows={5}
          placeholder='Description'
          value={values.description}
          name='description'
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <ErrorText>{touched.description && errors.description}</ErrorText>
      </FormControl>
      {optionalFields.map((optionalField, index) => (
        <OptionalField
          key={optionalField.id}
          id={optionalField.id}
          index={index}
          label={optionalField.label}
          handleChange={handleChangeOptionalField}
          deleteOptionalField={deleteOptionalField}
        />
      ))}
      <AddFieldButton
        id='collection-type'
        menuItems={optionalFieldsTypes}
        saveValue={saveType}
      >
        Add field
      </AddFieldButton>
      <CreateCollectionButton type='submit' variant='contained'>
        Submit
      </CreateCollectionButton>
    </Form>
  );
};

export default MutateForm;
