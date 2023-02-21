import { useNavigate } from 'react-router';
import CancelIcon from '@mui/icons-material/Cancel';

import { CloseButton } from 'src/components/BackButton/styles';

interface BackButtonProps {
  className?: string;
}

const BackButton = ({ className }: BackButtonProps) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <CloseButton className={className} onClick={handleGoBack}>
      <CancelIcon />
    </CloseButton>
  );
};

export default BackButton;
