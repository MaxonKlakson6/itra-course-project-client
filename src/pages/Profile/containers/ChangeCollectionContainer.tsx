import { useParams } from 'react-router';
import { useEffect, useState } from 'react';

import { CollectionMutationType } from 'src/pages/Profile/types/collectionMutationType';
import {
  useChangeCollectionMutation,
  useGetCollectionQuery,
} from 'src/api/collectionApi';
import { useCollection } from 'src/hooks/useCollection';
import { OptionalField } from 'src/types/collection';
import MutateCollectionLayout from 'src/pages/Profile/components/MutateCollectionLayout';
import { validateCollectionOptionalFields } from 'src/validation/validateCollectionOptionalFields';
import { loadImage } from 'src/helpers/loadImage';
import SnackBar from 'src/components/SnackBar';
import { createPosition } from 'src/helpers/createPosition';

const ChangeCollectionContainer = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetCollectionQuery(Number(id));
  const [
    changeCollection,
    { error, isError, isSuccess, data: successMessage },
  ] = useChangeCollectionMutation();

  const [errorMessage, setErrorMessage] = useState<string>('');

  const submit = async ({
    values,
    optionalFields,
    image,
  }: CollectionMutationType) => {
    const isValid = validateCollectionOptionalFields(optionalFields);

    if (!isValid) {
      return;
    }
    const imageUrl = image ? await loadImage(image) : (data?.image as string);

    const collection = {
      image: imageUrl,
      ...values,
      optionalFields,
    };
    changeCollection({ id: Number(id), body: collection });
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
      title: data?.title as string,
      subject: data?.subject as string,
      description: data?.description as string,
    },
    optional: data?.optionalFields as OptionalField[],
    submit,
  });

  useEffect(() => {
    if (isError) {
      setErrorMessage(error as string);
    }
  }, [error, isError]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <MutateCollectionLayout
        formTitle='Change collection'
        values={values}
        imageUrl={data?.image}
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
          message={successMessage as string}
          severity='success'
          duration={2000}
          position={createPosition('top', 'center')}
          onClose={() => setErrorMessage('')}
        />
      )}
    </>
  );
};

export default ChangeCollectionContainer;