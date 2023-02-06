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
    margin: 0px;
  }
`;

export default function Posts({
  data,
  cntMenu,
}: {
  data: PostsType;
  cntMenu: string;
}) {
  const defaultPost = () => {
    let result: PostThumbnailType[] = [];
    data.map((item) => {
      item.posts.map((post) => {
        result.push(post);
      });
    });
    return result;
  };
  const cntPost =
    data &&
    data
      .filter((item) => {
        return item.name === cntMenu;
      })
      .at(0);
  return (
    <div css={postCardsContainer}>
      {cntMenu === 'All' ? (
        <PostCard cntPost={defaultPost()} />
      ) : (
        <PostCard cntPost={cntPost?.posts} />
      )}
    </div>
  );
}
