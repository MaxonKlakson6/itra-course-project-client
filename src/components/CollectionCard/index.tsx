import { Card, CardContent, CardMedia, Typography } from '@mui/material';

import { MarkdownField } from 'src/components/Markdown/styles';

interface CollectionCardProps {
  className?: string;
  image: string;
  title: string;
  subject: string;
  description: string;
}

const CollectionCard = ({
  className,
  image,
  title,
  subject,
  description,
}: CollectionCardProps) => (
  <Card sx={{ width: 300 }} className={className}>
    <CardMedia
      component='img'
      src={image}
      alt='Collection card image'
      sx={{ height: 200 }}
    />
    <CardContent>
      <MarkdownField>{title}</MarkdownField>
      <Typography variant='h6'>{subject}</Typography>
      <MarkdownField>{description}</MarkdownField>
    </CardContent>
  </Card>
);

export default CollectionCard;
