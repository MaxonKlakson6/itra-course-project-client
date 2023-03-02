import ClearIcon from '@mui/icons-material/Clear';
import { useTranslation } from 'react-i18next';

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
}: ItemFormProps) => {
  const { t } = useTranslation();

  return (
    <Form onSubmit={handleSubmit}>
      <InputWithError
        placeholder={t('itemForm.titlePlaceholder')}
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
        label={t('itemForm.tagLabel')}
        value={values.tag}
        hints={tags}
        handleChange={handleChange}
        updateValueByOption={updateTagByOption}
      />
      <AddTagButton variant='contained' type='button' onClick={handleAddTag}>
        {t('itemForm.addTag')}
      </AddTagButton>
      {optionalFields.map((optionalField) => (
        <ItemOptionalFieldInput
          key={optionalField.id}
          optionalField={optionalField}
          handleChangeField={handleChangeOptionalField}
        />
      ))}
      <SubmitButton type='submit'>{t('submit')}</SubmitButton>
    </Form>
  );
};

export default ItemForm;
