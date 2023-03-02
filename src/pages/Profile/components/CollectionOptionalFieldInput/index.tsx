import { ChangeEvent } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { useTranslation } from 'react-i18next';

import {
  DeleteButton,
  InputField,
  Wrapper,
} from 'src/pages/Profile/components/CollectionOptionalFieldInput/styles';

interface CollectionOptionalFieldInputProps {
  id: string;
  index: number;
  label: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  deleteOptionalField: (index: number) => void;
}

const CollectionOptionalFieldInput = ({
  id,
  index,
  label,
  handleChange,
  deleteOptionalField,
}: CollectionOptionalFieldInputProps): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <InputField
        fullWidth
        placeholder={t('createCollectionPage.optionalFieldName') as string}
        value={label}
        name={id}
        variant='standard'
        onChange={handleChange}
      />
      <DeleteButton type='button' onClick={() => deleteOptionalField(index)}>
        <DeleteIcon />
      </DeleteButton>
    </Wrapper>
  );
};

export default CollectionOptionalFieldInput;
