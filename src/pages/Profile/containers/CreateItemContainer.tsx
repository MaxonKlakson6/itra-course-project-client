import { useParams } from 'react-router';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';

import MutateItemLayout from 'src/pages/Profile/components/MutateItemLayout';
import { useGetTagsQuery } from 'src/api/tagsApi';
import { useGetCollectionQuery } from 'src/api/collectionApi';
import { itemSchema } from 'src/validation/itemSchema';
import { validateItemTags } from 'src/validation/validateItemTags';
import { validateItemOptionalFields } from 'src/validation/validateItemOptionalFields';
import { OptionalField } from 'src/types/collection';
import { useAlertMessages } from 'src/hooks/useAlertMessages';
import { useCreateItemMutation } from 'src/api/itemApi';

const CreateItemContainer = () => {
  const { collectionId } = useParams();
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [itemTags, setItemTags] = useState<string[]>([]);
  const [optionalFields, setOptionalFields] = useState<OptionalField[]>([]);
  const [createItem, { data, error }] = useCreateItemMutation();

  useAlertMessages(errorMessage, data as string);

  const {
    values,
    errors,
    touched,
    handleChange,
    setFieldValue,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues: {
      title: '',
      tag: '',
    },
    validationSchema: itemSchema,
    validateOnBlur: true,
    enableReinitialize: true,
    onSubmit: () => {
      if (!validateItemTags(itemTags)) {
        setErrorMessage('Add at least one tag');
        return;
      }
      if (!validateItemOptionalFields(optionalFields)) {
        setErrorMessage('Incorrect optional field value');
        return;
      }

      createItem({
        collectionId: collectionId as string,
        title: values.title,
        tags: itemTags,
        optionalFields,
      });
    },
  });

  const handleAddTag = () => {
    if (itemTags.includes(values.tag)) {
      setFieldValue('tag', '');
      return;
    }
    if (values.tag.length > 0) {
      setItemTags([...itemTags, values.tag]);
      setFieldValue('tag', '');
    }
  };

  const handleDeleteTag = (tagToDelete: string) => {
    const indexOfTag = itemTags.findIndex((tag) => tag === tagToDelete);

    if (indexOfTag >= 0) {
      const stateCopy = [...itemTags];
      stateCopy.splice(indexOfTag, 1);
      setItemTags(stateCopy);
    }
  };

  const updateTagByOption = (newValue: string) => {
    setFieldValue('tag', newValue);
  };

  const handleChangeOptionalField = (name: string, value: string | boolean) => {
    const stateCopy = [...optionalFields];
    const fieldToChange = stateCopy.find(
      (optionalField) => optionalField.id === name
    );

    if (fieldToChange) {
      fieldToChange.value = value;
    }
    setOptionalFields(stateCopy);
  };

  const { data: tags = [], isLoading: isLoadingTags } = useGetTagsQuery();
  const {
    data: collection,
    isLoading: isLoadingCollection,
    isSuccess,
  } = useGetCollectionQuery(Number(collectionId));

  useEffect(() => {
    if (isSuccess && collection) {
      const fields = collection.optionalFields.map((optionalField) => ({
        ...optionalField,
      }));
      setOptionalFields(fields);
    }
    if (error) {
      setErrorMessage(error as string);
    }
  }, [isSuccess, collection, error]);

  if (isLoadingTags || isLoadingCollection) {
    return <h1>Loading ...</h1>;
  }

  return (
    <MutateItemLayout
      collectionId={collectionId as string}
      tags={tags}
      itemTags={itemTags}
      optionalFields={optionalFields}
      values={values}
      errors={errors}
      touched={touched}
      handleBlur={handleBlur}
      handleChange={handleChange}
      updateTagByOption={updateTagByOption}
      handleAddTag={handleAddTag}
      handleDeleteTag={handleDeleteTag}
      handleChangeOptionalField={handleChangeOptionalField}
      handleSubmit={handleSubmit}
    />
  );
};

export default CreateItemContainer;
