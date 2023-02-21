import { ChangeEvent, FocusEvent } from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import { FormikErrors, FormikTouched } from 'formik';

import InputWithError from 'src/components/InputWithError';
import InputWithHints from 'src/components/InputWithHints';
import { OptionalField } from 'src/types/collection';
import {
  AddTagButton,
  CreateItemButton,
  Form,
  Tag,
  TagsHolder,
} from 'src/pages/Profile/components/MutateItemForm/styles';
import ItemOptionalFieldInput from 'src/pages/Profile/components/ItemOptionFieldInput';
import { ItemForm } from 'src/pages/Profile/types/ItemForm';

interface MutateItemFormProps {
  tags: string[];
  itemTags: string[];
  values: ItemForm;
  errors: FormikErrors<ItemForm>;
  touched: FormikTouched<ItemForm>;
  handleBlur: (event: FocusEvent) => void;
  optionalFields: OptionalField[];
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  updateTagByOption: (newValue: string) => void;
  handleAddTag: () => void;
  handleDeleteTag: (tagToDelete: string) => void;
  handleChangeOptionalField: (name: string, newValue: string | boolean) => void;
  handleSubmit: () => void;
}

const MutateItemForm = ({
  tags,
  itemTags,
  optionalFields,
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
  updateTagByOption,
  handleAddTag,
  handleDeleteTag,
  handleChangeOptionalField,
  handleSubmit,
}: MutateItemFormProps) => (
  <div>
    <Form onSubmit={handleSubmit}>
      <InputWithError
        placeholder='title'
        inputType='text'
        inputValue={values.title}
        name='title'
        errorText={errors.title}
        isTouched={touched.title}
        onChange={handleChange}
        handleBlur={handleBlur}
      />
      <TagsHolder>
        {itemTags.map((tag) => (
          <Tag
            key={tag}
            label={tag}
            color='success'
            onDelete={() => handleDeleteTag(tag)}
            deleteIcon={<ClearIcon />}
          />
        ))}
      </TagsHolder>
      <InputWithHints
        id='tags-input'
        name='tag'
        label='Tag'
        value={values.tag}
        hints={tags}
        handleChange={handleChange}
        updateValueByOption={updateTagByOption}
      />
      <AddTagButton variant='contained' type='button' onClick={handleAddTag}>
        Add tag
      </AddTagButton>
      {optionalFields.map((optionalField) => (
        <ItemOptionalFieldInput
          key={optionalField.id}
          optionalField={optionalField}
          handleChangeField={handleChangeOptionalField}
        />
      ))}
      <CreateItemButton type='submit'>Submit</CreateItemButton>
    </Form>
  </div>
);

export default MutateItemForm;
