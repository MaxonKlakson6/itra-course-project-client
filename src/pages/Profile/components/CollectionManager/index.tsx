import SettingsIcon from '@mui/icons-material/Settings';
import DeleteIcon from '@mui/icons-material/Delete';
import { Tooltip } from '@mui/material';
import { useTranslation } from 'react-i18next';

import CollectionCard from 'src/components/CollectionCard';
import {
  DeleteButton,
  UpdateButton,
  Wrapper,
} from 'src/pages/Profile/components/CollectionManager/styles';
import { ROUTES_WITH_ID } from 'src/router/routeNames';

interface CollectionManagerProps {
  image: string;
  title: string;
  subject: string;
  description: string;
  collectionId: number;
  handleDeleteCollection: (id: number) => void;
}

const CollectionManager = ({
  image,
  title,
  subject,
  description,
  collectionId,
  handleDeleteCollection,
}: CollectionManagerProps) => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Tooltip title={t('profile.updateCollection')} placement='right-start'>
        <UpdateButton
          to={`${ROUTES_WITH_ID.CHANGE_COLLECTION}/${collectionId}`}
        >
          <SettingsIcon />
        </UpdateButton>
      </Tooltip>
      <Tooltip title={t('profile.deleteCollection')} placement='right-start'>
        <DeleteButton onClick={() => handleDeleteCollection(collectionId)}>
          <DeleteIcon />
        </DeleteButton>
      </Tooltip>
      <CollectionCard
        collectionId={collectionId}
        image={image}
        title={title}
        subject={subject}
        description={description}
      />
    </Wrapper>
  );
};

export default CollectionManager;
