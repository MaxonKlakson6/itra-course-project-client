import { OptionalField } from 'src/types/collection';

export interface UpdateItemRequest {
  id: string;
  title: string;
  tags: string[];
  optionalFields: OptionalField[];
}
