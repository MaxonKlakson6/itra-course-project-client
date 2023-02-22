import { Tooltip } from '@mui/material';
import BlockIcon from '@mui/icons-material/Block';

import { Tag } from 'src/pages/Profile/components/ItemForm/styles';
import OptionalField from 'src/pages/Collection/components/OptionalField';
import { Item as ItemType } from 'src/types/Item';
import { Collection } from 'src/types/collection';
import {
  ContentBlock,
  ItemRow,
  RowName,
} from 'src/pages/Item/components/Item/styles';

interface ItemProps {
  item: ItemType;
  collection: Collection;
}

const Item = ({ item, collection }: ItemProps) => (
  <ContentBlock>
    <ItemRow>
      <RowName>Title:</RowName>
      {item.title}
    </ItemRow>
    <ItemRow>
      <RowName>Tags:</RowName>
      {item.tags.map((tag) => (
        <Tag color='success' key={tag} label={tag} />
      ))}
    </ItemRow>
    {collection.optionalFields.map((collectionOptionalField) => {
      const optionalFieldToDisplay = item.optionalFields.find(
        (optionalField) => optionalField.id === collectionOptionalField.id
      );

      if (optionalFieldToDisplay) {
        return (
          <ItemRow key={collectionOptionalField.id}>
            <RowName>{optionalFieldToDisplay.label}:</RowName>
            <OptionalField
              type={optionalFieldToDisplay.type}
              value={optionalFieldToDisplay.value}
            />
          </ItemRow>
        );
      }

      return (
        <ItemRow key={collectionOptionalField.id}>
          <RowName>{collectionOptionalField.label}:</RowName>
          <Tooltip title='No value'>
            <BlockIcon />
          </Tooltip>
        </ItemRow>
      );
    })}
  </ContentBlock>
);

export default Item;
