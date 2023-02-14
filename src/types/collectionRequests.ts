import { Collection } from 'src/types/collection';

export type CreateCollectionRequest = Omit<Collection, 'ownerName' | 'id'>;

export interface ChangeCollectionRequest {
  id: number;
  body: CreateCollectionRequest;
}
