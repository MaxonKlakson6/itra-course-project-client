import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { CreateButton, Heading } from 'src/static/styles/profileStyles';
import { Item } from 'src/types/Item';
import { ContentBlock } from 'src/pages/Collection/components/CollectionLayout/styles';
import ItemsTable from 'src/pages/Collection/components/ItemsTable';
import { Collection } from 'src/types/collection';
import { ROUTES_WITH_ID } from 'src/router/routeNames';

interface ItemsLayoutProps {
  isReadOnly: boolean;
  collectionId: number;
  collection: Collection;
  items: Item[];
}

const CollectionLayout = ({
  isReadOnly,
  collectionId,
  items,
  collection,
}: ItemsLayoutProps) => {
  const { t } = useTranslation();
  return (
    <div>
      <Heading>
        {!isReadOnly && (
          <CreateButton>
            <Link to={`${ROUTES_WITH_ID.CREATE_ITEM}/${collectionId}`}>
              {t('collection.createItem')}
            </Link>
          </CreateButton>
        )}
      </Heading>
      <ContentBlock>
        {items.length === 0 ? (
          t('collection.noItems')
        ) : (
          <ItemsTable items={items} collection={collection} />
        )}
      </ContentBlock>
    </div>
  );
};

export default CollectionLayout;
