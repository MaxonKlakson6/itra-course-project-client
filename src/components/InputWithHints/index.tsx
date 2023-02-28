/* eslint-disable react/jsx-props-no-spreading */
import { Autocomplete, TextField } from '@mui/material';
import { ChangeEvent, SyntheticEvent } from 'react';

interface InputWithHintsProps {
  className?: string;
  id: string;
  name: string;
  label: string;
  value: string;
  hints: string[];
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  updateValueByOption: (newValue: string) => void;
}

const InputWithHints = ({
  className,
  id,
  name,
  label,
  value,
  hints,
  handleChange,
  updateValueByOption,
}: InputWithHintsProps) => {
  const handleInputChange = (
    event: SyntheticEvent,
    newValue: string | null
  ) => {
    if (typeof newValue === 'string') {
      updateValueByOption(newValue);
    }
  };

  return (
    <Autocomplete
      className={className}
      id={id}
      freeSolo
      options={hints}
      onChange={handleInputChange}
      value={value}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          name={name}
          onChange={handleChange}
        />
      )}
    />
  );
};

export default InputWithHints;
