import { Link } from 'react-router-dom';

import { Collection } from 'src/types/collection';
import { Item as ItemType } from 'src/types/Item';
import { Wrapper } from 'src/pages/Item/components/ItemLayout/styles';
import { CreateButton, Heading } from 'src/static/styles/profileStyles';
import { ROUTES_WITH_ID } from 'src/router/routeNames';
import Item from 'src/pages/Item/components/Item';
import Social from 'src/pages/Item/components/Social';

interface ItemLayoutProps {
  collection: Collection;
  item: ItemType;
}

const ItemLayout = ({ item, collection }: ItemLayoutProps) => (
  <Wrapper>
    <Heading>
      <CreateButton>
        <Link to={`${ROUTES_WITH_ID.CHANGE_ITEM}/${collection.id}/${item.id}`}>
          Update item
        </Link>
      </CreateButton>
    </Heading>
    <Item item={item} collection={collection} />
    <Social />
  </Wrapper>
);

export default ItemLayout;
