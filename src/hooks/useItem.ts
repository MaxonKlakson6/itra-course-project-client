import { useFormik } from 'formik';
import { useEffect, useState } from 'react';

import { OptionalField } from 'src/types/collection';
import { itemSchema } from 'src/validation/itemSchema';
import { ItemFormValues } from 'src/pages/Profile/types/itemFormValues';
import { CreateItemRequest } from 'src/pages/Profile/types/createItemRequest';

interface UseItemProps {
  initialValues: ItemFormValues;
  tags?: string[];
  optional: OptionalField[] | undefined;
  submit: ({
    title,
    tags,
    optionalFields,
  }: Omit<CreateItemRequest, 'collectionId'>) => void;
}

export const useItem = ({
  initialValues,
  tags,
  optional,
  submit,
}: UseItemProps) => {
  const [itemTags, setItemTags] = useState<string[]>([]);
  const [optionalFields, setOptionalFields] = useState<OptionalField[]>([]);

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
      title: initialValues.title || '',
      tag: '',
    },
    validationSchema: itemSchema,
    validateOnBlur: true,
    enableReinitialize: true,
    onSubmit: () => {
      submit({
        title: values.title,
        tags: itemTags,
        optionalFields,
      });
    },
  });

  const updateTagByOption = (newValue: string) => {
    setFieldValue('tag', newValue);
  };

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

  useEffect(() => {
    if (tags) {
      setItemTags([...tags]);
    }
  }, [tags]);
  useEffect(() => {
    if (optional) {
      const optionalCopy = optional.map((optionalField) => ({
        ...optionalField,
      }));
      setOptionalFields(optionalCopy);
    }
  }, [optional]);

  return {
    values,
    errors,
    touched,
    itemTags,
    optionalFields,
    handleChange,
    setFieldValue,
    handleBlur,
    handleSubmit,
    updateTagByOption,
    handleAddTag,
    handleDeleteTag,
    handleChangeOptionalField,
  };
};
