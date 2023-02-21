import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
} from '@mui/material';
import { Link } from 'react-router-dom';
import BlockIcon from '@mui/icons-material/Block';

import { Item } from 'src/types/Item';
import { Collection } from 'src/types/collection';
import OptionalField from 'src/pages/Collection/components/OptionalField';
import {
  Cell,
  HeadingCell,
} from 'src/pages/Collection/components/ItemTable/styles';

interface ItemTableProps {
  items: Item[];
  collection: Collection;
}

const ItemTable = ({ items, collection }: ItemTableProps) => (
  <Paper sx={{ overflow: 'hidden', width: '1100px', margin: '0 auto' }}>
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <HeadingCell>Title</HeadingCell>
            {collection.optionalFields.map((optionalField) => (
              <HeadingCell key={`Heading-${optionalField.id}`}>
                {optionalField.label}
              </HeadingCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.id}>
              <Cell>
                <Link to={`/item/${collection.id}/${item.id}`}>
                  {item.title}
                </Link>
              </Cell>
              {collection.optionalFields.map((collectionOptionalField) => {
                const optionalFieldToDisplay = item.optionalFields.find(
                  (optionalField) =>
                    optionalField.id === collectionOptionalField.id
                );

                if (optionalFieldToDisplay) {
                  return (
                    <Cell key={`Body-${item.id}-${collectionOptionalField.id}`}>
                      <OptionalField
                        type={optionalFieldToDisplay.type}
                        value={optionalFieldToDisplay.value}
                      />
                    </Cell>
                  );
                }

                return (
                  <Cell key={`Body-${item.id}-${collectionOptionalField.id}`}>
                    <Tooltip title='No value'>
                      <BlockIcon />
                    </Tooltip>
                  </Cell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Paper>
);

export default ItemTable;