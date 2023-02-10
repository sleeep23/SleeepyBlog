import React, { Fragment, useEffect, useState } from 'react';
import { PostsType, PostThumbnailType } from '../lib/type';
import PostCard from './PostCard';
import { css } from '@emotion/react';

const postCardsContainer = css`
  display: flex;
  flex-direction: column;
  margin: 40px auto;
  gap: 40px;
  @media (max-width: 768px) {
    margin: 80px 0;
    gap: 120px;
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
