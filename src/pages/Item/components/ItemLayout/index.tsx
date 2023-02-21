import { Tooltip } from '@mui/material';
import BlockIcon from '@mui/icons-material/Block';
import { Link } from 'react-router-dom';

import { Collection } from 'src/types/collection';
import { Item } from 'src/types/Item';
import { Tag } from 'src/pages/Profile/components/ItemForm/styles';
import OptionalField from 'src/pages/Collection/components/OptionalField';
import {
  ContentBlock,
  ItemRow,
  Wrapper,
} from 'src/pages/Item/components/ItemLayout/styles';
import { CreateButton, Heading } from 'src/static/styles/profileStyles';
import { ROUTES_WITH_ID } from 'src/router/routeNames';

interface ItemLayoutProps {
  collection: Collection;
  item: Item;
}

const ItemLayout = ({ item, collection }: ItemLayoutProps) => (
  <Wrapper>
    <Heading>
      <CreateButton>
        <Link to={`/${ROUTES_WITH_ID.CHANGE_ITEM}/${collection.id}/${item.id}`}>
          Update item
        </Link>
      </CreateButton>
    </Heading>
    <ContentBlock>
      <ItemRow>
        <p>Title:</p>
        {item.title}
      </ItemRow>
      <ItemRow>
        Tags:{' '}
        {item.tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </ItemRow>
      {collection.optionalFields.map((collectionOptionalField) => {
        const optionalFieldToDisplay = item.optionalFields.find(
          (optionalField) => optionalField.id === collectionOptionalField.id
        );

        if (optionalFieldToDisplay) {
          return (
            <ItemRow key={collectionOptionalField.id}>
              {optionalFieldToDisplay.label}:{' '}
              <OptionalField
                type={optionalFieldToDisplay.type}
                value={optionalFieldToDisplay.value}
              />
            </ItemRow>
          );
        }

        return (
          <ItemRow key={collectionOptionalField.id}>
            {collectionOptionalField.label}:{' '}
            <Tooltip title='No value'>
              <BlockIcon />
            </Tooltip>
          </ItemRow>
        );
      })}
    </ContentBlock>
  </Wrapper>
);

export default ItemLayout;
