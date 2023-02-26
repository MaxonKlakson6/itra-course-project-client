import { useParams } from 'react-router';

import { useGetCollectionQuery } from 'src/api/collectionApi';
import { useDeleteItemMutation, useGetItemQuery } from 'src/api/itemApi';
import ItemLayout from 'src/pages/Item/components/ItemLayout';
import { Collection } from 'src/types/collection';
import { Item } from 'src/types/Item';
import { useAlertMessages } from 'src/hooks/useAlertMessages';
import { useAppSelector } from 'src/hooks/reduxHooks';
import { authSelector } from 'src/store/selectors/authSelector';

const ItemContainer = () => {
  const { userData } = useAppSelector(authSelector);
  const { collectionId, itemId } = useParams();

  const { data: collection, isLoading: isLoadingCollection } =
    useGetCollectionQuery(Number(collectionId));
  const { data: item, isLoading: isLoadingItem } = useGetItemQuery(
    Number(itemId)
  );
  const [deleteItem, { data: deleteMessage, error: deleteError }] =
    useDeleteItemMutation();

  useAlertMessages(deleteError as string, deleteMessage as string);

  const handleDeleteItem = () => {
    deleteItem(String(itemId));
  };

  if (isLoadingCollection || isLoadingItem) {
    return <h1>Loading...</h1>;
  }

  return (
    <ItemLayout
      isReadOnly={collection?.UserId !== userData.id}
      collection={collection as Collection}
      item={item as Item}
      handleDeleteItem={handleDeleteItem}
    />
  );
};

export default ItemContainer;
