import React from 'react';
import PostsMenu from './PostsMenu';
import Posts from './Posts';
import { getPostsAlignedWithDate } from '../lib/utils';
import { PostThumbnailType } from '../lib/type';

function PostsSuccess({
  setCntMenu,
  menuItems,
  data,
  cntMenu,
}: {
  setCntMenu: React.Dispatch<React.SetStateAction<string>>;
  menuItems: string[];
  data: any;
  cntMenu: string;
}) {
  const databases = Object.keys(data.posts);
  let posts: PostThumbnailType[] = [];
  if (cntMenu === 'All') {
    databases.forEach((key) => {
      const arr = data.posts[key];
      posts.push(...arr);
    });
  } else {
    const arr = data.posts[cntMenu].filter(
      (item: PostThumbnailType) => item !== null
    );
    posts.push(...arr);
  }
  return (
    <>
      <PostsMenu setCntMenu={setCntMenu} menuItems={menuItems} />
      <Posts cntMenu={cntMenu} posts={getPostsAlignedWithDate(posts)} />
    </>
  );
}

export default PostsSuccess;
