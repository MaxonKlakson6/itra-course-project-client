import { Link } from 'react-router-dom';

import { Collection } from 'src/types/collection';
import { Item as ItemType } from 'src/types/Item';
import { Wrapper } from 'src/pages/Item/components/ItemLayout/styles';
import { CreateButton, Heading } from 'src/static/styles/profileStyles';
import { ROUTES_WITH_ID } from 'src/router/routeNames';
import Item from 'src/pages/Item/components/Item';
import Social from 'src/pages/Item/components/Social';

interface ItemLayoutProps {
  isReadOnly: boolean;
  collection: Collection;
  item: ItemType;
  handleDeleteItem: () => void;
}

const ItemLayout = ({
  isReadOnly,
  item,
  collection,
  handleDeleteItem,
}: ItemLayoutProps) => (
  <Wrapper>
    {!isReadOnly && (
      <Heading>
        <CreateButton>
          <Link
            to={`${ROUTES_WITH_ID.CHANGE_ITEM}/${collection.id}/${item.id}`}
          >
            Update item
          </Link>
        </CreateButton>
        <CreateButton
          sx={{ color: '#fff', marginLeft: '10px' }}
          onClick={handleDeleteItem}
        >
          Delete
        </CreateButton>
      </Heading>
    )}
    <Item item={item} collection={collection} />
    <Social itemId={item.id} comments={item.comments} likes={item.likes} />
  </Wrapper>
);

export default ItemLayout;
