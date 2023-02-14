import { useEffect } from 'react';

import ProfileLayout from 'src/pages/Profile/components/ProfileLayout';
import { useAppSelector } from 'src/hooks/reduxHooks';
import { authSelector } from 'src/store/selectors/authSelector';
import {
  useDeleteCollectionMutation,
  useGetUserCollectionsQuery,
} from 'src/api/collectionApi';
import SnackBar from 'src/components/SnackBar';
import { createPosition } from 'src/helpers/createPosition';

const ProfileContainer = () => {
  const { userData } = useAppSelector(authSelector);

  const { data = [] } = useGetUserCollectionsQuery(userData.id);
  const [deleteCollection, { data: deleteMessage, error, isSuccess, isError }] =
    useDeleteCollectionMutation();

  const handleDeleteCollection = (id: number) => {
    deleteCollection(id);
  };

  return (
    <>
      <ProfileLayout
        userName={userData.name}
        collections={data}
        handleDeleteCollection={handleDeleteCollection}
      />
      {isSuccess && (
        <SnackBar
          message={deleteMessage as string}
          severity='success'
          duration={2000}
          position={createPosition('top', 'center')}
        />
      )}
      {isError && (
        <SnackBar
          message={error as string}
          severity='error'
          duration={2000}
          position={createPosition('top', 'center')}
        />
      )}
    </>
  );
};

export default ProfileContainer;
