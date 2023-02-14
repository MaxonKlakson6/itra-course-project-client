import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
  SelectChangeEvent,
} from '@mui/material';

interface SelectProps {
  className?: string;
  value: string;
  labelId: string;
  label: string;
  defaultValue?: string;
  name: string;
  options: string[];
  handleChange: (event: SelectChangeEvent) => void;
}

const Select = ({
  className,
  labelId,
  label,
  defaultValue,
  value,
  name,
  handleChange,
  options,
}: SelectProps) => (
  <FormControl className={className}>
    <InputLabel id={labelId}>{label}</InputLabel>
    <MuiSelect
      labelId={labelId}
      label={label}
      value={value}
      defaultValue={defaultValue}
      name={name}
      onChange={handleChange}
    >
      {options.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </MuiSelect>
  </FormControl>
);

export default Select;
