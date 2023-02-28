import { Link } from 'react-router-dom';

import {
  CollectionsHolder,
  CreateButton,
  Heading,
  NameTitle,
} from 'src/static/styles/profileStyles';
import CollectionManager from 'src/pages/Profile/components/CollectionManager';
import { ROUTES_WITH_ID } from 'src/router/routeNames';
import { Collection } from 'src/types/collection';
import CollectionCard from 'src/components/CollectionCard';

interface ProfileLayoutProps {
  userId: number;
  isReadOnly: boolean;
  userName: string;
  collections: Collection[];
  handleDeleteCollection: (id: number) => void;
}

const ProfileLayout = ({
  userId,
  isReadOnly,
  userName,
  collections,
  handleDeleteCollection,
}: ProfileLayoutProps): JSX.Element => (
  <>
    <Heading>
      <NameTitle>{userName}</NameTitle>
      {!isReadOnly && (
        <CreateButton variant='contained'>
          <Link to={`${ROUTES_WITH_ID.CREATE_COLLECTION}/${userId}`}>
            Create collection
          </Link>
        </CreateButton>
      )}
    </Heading>
    <CollectionsHolder>
      {collections.map((collection) =>
        isReadOnly ? (
          <CollectionCard
            key={collection.id}
            collectionId={collection.id}
            image={collection.image}
            title={collection.title}
            subject={collection.subject}
            description={collection.description}
          />
        ) : (
          <CollectionManager
            key={collection.id}
            image={collection.image}
            title={collection.title}
            subject={collection.subject}
            description={collection.description}
            collectionId={collection.id}
            handleDeleteCollection={handleDeleteCollection}
          />
        )
      )}
    </CollectionsHolder>
  </>
);

export default ProfileLayout;
