import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useChangeItemMutation, useGetItemQuery } from 'src/api/itemApi';
import { useGetCollectionQuery } from 'src/api/collectionApi';
import { OptionalField } from 'src/types/collection';
import { useItem } from 'src/hooks/useItem';
import ItemFormLayout from 'src/pages/Profile/components/ItemFormLayout';
import { useGetTagsQuery } from 'src/api/tagsApi';
import { UpdateItemRequest } from 'src/pages/Profile/types/updateItemRequest';
import { useAlertMessages } from 'src/hooks/useAlertMessages';
import { validateItemTags } from 'src/validation/validateItemTags';
import { validateItemOptionalFields } from 'src/validation/validateItemOptionalFields';
import Loader from 'src/components/Loader';
import ErrorHandler from 'src/components/ErrorHandler';

const ChangeItemContainer = () => {
  const { itemId, collectionId } = useParams();
  const [optional, setOptional] = useState<OptionalField[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const { t } = useTranslation();

  const {
    data: allTags = [],
    isLoading: isLoadingTags,
    isError: isTagsError,
    error: tagsError = '',
  } = useGetTagsQuery();
  const {
    data: item,
    isLoading: isLoadingItem,
    isError: isItemError,
    error: itemError = '',
  } = useGetItemQuery(Number(itemId));
  const {
    data: collection,
    isLoading: isLoadingCollection,
    isError: isCollectionError,
    error: collectionError = '',
  } = useGetCollectionQuery(Number(collectionId));
  const [changeItem, { data: successMessage, error }] = useChangeItemMutation();

  useAlertMessages(errorMessage, successMessage as string);

  const submit = (updatedItem: Omit<UpdateItemRequest, 'id'>) => {
    if (!validateItemTags(updatedItem.tags)) {
      setErrorMessage(t('itemForm.tagsError') as string);
      return;
    }
    if (!validateItemOptionalFields(updatedItem.optionalFields)) {
      setErrorMessage(t('itemForm.optionalFieldError') as string);
      return;
    }
    changeItem({
      id: itemId as string,
      ...updatedItem,
    });
  };

  const form = useItem({
    initialValues: {
      title: item?.title || '',
      tag: '',
    },
    tags: item?.tags,
    optional,
    submit,
  });

  useEffect(() => {
    if (item && collection) {
      const concatOptionalFields = collection.optionalFields.map(
        (collectionOptionalField) => {
          const itemOptionalField = item.optionalFields.find(
            (optionalField) => optionalField.id === collectionOptionalField.id
          );

          return itemOptionalField || collectionOptionalField;
        }
      );
      setOptional(concatOptionalFields);
    }
  }, [item, collection]);

  useEffect(() => {
    if (error) {
      setErrorMessage(error as string);
    }
  }, [error]);

  if (isLoadingItem || isLoadingCollection || isLoadingTags) {
    return <Loader />;
  }
  return (
    <ErrorHandler
      isError={isTagsError || isItemError || isCollectionError}
      errorMessage={`${tagsError} ${itemError} ${collectionError}`}
    >
      <ItemFormLayout
        title={t('itemForm.updateItemTitle')}
        tags={allTags}
        itemTags={form.itemTags}
        values={form.values}
        errors={form.errors}
        touched={form.touched}
        handleBlur={form.handleBlur}
        optionalFields={form.optionalFields}
        handleChange={form.handleChange}
        updateTagByOption={form.updateTagByOption}
        handleAddTag={form.handleAddTag}
        handleDeleteTag={form.handleDeleteTag}
        handleChangeOptionalField={form.handleChangeOptionalField}
        handleSubmit={form.handleSubmit}
      />
    </ErrorHandler>
  );
};

export default ChangeItemContainer;
