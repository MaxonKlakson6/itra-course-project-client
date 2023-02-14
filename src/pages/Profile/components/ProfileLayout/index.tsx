import { Link } from 'react-router-dom';

import {
  CollectionsHolder,
  CreateButton,
  Heading,
  NameTitle,
  Wrapper,
} from 'src/pages/Profile/components/ProfileLayout/styles';
import { Collection } from 'src/types/collection';
import CollectionManager from 'src/pages/Profile/components/CollectionManager';
import { ROUTE_NAMES } from 'src/router/routeNames';

interface ProfileLayoutProps {
  userName: string;
  collections: Collection[];
  handleDeleteCollection: (id: number) => void;
}

const ProfileLayout = ({
  userName,
  collections,
  handleDeleteCollection,
}: ProfileLayoutProps): JSX.Element => (
  <Wrapper>
    <Heading>
      <NameTitle>{userName}</NameTitle>
      <CreateButton variant='contained'>
        <Link to={ROUTE_NAMES.CREATE_COLLECTION}>Create collection</Link>
      </CreateButton>
    </Heading>
    <CollectionsHolder>
      {collections.map((collection) => (
        <CollectionManager
          key={collection.id}
          image={collection.image}
          title={collection.title}
          subject={collection.subject}
          description={collection.description}
          collectionId={collection.id}
          handleDeleteCollection={handleDeleteCollection}
        />
      ))}
    </CollectionsHolder>
  </Wrapper>
);

export default ProfileLayout;
