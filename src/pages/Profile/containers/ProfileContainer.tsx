import ProfileLayout from 'src/pages/Profile/components/ProfileLayout';
import { useAppSelector } from 'src/hooks/reduxHooks';
import { authSelector } from 'src/store/selectors/authSelector';
import {
  useDeleteCollectionMutation,
  useGetUserCollectionsQuery,
} from 'src/api/collectionApi';
import { useAlertMessages } from 'src/hooks/useAlertMessages';

const ProfileContainer = () => {
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
      userName={userData.name}
      collections={data}
      handleDeleteCollection={handleDeleteCollection}
    />
  );
};

export default ProfileContainer;
