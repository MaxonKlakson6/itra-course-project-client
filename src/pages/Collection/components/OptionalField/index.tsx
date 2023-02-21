import ClearIcon from '@mui/icons-material/Clear';
import CheckIcon from '@mui/icons-material/Check';
import dayjs from 'dayjs';

import { OptionalField as OptionalFieldType } from 'src/types/collection';
import Markdown from 'src/components/Markdown';

const OptionalField = ({
  value,
  type,
}: Omit<OptionalFieldType, 'label' | 'id'>) => {
  switch (type) {
    case 'text': {
      return <Markdown value={value as string} />;
    }
    case 'boolean': {
      return value ? <CheckIcon /> : <ClearIcon />;
    }
    case 'date': {
      return <p>{dayjs(value as string).format('DD-MM-YYYY')}</p>;
    }
    default: {
      return <p>{value}</p>;
    }
  }
};

export default OptionalField;
