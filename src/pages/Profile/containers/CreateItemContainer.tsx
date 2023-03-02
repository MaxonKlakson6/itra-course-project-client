import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import ItemFormLayout from 'src/pages/Profile/components/ItemFormLayout';
import { useGetTagsQuery } from 'src/api/tagsApi';
import { useGetCollectionQuery } from 'src/api/collectionApi';
import { useAlertMessages } from 'src/hooks/useAlertMessages';
import { useCreateItemMutation } from 'src/api/itemApi';
import { useItem } from 'src/hooks/useItem';
import { CreateItemRequest } from 'src/pages/Profile/types/createItemRequest';
import { validateItemTags } from 'src/validation/validateItemTags';
import { validateItemOptionalFields } from 'src/validation/validateItemOptionalFields';
import Loader from 'src/components/Loader';
import ErrorHandler from 'src/components/ErrorHandler';

const CreateItemContainer = () => {
  const { collectionId } = useParams();
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [createItem, { data, error }] = useCreateItemMutation();
  const { t } = useTranslation();

  const {
    data: allTags = [],
    isLoading: isLoadingTags,
    isError: isTagsError,
    error: tagsError = '',
  } = useGetTagsQuery();
  const {
    data: collection,
    isLoading: isLoadingCollection,
    isError: isCollectionError,
    error: collectionError = '',
  } = useGetCollectionQuery(Number(collectionId));

  useAlertMessages(errorMessage, data as string);

  const submit = ({
    title,
    tags,
    optionalFields,
  }: Omit<CreateItemRequest, 'collectionId'>) => {
    if (!validateItemTags(tags)) {
      setErrorMessage(t('itemForm.tagsError') as string);
      return;
    }
    if (!validateItemOptionalFields(optionalFields)) {
      setErrorMessage(t('itemForm.optionalFieldError') as string);
      return;
    }
    createItem({
      collectionId: collectionId as string,
      title,
      tags,
      optionalFields,
    });
  };

  const form = useItem({
    initialValues: {
      title: '',
      tag: '',
    },
    optional: collection?.optionalFields,
    submit,
  });

  useEffect(() => {
    if (error) {
      setErrorMessage(error as string);
    }
  }, [error]);

  if (isLoadingTags || isLoadingCollection) {
    return <Loader />;
  }

  return (
    <ErrorHandler
      isError={isTagsError || isCollectionError}
      errorMessage={`${tagsError} ${collectionError}`}
    >
      <ItemFormLayout
        title={t('itemForm.createItemTitle')}
        values={form.values}
        tags={allTags}
        itemTags={form.itemTags}
        optionalFields={form.optionalFields}
        errors={form.errors}
        touched={form.touched}
        handleBlur={form.handleBlur}
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

export default CreateItemContainer;
