import { ChangeEvent, FocusEvent, FormEvent } from 'react';
import { SelectChangeEvent } from '@mui/material';
import { FormikErrors, FormikTouched } from 'formik';

import { OptionalFieldTypes } from 'src/types/optionalFieldTypes';
import { CollectionForm } from 'src/pages/Profile/types/collectionForm';
import { OptionalField } from 'src/types/collection';

export interface MutateFormProps {
  values: CollectionForm;
  errors: FormikErrors<CollectionForm>;
  touched: FormikTouched<CollectionForm>;
  optionalFields: OptionalField[];
  handleBlur: (event: FocusEvent) => void;
  handleChange: (event: ChangeEvent | SelectChangeEvent) => void;
  createNewField: (fieldType: OptionalFieldTypes) => void;
  handleChangeOptionalField: (event: ChangeEvent<HTMLInputElement>) => void;
  deleteOptionalField: (index: number) => void;
  handleCreateCollection: (event: FormEvent<HTMLFormElement>) => void;
  handleChangeImageUrl: (url: File) => void;
}
