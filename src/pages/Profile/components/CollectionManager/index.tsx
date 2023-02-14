import SettingsIcon from '@mui/icons-material/Settings';
import DeleteIcon from '@mui/icons-material/Delete';
import { Tooltip } from '@mui/material';

import CollectionCard from 'src/components/CollectionCard';
import {
  DeleteButton,
  UpdateButton,
  Wrapper,
} from 'src/pages/Profile/components/CollectionManager/styles';

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
}: CollectionManagerProps) => (
  <Wrapper>
    <Tooltip title='Update collection' placement='right-start'>
      <UpdateButton to={`/change-collection/${collectionId}`}>
        <SettingsIcon />
      </UpdateButton>
    </Tooltip>
    <Tooltip title='Delete collection' placement='right-start'>
      <DeleteButton onClick={() => handleDeleteCollection(collectionId)}>
        <DeleteIcon />
      </DeleteButton>
    </Tooltip>
    <CollectionCard
      image={image}
      title={title}
      subject={subject}
      description={description}
    />
  </Wrapper>
);

export default CollectionManager;
