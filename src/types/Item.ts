import { OptionalField } from 'src/types/collection';
import { Comment } from 'src/types/comment';

export interface Item {
  id: number;
  title: string;
  tags: string[];
  optionalFields: OptionalField[];
  comments: Comment[];
  likes: number[];
}
