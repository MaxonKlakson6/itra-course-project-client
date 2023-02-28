/* eslint-disable react/jsx-props-no-spreading */
import { Checkbox, FormControlLabel, TextField } from '@mui/material';
import { ChangeEvent } from 'react';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { OptionalField } from 'src/types/collection';
import { DescriptionField } from 'src/static/styles/formStyles';

interface ItemOptionalFieldProps {
  optionalField: OptionalField;
  handleChangeField: (name: string, newValue: string | boolean) => void;
}

const ItemOptionalFieldInput = ({
  optionalField,
  handleChangeField,
}: ItemOptionalFieldProps) => {
  const handleDateChange = (newValue: Date | null) => {
    if (newValue) {
      handleChangeField(optionalField.id, newValue.toString());
    }
  };

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { checked, name } = event.target;
    handleChangeField(name, checked);
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    handleChangeField(name, value);
  };

  switch (optionalField.type) {
    case 'boolean':
      return (
        <FormControlLabel
          control={
            <Checkbox
              name={optionalField.id}
              checked={optionalField.value as boolean}
              onChange={handleCheckboxChange}
            />
          }
          label={optionalField.label}
        />
      );

    case 'date':
      return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label={optionalField.label}
            value={optionalField.value}
            inputFormat='DD/MM/YYYY'
            views={['day', 'month', 'year']}
            onChange={handleDateChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      );

    case 'text':
      return (
        <DescriptionField
          rows={5}
          value={optionalField.value as string}
          name={optionalField.id}
          placeholder={optionalField.label}
          onChange={handleInputChange}
        />
      );

    default:
      return (
        <TextField
          fullWidth
          value={optionalField.value}
          onChange={handleInputChange}
          label={optionalField.label}
          variant='standard'
          name={optionalField.id}
          type={optionalField.type}
        />
      );
  }
};

export default ItemOptionalFieldInput;
