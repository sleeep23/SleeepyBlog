import React, { use, useEffect, useState } from 'react';
import { PostsType } from '../../lib/type';
import ArticleLayout from '../../components/layout/articleLayout';
import Posts from '../../components/Posts';
import PostsMenu from '../../components/PostsMenu';

import { useQuery } from '@tanstack/react-query';
import { fetchPosts } from '../../lib/fetchers';

export default function Index() {
  const [cntMenu, setCntMenu] = useState<string>('All');
  const { isError, isSuccess, isLoading, data, error } = useQuery(
    ['posts'],
    fetchPosts,
    { staleTime: 3000 }
  );

  if (isLoading) {
    console.log('Loading posts ...');
    return (
      <ArticleLayout>
        <div>Loading...</div>
      </ArticleLayout>
    );
  }

  if (isError) {
    console.log('Error : ', error);
    return (
      <ArticleLayout>
        <div>Error...</div>
      </ArticleLayout>
    );
  }
  const posts = data as PostsType;
  const menuItems = posts?.map((db) => db.name);
  if (isSuccess) {
    return (
      <ArticleLayout>
        <PostsMenu setCntMenu={setCntMenu} menuItems={menuItems} />
        {posts && <Posts cntMenu={cntMenu} data={posts} />}
      </ArticleLayout>
    );
  }
}
