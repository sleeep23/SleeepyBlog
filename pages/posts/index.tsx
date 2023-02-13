import React, { useState } from 'react';
import axios from 'axios';
import ArticleLayout from '../../components/layout/ArticleLayout';
import PostsMenu, { menuSectionStyle } from '../../components/PostsMenu';
import { server } from '../../config';
import { useQuery } from '@tanstack/react-query';
import Posts from '../../components/Posts';
import { PostThumbnailType } from '../../lib/type';
import PostCardSkeleton from '../../components/PostCardSkeleton';

export default function Index() {
  const [cntMenu, setCntMenu] = useState<string>('All');
  const queryTime = 1000 * 60 * 5;
  const queryFn = async () => {
    const res = await axios.get(`${server}/api/posts`);
    return res.data;
  };
  const { data, isLoading, isError, isSuccess } = useQuery(['posts'], queryFn, {
    staleTime: queryTime,
    cacheTime: queryTime,
  });

  if (isLoading) {
    return (
      <ArticleLayout showProgress={false}>
        <section css={menuSectionStyle}>
          <p>All</p>
          <p>Projects</p>
          <p>Development</p>
        </section>
        <PostCardSkeleton />
      </ArticleLayout>
    );
  }
  if (isError) {
    return (
      <ArticleLayout showProgress={false}>
        <div>Error</div>
      </ArticleLayout>
    );
  }
  if (isSuccess) {
    console.log(data.posts);
    const databases = Object.keys(data.posts);
    let posts: PostThumbnailType[] = [];
    if (cntMenu === 'All') {
      databases.map((key) => {
        const arr = data.posts[key].filter(
          (item: PostThumbnailType) => item !== null
        );
        posts.push(...arr);
      });
    } else {
      const arr = data.posts[cntMenu].filter(
        (item: PostThumbnailType) => item !== null
      );
      posts.push(...arr);
    }
    return (
      <ArticleLayout showProgress={false}>
        <PostsMenu
          setCntMenu={setCntMenu}
          menuItems={['All', 'Projects', 'Development']}
        />
        <Posts cntMenu={cntMenu} posts={posts} />
      </ArticleLayout>
    );
  }
}
