import { useParams } from 'react-router';

import { useGetCollectionQuery } from 'src/api/collectionApi';
import { useGetItemQuery } from 'src/api/itemApi';
import ItemLayout from 'src/pages/Item/components/ItemLayout';
import { Collection } from 'src/types/collection';
import { Item } from 'src/types/Item';

const ItemContainer = () => {
  const { collectionId, itemId } = useParams();

  const { data: collection, isLoading: isLoadingCollection } =
    useGetCollectionQuery(Number(collectionId));
  const { data: item, isLoading: isLoadingItem } = useGetItemQuery(
    Number(itemId)
  );

  if (isLoadingCollection || isLoadingItem) {
    return <h1>Loading...</h1>;
  }

  return (
    <ItemLayout collection={collection as Collection} item={item as Item} />
  );
};

export default ItemContainer;
