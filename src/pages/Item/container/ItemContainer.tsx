import { useParams } from 'react-router';

import { useGetCollectionQuery } from 'src/api/collectionApi';
import { useDeleteItemMutation, useGetItemQuery } from 'src/api/itemApi';
import ItemLayout from 'src/pages/Item/components/ItemLayout';
import { Collection } from 'src/types/collection';
import { Item } from 'src/types/Item';
import { useAlertMessages } from 'src/hooks/useAlertMessages';
import { useAppSelector } from 'src/hooks/reduxHooks';
import { authSelector } from 'src/store/selectors/authSelector';
import { readOnlyModeSelector } from 'src/store/selectors/readOnlyModeSelector';
import Loader from 'src/components/Loader';

const ItemContainer = () => {
  const { collectionId, itemId } = useParams();
  const { userData } = useAppSelector(authSelector);
  const isReadOnly = useAppSelector(readOnlyModeSelector);

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
    return <Loader />;
  }

  return (
    <ItemLayout
      isReadOnly={
        isReadOnly ||
        (collection?.UserId !== userData.id && userData.role !== 'ADMIN')
      }
      collection={collection as Collection}
      item={item as Item}
      handleDeleteItem={handleDeleteItem}
    />
  );
};

export default ItemContainer;
