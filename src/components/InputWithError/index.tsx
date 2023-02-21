import { FormControl } from '@mui/material';
import { ChangeEvent, FocusEvent, HTMLInputTypeAttribute } from 'react';

import { ErrorText, Input } from 'src/components/InputWithError/styles';

interface InputWithErrorProps {
  className?: string;
  placeholder: string;
  inputType: HTMLInputTypeAttribute;
  inputValue: string;
  name: string;
  errorText: string | undefined;
  isTouched: boolean | undefined;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (event: FocusEvent) => void;
}

const InputWithError = ({
  className,
  placeholder,
  inputType,
  inputValue,
  name,
  errorText,
  isTouched,
  onChange,
  handleBlur,
}: InputWithErrorProps): JSX.Element => (
  <FormControl className={className}>
    <Input
      type={inputType}
      variant='standard'
      placeholder={placeholder}
      value={inputValue}
      name={name}
      onChange={onChange}
      onBlur={handleBlur}
    />
    <ErrorText>{isTouched && errorText}</ErrorText>
  </FormControl>
);

export default InputWithError;
