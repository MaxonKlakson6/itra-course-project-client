import ItemForm from 'src/pages/Profile/components/ItemForm';
import {
  CloseButton,
  Heading,
  Title,
  Wrapper,
} from 'src/static/styles/formStyles';
import { ItemFormProps } from 'src/pages/Profile/types/itemFormProps';

interface ItemFormLayoutProps extends ItemFormProps {
  title: string;
}

const ItemFormLayout = ({
  title,
  tags,
  itemTags,
  values,
  errors,
  touched,
  optionalFields,
  handleChange,
  handleBlur,
  updateTagByOption,
  handleAddTag,
  handleDeleteTag,
  handleChangeOptionalField,
  handleSubmit,
}: ItemFormLayoutProps) => (
  <Wrapper>
    <Heading>
      <Title>{title}</Title>
      <CloseButton />
    </Heading>
    <ItemForm
      tags={tags}
      itemTags={itemTags}
      optionalFields={optionalFields}
      values={values}
      errors={errors}
      touched={touched}
      handleBlur={handleBlur}
      handleChange={handleChange}
      updateTagByOption={updateTagByOption}
      handleAddTag={handleAddTag}
      handleDeleteTag={handleDeleteTag}
      handleChangeOptionalField={handleChangeOptionalField}
      handleSubmit={handleSubmit}
    />
  </Wrapper>
);

export default ItemFormLayout;
