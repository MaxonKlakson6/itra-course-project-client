import { OptionalFieldTypes } from 'src/types/optionalFieldTypes';

export const createOptionalFieldValue = (type: OptionalFieldTypes) => {
  if (type === 'number') return '0';
  if (type === 'boolean') return false;
  return '';
};
