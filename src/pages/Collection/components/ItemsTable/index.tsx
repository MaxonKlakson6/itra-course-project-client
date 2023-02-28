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
} from 'src/pages/Collection/components/ItemsTable/styles';
import { ROUTES_WITH_ID } from 'src/router/routeNames';

interface ItemTableProps {
  items: Item[];
  collection: Collection;
}

const ItemsTable = ({ items, collection }: ItemTableProps) => (
  <Paper sx={{ overflow: 'hidden', margin: '0 auto' }}>
    <TableContainer sx={{ maxHeight: '500px' }}>
      <Table stickyHeader>
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
                <Link to={`${ROUTES_WITH_ID.ITEM}/${collection.id}/${item.id}`}>
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

export default ItemsTable;
