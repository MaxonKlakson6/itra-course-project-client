import { OptionalField } from 'src/types/collection';

export interface Item {
  id: number;
  title: string;
  tags: string[];
  optionalFields: OptionalField[];
}
