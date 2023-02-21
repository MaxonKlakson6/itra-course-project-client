import { ChangeEvent, FocusEvent } from 'react';
import CancelIcon from '@mui/icons-material/Cancel';
import { FormikErrors, FormikTouched } from 'formik';

import MutateItemForm from 'src/pages/Profile/components/MutateItemForm';
import { OptionalField } from 'src/types/collection';
import {
  CloseButton,
  Title,
  Wrapper,
} from 'src/pages/Profile/components/MutateCollectionLayout/styles';
import { ItemForm } from 'src/pages/Profile/types/ItemForm';

interface MutateItemLayoutProps {
  collectionId: string;
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

const MutateItemLayout = ({
  collectionId,
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
}: MutateItemLayoutProps) => (
  <Wrapper>
    <div>
      <Title>Create Item</Title>
      <CloseButton to={`/profile-items/${collectionId}`}>
        <CancelIcon />
      </CloseButton>
    </div>
    <MutateItemForm
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

export default MutateItemLayout;
