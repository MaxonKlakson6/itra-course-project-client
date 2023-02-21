import { FormikErrors, FormikTouched } from 'formik';
import { ChangeEvent, FocusEvent } from 'react';

import { ItemFormValues } from 'src/pages/Profile/types/itemFormValues';
import { OptionalField } from 'src/types/collection';

export interface ItemFormProps {
  tags: string[];
  itemTags: string[];
  values: ItemFormValues;
  errors: FormikErrors<ItemFormValues>;
  touched: FormikTouched<ItemFormValues>;
  handleBlur: (event: FocusEvent) => void;
  optionalFields: OptionalField[];
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  updateTagByOption: (newValue: string) => void;
  handleAddTag: () => void;
  handleDeleteTag: (tagToDelete: string) => void;
  handleChangeOptionalField: (name: string, newValue: string | boolean) => void;
  handleSubmit: () => void;
}
