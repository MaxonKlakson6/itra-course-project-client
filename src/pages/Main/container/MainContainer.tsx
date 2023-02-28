import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

import MainLayout from 'src/pages/Main/components/MainLayout';
import { useGetBiggestQuery } from 'src/api/collectionApi';
import { useGetRecentQuery, useLazySearchQuery } from 'src/api/itemApi';
import { useGetTagsQuery } from 'src/api/tagsApi';
import { useAppDispatch } from 'src/hooks/reduxHooks';
import { changeMode } from 'src/store/reducers/interactionModeSlice';

const MainContainer = () => {
  const dispatch = useAppDispatch();
  const { data: collections = [], isLoading: isLoadingCollections } =
    useGetBiggestQuery();
  const { data: items = [], isLoading: isLoadingItems } = useGetRecentQuery();
  const { data: tags = [] } = useGetTagsQuery();
  const [search, { data: searchedItems = [] }] = useLazySearchQuery();

  const [searchText, setSearchText] = useState<string>('');

  const handleSearchTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleSearch = (event: FormEvent) => {
    event.preventDefault();
    if (searchText.length > 0) {
      search(searchText);
    }
  };

  const handleSelectTag = ({ value }: { value: string; count: number }) => {
    setSearchText(value);
    search(value);
  };

  useEffect(() => {
    dispatch(changeMode(true));
  }, []);

  if (isLoadingCollections || isLoadingItems) {
    return <h1>Loading...</h1>;
  }

  return (
    <MainLayout
      tags={tags}
      searchText={searchText}
      searchedItems={searchedItems}
      collections={collections}
      items={items}
      handleSearchTextChange={handleSearchTextChange}
      handleSearch={handleSearch}
      handleSelectTag={handleSelectTag}
    />
  );
};

export default MainContainer;
