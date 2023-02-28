import { Link } from 'react-router-dom';
import { ChangeEvent, FormEvent } from 'react';
import { TagCloud } from 'react-tagcloud';

import { Collection } from 'src/types/collection';
import { Item } from 'src/types/Item';
import CollectionCard from 'src/components/CollectionCard';
import { CollectionsHolder } from 'src/static/styles/profileStyles';
import { SearchResponse } from 'src/pages/Main/types/searchResponse';
import SearchForm from 'src/pages/Main/components/SearchForm';
import {
  Cloud,
  ItemLink,
  ItemsHolder,
  SearchLinksHolder,
  Wrapper,
} from 'src/pages/Main/components/MainLayout/styles';
import { Title } from 'src/static/styles/formStyles';

interface MainLayoutProps {
  tags: string[];
  searchText: string;
  searchedItems: SearchResponse[];
  collections: Collection[];
  items: Item[];
  handleSearchTextChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSearch: (event: FormEvent) => void;
  handleSelectTag: (tag: { value: string; count: number }) => void;
}

const MainLayout = ({
  tags,
  searchText,
  searchedItems,
  collections,
  items,
  handleSearchTextChange,
  handleSearch,
  handleSelectTag,
}: MainLayoutProps) => (
  <Wrapper>
    <SearchForm
      searchText={searchText}
      handleSearchTextChange={handleSearchTextChange}
      handleSubmit={handleSearch}
    />
    <SearchLinksHolder>
      {searchedItems.map((searchedItem) => (
        <ItemLink
          key={`Search-${searchedItem.id}`}
          to={`/item/${searchedItem.CollectionId}/${searchedItem.id}`}
          style={{ marginRight: '20px' }}
        >
          {searchedItem.title}
        </ItemLink>
      ))}
    </SearchLinksHolder>
    <Cloud
      tags={tags.map((tag) => ({
        value: tag,
        count: 10,
      }))}
      maxSize={35}
      minSize={10}
      onClick={handleSelectTag}
    />
    <div>
      <Title>Biggest collections</Title>
      <CollectionsHolder>
        {collections.map((collection) => (
          <CollectionCard
            key={`Collection-${collection.id}`}
            collectionId={collection.id}
            image={collection.image}
            title={collection.title}
            subject={collection.subject}
            description={collection.description}
          />
        ))}
      </CollectionsHolder>
    </div>
    <div>
      <Title>Recent created items</Title>
      <ItemsHolder>
        {items.map((item) => (
          <ItemLink
            key={`Item-${item.id}`}
            to={`/item/${item.CollectionId}/${item.id}`}
            style={{ marginRight: '20px' }}
          >
            {item.title}
          </ItemLink>
        ))}
      </ItemsHolder>
    </div>
  </Wrapper>
);

export default MainLayout;