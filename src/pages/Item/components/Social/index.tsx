import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { useAppSelector } from 'src/hooks/reduxHooks';
import { authSelector } from 'src/store/selectors/authSelector';
import { Comment } from 'src/types/comment';
import {
  CommentBlock,
  CommentField,
  CommentForm,
  CommentWrapper,
  LikeButton,
  Message,
  SocialBlock,
  UserName,
} from 'src/pages/Item/components/Social/styles';
import { SubmitButton } from 'src/static/styles/formStyles';

interface SocialProps {
  itemId: number;
  comments: Comment[];
  likes: number[];
}

const Social = ({ itemId, comments, likes }: SocialProps) => {
  const { userData } = useAppSelector(authSelector);
  const [comment, setComment] = useState<string>('');
  const [allComments, setAllComments] = useState<Comment[]>([...comments]);
  const [allLikes, setAllLikes] = useState<number[]>(likes);

  const wsServer = io(import.meta.env.VITE_SERVER_URL);

  const handleChangeComment = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    setComment(value);
  };

  const handleAddComment = (event: FormEvent) => {
    event.preventDefault();
    if (comment.length > 4) {
      const newComment = {
        userName: userData.name,
        userId: userData.id,
        text: comment,
      };
      setComment('');
      wsServer.emit('add-comment', newComment, itemId);
    }
  };

  const handleLike = () => {
    wsServer.emit('like', userData.id, itemId);
  };

  wsServer
    .off('update-comments')
    .on('update-comments', (updatedComments: Comment[]) => {
      setAllComments(updatedComments);
    });

  wsServer.off('update-likes').on('update-likes', (updatedLikes: number[]) => {
    setAllLikes(updatedLikes);
  });

  useEffect(() => {
    wsServer.emit('join-item', itemId);
  }, []);

  return (
    <SocialBlock>
      <CommentForm onSubmit={handleAddComment}>
        <CommentField
          placeholder='Comment'
          value={comment}
          onChange={handleChangeComment}
        />
        <SubmitButton type='submit'>Add comment</SubmitButton>
      </CommentForm>
      <LikeButton onClick={handleLike}>
        {allLikes.includes(userData.id) ? (
          <FavoriteIcon sx={{ color: 'red' }} />
        ) : (
          <FavoriteBorderOutlinedIcon />
        )}
        {allLikes.length}
      </LikeButton>
      <CommentBlock>
        {allComments.map((s, index) => (
          <CommentWrapper key={index}>
            <UserName>{s.userName}:</UserName>
            <Message>{s.text}</Message>
          </CommentWrapper>
        ))}
      </CommentBlock>
    </SocialBlock>
  );
};

export default Social;
