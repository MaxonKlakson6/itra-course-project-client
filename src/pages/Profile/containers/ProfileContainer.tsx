import { useParams } from 'react-router';

import ProfileLayout from 'src/pages/Profile/components/ProfileLayout';
import { useAppSelector } from 'src/hooks/reduxHooks';
import { authSelector } from 'src/store/selectors/authSelector';
import {
  useDeleteCollectionMutation,
  useGetUserCollectionsQuery,
} from 'src/api/collectionApi';
import { useAlertMessages } from 'src/hooks/useAlertMessages';

const ProfileContainer = () => {
  const { ownerId } = useParams();
  const { userData } = useAppSelector(authSelector);

  const { data = [] } = useGetUserCollectionsQuery(userData.id);
  const [deleteCollection, { data: deleteMessage, error }] =
    useDeleteCollectionMutation();

  useAlertMessages(error as string, deleteMessage as string);

  const handleDeleteCollection = (id: number) => {
    deleteCollection(id);
  };

  return (
    <ProfileLayout
      userId={Number(ownerId)}
      isReadOnly={Number(ownerId) !== userData.id}
      userName={userData.name}
      collections={data}
      handleDeleteCollection={handleDeleteCollection}
    />
  );
};

export default ProfileContainer;
