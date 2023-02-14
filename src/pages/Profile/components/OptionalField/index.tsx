import { ChangeEvent } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

import {
  DeleteButton,
  InputField,
  Wrapper,
} from 'src/pages/Profile/components/OptionalField/styles';

interface OptionalFieldProps {
  id: string;
  index: number;
  label: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  deleteOptionalField: (index: number) => void;
}

const OptionalField = ({
  id,
  index,
  label,
  handleChange,
  deleteOptionalField,
}: OptionalFieldProps): JSX.Element => (
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

export default OptionalField;
