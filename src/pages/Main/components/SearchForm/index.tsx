import { ChangeEvent, FormEvent } from 'react';
import { useTranslation } from 'react-i18next';

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
}: SearchFormProps) => {
  const { t } = useTranslation();

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        fullWidth
        placeholder={t('mainPage.search') as string}
        variant='standard'
        type='text'
        value={searchText}
        onChange={handleSearchTextChange}
      />
      <SubmitButton type='submit'>{t('mainPage.search')}</SubmitButton>
    </Form>
  );
};

export default SearchForm;
