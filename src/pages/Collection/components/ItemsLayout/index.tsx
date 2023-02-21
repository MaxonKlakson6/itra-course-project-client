import { Link } from 'react-router-dom';

import {
  CreateButton,
  Heading,
} from 'src/pages/Profile/components/ProfileLayout/styles';
import { Item } from 'src/types/Item';
import { ContentBlock } from 'src/pages/Collection/components/ItemsLayout/styles';
import ItemTable from 'src/pages/Collection/components/ItemTable';
import { Collection } from 'src/types/collection';

interface ItemsLayoutProps {
  collectionId: number;
  collection: Collection;
  items: Item[];
}

const ItemsLayout = ({ collectionId, items, collection }: ItemsLayoutProps) => (
  <div>
    <Heading>
      <CreateButton>
        <Link to={`/create-item/${collectionId}`}>Create Item</Link>
      </CreateButton>
    </Heading>
    <ContentBlock>
      <ItemTable items={items} collection={collection} />
    </ContentBlock>
  </div>
);

export default ItemsLayout;
