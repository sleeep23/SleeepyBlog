import React from 'react';
import { PostThumbnailType } from '../lib/type';
import PostCard from './PostCard';
import { css } from '@emotion/react';

export const postCardsContainer = css`
  display: flex;
  flex-direction: column;
  margin: 40px auto;
  gap: 40px;
  @media (max-width: 768px) {
    margin: 80px 0;
    gap: 80px;
  }
`;

export default function Posts({
  posts,
  cntMenu,
}: {
  posts: PostThumbnailType[];
  cntMenu: string;
}) {
  return (
    <div css={postCardsContainer}>
      <PostCard cntMenu={cntMenu} posts={posts} />
    </div>
  );
}
