import { OptionalField } from 'src/types/collection';

export interface ItemMutationType {
  collectionId: string;
  title: string;
  tags: string[];
  optionalFields: OptionalField[];
}
