import { ChangeEvent } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

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
}: CollectionOptionalFieldInputProps): JSX.Element => (
  <Wrapper>
    <InputField
      fullWidth
      placeholder='Label'
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

export default CollectionOptionalFieldInput;
