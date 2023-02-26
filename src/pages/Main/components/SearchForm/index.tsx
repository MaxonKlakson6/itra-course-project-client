import { ChangeEvent, FormEvent } from 'react';
import { TextField } from '@mui/material';

import { Form } from 'src/pages/Main/components/SearchForm/styles';
import { Input } from 'src/components/InputWithError/styles';
import { SubmitButton } from 'src/static/styles/formStyles';

interface SearchFormProps {
  searchText: string;
  handleSearchTextChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: FormEvent) => void;
}

const SearchForm = ({
  searchText,
  handleSearchTextChange,
  handleSubmit,
}: SearchFormProps) => (
  <Form onSubmit={handleSubmit}>
    <Input
      fullWidth
      placeholder='Search'
      variant='standard'
      type='text'
      value={searchText}
      onChange={handleSearchTextChange}
    />
    <SubmitButton type='submit'>Search</SubmitButton>
  </Form>
);

export default SearchForm;
