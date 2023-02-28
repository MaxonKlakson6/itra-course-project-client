import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { useNavigate } from 'react-router';

import Markdown from 'src/components/Markdown';
import { ROUTES_WITH_ID } from 'src/router/routeNames';

interface CollectionCardProps {
  collectionId?: number;
  className?: string;
  image: string;
  title: string;
  subject: string;
  description: string;
}

const CollectionCard = ({
  collectionId,
  className,
  image,
  title,
  subject,
  description,
}: CollectionCardProps) => {
  const navigate = useNavigate();

  const handleNavigateToItems = () => {
    if (collectionId) {
      navigate(`${ROUTES_WITH_ID.COLLECTION}/${collectionId}`);
    }
  };

  return (
    <Card
      sx={{ width: 300, cursor: 'pointer' }}
      className={className}
      onClick={handleNavigateToItems}
    >
      <CardMedia
        component='img'
        src={image}
        alt='Collection card image'
        sx={{ height: 200 }}
      />
      <CardContent>
        <Typography variant='h5'>{title}</Typography>
        <Typography variant='h6'>{subject}</Typography>
        <Markdown value={description} />
      </CardContent>
    </Card>
  );
};

export default CollectionCard;
