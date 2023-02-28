import { Collection } from 'src/types/collection';

export type CollectionRequest = Omit<Collection, 'ownerName' | 'id' | 'UserId'>;

export interface CreateCollectionRequest {
  userId: number;
}

export interface ChangeCollectionRequest {
  id: number;
  body: CollectionRequest;
}
