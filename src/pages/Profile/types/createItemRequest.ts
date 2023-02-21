import { OptionalField } from 'src/types/collection';

export interface CreateItemRequest {
  collectionId: string;
  title: string;
  tags: string[];
  optionalFields: OptionalField[];
}
