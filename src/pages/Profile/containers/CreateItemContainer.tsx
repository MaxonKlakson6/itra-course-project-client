import { useParams } from 'react-router';
import { useEffect, useState } from 'react';

import ItemFormLayout from 'src/pages/Profile/components/ItemFormLayout';
import { useGetTagsQuery } from 'src/api/tagsApi';
import { useGetCollectionQuery } from 'src/api/collectionApi';
import { useAlertMessages } from 'src/hooks/useAlertMessages';
import { useCreateItemMutation } from 'src/api/itemApi';
import { useItem } from 'src/hooks/useItem';
import { CreateItemRequest } from 'src/pages/Profile/types/createItemRequest';
import { validateItemTags } from 'src/validation/validateItemTags';
import { validateItemOptionalFields } from 'src/validation/validateItemOptionalFields';
import { ERROR_MESSAGES } from 'src/constants/errorMessages';

const CreateItemContainer = () => {
  const { collectionId } = useParams();
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [createItem, { data, error }] = useCreateItemMutation();

  const { data: allTags = [], isLoading: isLoadingTags } = useGetTagsQuery();
  const { data: collection, isLoading: isLoadingCollection } =
    useGetCollectionQuery(Number(collectionId));

  useAlertMessages(errorMessage, data as string);

  const submit = ({
    title,
    tags,
    optionalFields,
  }: Omit<CreateItemRequest, 'collectionId'>) => {
    if (!validateItemTags(tags)) {
      setErrorMessage(ERROR_MESSAGES.TAGS);
      return;
    }
    if (!validateItemOptionalFields(optionalFields)) {
      setErrorMessage(ERROR_MESSAGES.ITEM_OPTIONAL_FIELDS);
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
    return <h1>Loading ...</h1>;
  }

  return (
    <ItemFormLayout
      title='Create item'
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
  );
};

export default CreateItemContainer;
