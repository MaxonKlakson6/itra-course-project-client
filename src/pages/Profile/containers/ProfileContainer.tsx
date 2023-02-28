import { useParams } from 'react-router';
import { useEffect } from 'react';

import ProfileLayout from 'src/pages/Profile/components/ProfileLayout';
import { useAppDispatch, useAppSelector } from 'src/hooks/reduxHooks';
import { authSelector } from 'src/store/selectors/authSelector';
import {
  useDeleteCollectionMutation,
  useGetUserCollectionsQuery,
} from 'src/api/collectionApi';
import { useAlertMessages } from 'src/hooks/useAlertMessages';
import { useGetUserQuery } from 'src/api/userApi';
import { changeMode } from 'src/store/reducers/interactionModeSlice';
import Loader from 'src/components/Loader';

const ProfileContainer = () => {
  const { ownerId } = useParams();
  const { userData } = useAppSelector(authSelector);
  const dispatch = useAppDispatch();

  const { data: user, isLoading } = useGetUserQuery(Number(ownerId));
  const { data = [] } = useGetUserCollectionsQuery(Number(ownerId));
  const [deleteCollection, { data: deleteMessage, error }] =
    useDeleteCollectionMutation();

  useAlertMessages(error as string, deleteMessage as string);

  const handleDeleteCollection = (id: number) => {
    deleteCollection(id);
  };

  useEffect(() => {
    dispatch(changeMode(false));
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <ProfileLayout
      userId={Number(ownerId)}
      isReadOnly={Number(ownerId) !== userData.id && userData.role !== 'ADMIN'}
      userName={user?.name as string}
      collections={data}
      handleDeleteCollection={handleDeleteCollection}
    />
  );
};

export default ProfileContainer;
