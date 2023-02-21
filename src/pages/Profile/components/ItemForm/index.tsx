import ClearIcon from '@mui/icons-material/Clear';

import InputWithError from 'src/components/InputWithError';
import InputWithHints from 'src/components/InputWithHints';
import {
  AddTagButton,
  Tag,
  TagsHolder,
} from 'src/pages/Profile/components/ItemForm/styles';
import { Form, SubmitButton } from 'src/static/styles/formStyles';
import ItemOptionalFieldInput from 'src/pages/Profile/components/ItemOptionFieldInput';
import { ItemFormProps } from 'src/pages/Profile/types/itemFormProps';

const ItemForm = ({
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
}: ItemFormProps) => (
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
    <SubmitButton type='submit'>Submit</SubmitButton>
  </Form>
);

export default ItemForm;
