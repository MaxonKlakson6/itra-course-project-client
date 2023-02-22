import styled from '@emotion/styled';

import { DescriptionField } from 'src/static/styles/formStyles';
import { COLORS } from 'src/static/colors';

export const SocialBlock = styled.div`
  margin-top: 20px;
  padding: 20px;
  border: 2px solid ${COLORS.GREY};
  display: flex;
  flex-direction: column;
`;

export const CommentForm = styled.form`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const CommentField = styled(DescriptionField)`
  width: 100%;
`;

export const CommentBlock = styled.div`
  margin-top: 20px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const CommentWrapper = styled.div`
  padding: 5px;
  border-bottom: 1px solid ${COLORS.GREEN};
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const UserName = styled.span`
  font-family: Roboto, sans-serif;
  font-size: 20px;
`;

export const Message = styled.p`
  font-family: Poppins, sans-serif;
`;

export const LikeButton = styled.button`
  margin-top: 10px;
  align-self: flex-end;
  border: 0;
  background-color: #fff;
  cursor: pointer;
`;
