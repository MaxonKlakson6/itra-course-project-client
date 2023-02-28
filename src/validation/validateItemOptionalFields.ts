import { OptionalField } from 'src/types/collection';

export const validateItemOptionalFields = (optionalFields: OptionalField[]) =>
  optionalFields.every((optionalField) => {
    switch (optionalField.type) {
      case 'date': {
        if (!optionalField.value || optionalField.value === 'Invalid Date') {
          return false;
        }
        return true;
      }
      case 'boolean': {
        return true;
      }
      default: {
        return !!optionalField.value;
      }
    }
  });
