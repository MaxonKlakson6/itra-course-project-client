import { ChangeEvent, useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { v4 as uuid } from 'uuid';

import { collectionSchema } from 'src/validation/collectionSchema';
import { OptionalField } from 'src/types/collection';
import { OptionalFieldTypes } from 'src/types/optionalFieldTypes';
import { CollectionForm } from 'src/pages/Profile/types/collectionForm';
import { CollectionMutationType } from 'src/pages/Profile/types/collectionMutationType';
import { createOptionalFieldValue } from 'src/helpers/createOptionalFieldValue';

interface UseCollectionProps {
  initialValues: CollectionForm;
  optional: OptionalField[] | null;
  submit: ({ values, optionalFields, image }: CollectionMutationType) => void;
}

export const useCollection = ({
  initialValues,
  optional,
  submit,
}: UseCollectionProps) => {
  const [image, setImageFile] = useState<File | null>(null);
  const [optionalFields, setOptionalFields] = useState<OptionalField[]>(
    optional || []
  );

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        title: initialValues.title || '',
        subject: initialValues.subject || 'Books',
        description: initialValues.description || '',
      },
      enableReinitialize: true,
      validationSchema: collectionSchema,
      validateOnBlur: true,
      onSubmit: async () => {
        submit({ values, optionalFields, image });
      },
    });

  const createNewField = (type: OptionalFieldTypes) => {
    const newField: OptionalField = {
      type,
      label: '',
      id: uuid(),
      value: createOptionalFieldValue(type),
    };
    setOptionalFields([...optionalFields, newField]);
  };

  const handleChangeImageUrl = (url: File) => {
    setImageFile(url);
  };
  const handleChangeOptionalField = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const stateCopy = [...optionalFields];
    const input = stateCopy.find((optionalField) => optionalField.id === name);

    if (input) {
      input.label = value;
      setOptionalFields(stateCopy);
    }
  };

  const deleteOptionalField = (index: number) => {
    const stateCopy = [...optionalFields];

    stateCopy.splice(index, 1);
    setOptionalFields(stateCopy);
  };

  useEffect(() => {
    if (optional) {
      const fields = optional.map((field) => ({
        type: field.type,
        id: field.id,
        label: field.label,
        value: field.value,
      }));
      setOptionalFields(fields);
    }
  }, [optional]);

  return {
    image,
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
  };
};
