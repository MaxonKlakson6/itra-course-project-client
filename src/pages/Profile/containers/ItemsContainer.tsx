import { useParams } from 'react-router';

import { useGetCollectionQuery } from 'src/api/collectionApi';
import ItemsLayout from 'src/pages/Collection/components/ItemsLayout';
import { useGetAllCollectionItemsQuery } from 'src/api/itemApi';
import { Collection } from 'src/types/collection';

const ItemsContainer = () => {
  const { collectionId } = useParams();

  const { data: collection, isLoading: isLoadingCollection } =
    useGetCollectionQuery(Number(collectionId));
  const { data: items = [], isLoading: isLoadingItems } =
    useGetAllCollectionItemsQuery(Number(collectionId));

  if (isLoadingCollection || isLoadingItems) {
    return <h1>Loading...</h1>;
  }

  return (
    <ItemsLayout
      collectionId={Number(collectionId)}
      collection={collection as Collection}
      items={items}
    />
  );
};

export default ItemsContainer;
