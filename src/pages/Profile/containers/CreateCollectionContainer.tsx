import { useEffect, useState } from 'react';

import MutateCollectionLayout from 'src/pages/Profile/components/MutateCollectionLayout';
import SnackBar from 'src/components/SnackBar';
import { createPosition } from 'src/helpers/createPosition';
import { subjectDefaultValue } from 'src/constants/subjects';
import { useCreateCollectionMutation } from 'src/api/collectionApi';
import { loadImage } from 'src/helpers/loadImage';
import defaultImage from 'src/static/images/default.jpg';
import { useCollection } from 'src/hooks/useCollection';
import { validateCollectionOptionalFields } from 'src/validation/validateCollectionOptionalFields';
import { ERROR_MESSAGES } from 'src/constants/errorMessages';
import { CollectionMutationType } from 'src/pages/Profile/types/collectionMutationType';

const CreateCollectionContainer = () => {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [createCollection, { data, error, isError, isSuccess }] =
    useCreateCollectionMutation();
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
    <>
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
      {errorMessage && (
        <SnackBar
          message={errorMessage}
          severity='error'
          duration={2000}
          position={createPosition('top', 'center')}
          onClose={() => setErrorMessage('')}
        />
      )}
      {isSuccess && (
        <SnackBar
          message={data as string}
          severity='success'
          duration={2000}
          position={createPosition('top', 'center')}
          onClose={() => setErrorMessage('')}
        />
      )}
    </>
  );
};

export default CreateCollectionContainer;
