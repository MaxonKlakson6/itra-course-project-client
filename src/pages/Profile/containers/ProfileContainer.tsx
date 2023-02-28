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
import ErrorHandler from 'src/components/ErrorHandler';

const ProfileContainer = () => {
  const { ownerId } = useParams();
  const { userData } = useAppSelector(authSelector);
  const dispatch = useAppDispatch();

  const {
    data: user,
    isLoading,
    isError: isUserError,
    error: userError = '',
  } = useGetUserQuery(Number(ownerId));
  const {
    data = [],
    isError: isCollectionsError,
    error: collectionsError = '',
  } = useGetUserCollectionsQuery(Number(ownerId));
  const [
    deleteCollection,
    { data: deleteMessage, error: deleteCollectionError },
  ] = useDeleteCollectionMutation();

  useAlertMessages(deleteCollectionError as string, deleteMessage as string);

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
    <ErrorHandler
      isError={isUserError || isCollectionsError}
      errorMessage={`${userError} ${collectionsError}`}
    >
      <ProfileLayout
        userId={Number(ownerId)}
        isReadOnly={
          Number(ownerId) !== userData.id && userData.role !== 'ADMIN'
        }
        userName={user?.name as string}
        collections={data}
        handleDeleteCollection={handleDeleteCollection}
      />
    </ErrorHandler>
  );
};

export default ProfileContainer;
