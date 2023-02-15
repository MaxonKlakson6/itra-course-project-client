import { useEffect, useState } from 'react';

import MutateCollectionLayout from 'src/pages/Profile/components/MutateCollectionLayout';
import { subjectDefaultValue } from 'src/constants/subjects';
import { useCreateCollectionMutation } from 'src/api/collectionApi';
import { loadImage } from 'src/helpers/loadImage';
import { useCollection } from 'src/hooks/useCollection';
import { validateCollectionOptionalFields } from 'src/validation/validateCollectionOptionalFields';
import { useAlertMessages } from 'src/hooks/useAlertMessages';
import { CollectionMutationType } from 'src/pages/Profile/types/collectionMutationType';
import { ERROR_MESSAGES } from 'src/constants/errorMessages';
import defaultImage from 'src/static/images/default.jpg';

const CreateCollectionContainer = () => {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [createCollection, { data, error, isError }] =
    useCreateCollectionMutation();

  useAlertMessages(errorMessage, data as string);
  const submit = async ({
    values,
    optionalFields,
    image,
  }: CollectionMutationType) => {
    const isValid = validateCollectionOptionalFields(optionalFields);

    if (!isValid) {
      setErrorMessage(ERROR_MESSAGES.COLLECTION_OPTIONAL_FIELDS);
      return;
    }

    const imageUrl = image ? await loadImage(image) : defaultImage;

    const collection = {
      image: imageUrl,
      ...values,
      optionalFields,
    };
    createCollection(collection);
  };

  const {
    optionalFields,
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    createNewField,
    handleChangeImageUrl,
    handleChangeOptionalField,
    deleteOptionalField,
  } = useCollection({
    initialValues: {
      title: '',
      subject: subjectDefaultValue,
      description: '',
    },
    optional: null,
    submit,
  });

  useEffect(() => {
    if (isError) {
      setErrorMessage(error as string);
    }
  }, [error, isError]);

  return (
    <MutateCollectionLayout
      formTitle='Create new collection'
      values={values}
      errors={errors}
      touched={touched}
      handleBlur={handleBlur}
      optionalFields={optionalFields}
      handleChange={handleChange}
      createNewField={createNewField}
      handleChangeOptionalField={handleChangeOptionalField}
      deleteOptionalField={deleteOptionalField}
      handleCreateCollection={handleSubmit}
      handleChangeImageUrl={handleChangeImageUrl}
    />
  );
};

export default CreateCollectionContainer;
