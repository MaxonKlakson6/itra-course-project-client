import { OptionalField } from 'src/types/collection';

export const validateCollectionOptionalFields = (
  optionalFields: OptionalField[]
): boolean =>
  optionalFields.every(
    (optionalField) => optionalField.label && optionalField.type
  );
