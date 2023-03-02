import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useTranslation } from 'react-i18next';

import CollectionFormLayout from 'src/pages/Profile/components/CollectionFormLayout';
import { subjectDefaultValue } from 'src/constants/subjects';
import { useCreateCollectionMutation } from 'src/api/collectionApi';
import { loadImage } from 'src/helpers/loadImage';
import { useCollection } from 'src/hooks/useCollection';
import { validateCollectionOptionalFields } from 'src/validation/validateCollectionOptionalFields';
import { useAlertMessages } from 'src/hooks/useAlertMessages';
import { CollectionMutationType } from 'src/pages/Profile/types/collectionMutationType';

const CreateCollectionContainer = () => {
  const { userId } = useParams();
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [createCollection, { data, error, isError }] =
    useCreateCollectionMutation();
  const { t } = useTranslation();

  useAlertMessages(errorMessage, data as string);
  const submit = async ({
    values,
    optionalFields,
    image,
  }: CollectionMutationType) => {
    const isValid = validateCollectionOptionalFields(optionalFields);

    if (!isValid) {
      setErrorMessage(
        t('createCollectionPage.optionalFieldsRequired') as string
      );
      return;
    }

    const imageUrl = image
      ? await loadImage(image)
      : import.meta.env.VITE_DEFAULT_IMAGE;

    const collection = {
      ...values,
      optionalFields,
      image: imageUrl,
      userId: Number(userId),
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
    <CollectionFormLayout
      formTitle={t('createCollectionPage.createCollection')}
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
