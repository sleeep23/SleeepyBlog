import React from 'react';
import { postCardsContainer } from './Posts';
import { css, keyframes } from '@emotion/react';
import PostThumbnailSkeleton from './PostThumbnailSkeleton';

function PostCardSkeleton() {
  return (
    <div css={postCardsContainer}>
      <h1
        css={css`
          font-size: 40px;
        `}
      >
        All
      </h1>
      <PostThumbnailSkeleton />
      <PostThumbnailSkeleton />
      <PostThumbnailSkeleton />
    </div>
  );
}

export default PostCardSkeleton;
