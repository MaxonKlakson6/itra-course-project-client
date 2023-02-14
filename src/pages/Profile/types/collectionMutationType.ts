import { CollectionForm } from 'src/pages/Profile/types/collectionForm';
import { OptionalField } from 'src/types/collection';

export interface CollectionMutationType {
  values: CollectionForm;
  optionalFields: OptionalField[];
  image: File | null;
}
