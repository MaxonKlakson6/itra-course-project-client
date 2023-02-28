import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

import MainLayout from 'src/pages/Main/components/MainLayout';
import { useGetBiggestQuery } from 'src/api/collectionApi';
import { useGetRecentQuery, useLazySearchQuery } from 'src/api/itemApi';
import { useGetTagsQuery } from 'src/api/tagsApi';
import { useAppDispatch } from 'src/hooks/reduxHooks';
import { changeMode } from 'src/store/reducers/interactionModeSlice';
import Loader from 'src/components/Loader';
import ErrorHandler from 'src/components/ErrorHandler';
import { CloudTag } from 'src/pages/Main/types/cloudTag';

const MainContainer = () => {
  const dispatch = useAppDispatch();
  const {
    data: collections = [],
    isLoading: isLoadingCollections,
    isError: isCollectionsError,
    error: collectionsError = '',
  } = useGetBiggestQuery();
  const {
    data: items = [],
    isLoading: isLoadingItems,
    isError: isItemsError,
    error: itemsError = '',
  } = useGetRecentQuery();
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

  const handleSelectTag = ({ value }: CloudTag) => {
    setSearchText(value);
    search(value);
  };

  useEffect(() => {
    dispatch(changeMode(true));
  }, []);

  if (isLoadingCollections || isLoadingItems) {
    return <Loader />;
  }

  return (
    <ErrorHandler
      isError={isCollectionsError || isItemsError}
      errorMessage={`${collectionsError} ${itemsError}`}
    >
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
    </ErrorHandler>
  );
};

export default MainContainer;
