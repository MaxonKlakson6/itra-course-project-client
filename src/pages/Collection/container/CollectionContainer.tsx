import { useParams } from 'react-router';

import { useGetCollectionQuery } from 'src/api/collectionApi';
import CollectionLayout from 'src/pages/Collection/components/CollectionLayout';
import { useGetAllCollectionItemsQuery } from 'src/api/itemApi';
import { Collection } from 'src/types/collection';
import { useAppSelector } from 'src/hooks/reduxHooks';
import { authSelector } from 'src/store/selectors/authSelector';
import { readOnlyModeSelector } from 'src/store/selectors/readOnlyModeSelector';
import Loader from 'src/components/Loader';

const CollectionContainer = () => {
  const { id } = useParams();
  const { userData } = useAppSelector(authSelector);
  const isReadOnly = useAppSelector(readOnlyModeSelector);

  const { data: collection, isLoading: isLoadingCollection } =
    useGetCollectionQuery(Number(id));
  const { data: items = [], isLoading: isLoadingItems } =
    useGetAllCollectionItemsQuery(Number(id));

  if (isLoadingCollection || isLoadingItems) {
    return <Loader />;
  }

  return (
    <CollectionLayout
      isReadOnly={
        isReadOnly ||
        (collection?.UserId !== userData.id && userData.role !== 'ADMIN')
      }
      collectionId={Number(id)}
      collection={collection as Collection}
      items={[...items]}
    />
  );
};

export default CollectionContainer;
