import { OptionalFieldTypes } from 'src/types/optionalFieldTypes';

export interface OptionalField {
  type: OptionalFieldTypes;
  label: string;

  id: string;
  value: string | number | boolean;
}

export interface Collection {
  UserId: number;
  id: number;
  ownerName: string;
  title: string;
  subject: string;
  description: string;
  image: string;
  optionalFields: OptionalField[];
}
