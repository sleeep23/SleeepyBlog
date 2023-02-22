import React, { useState } from 'react';
import { server } from '../../config';
import axios from 'axios';

import Head from 'next/head';
import { menuSectionStyle } from '../../components/PostsMenu';
import ArticleLayout from '../../components/layout/ArticleLayout';
import PostCardSkeleton from '../../components/PostCardSkeleton';

import { useQuery } from '@tanstack/react-query';
import PostsSuccess from '../../components/PostsSuccess';

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
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta property="og:type" content="website" />

        <meta name="description" content="Sleeep23's Blog Posts" />
        <meta name="og:description" content="Sleeep23's Blog Posts" />

        <meta property="og:title" content="Sleeep23's Blog Posts" />
        <title>Sleeep23&apos;s Blog Posts</title>
      </Head>
      <ArticleLayout showProgress={false}>
        {isLoading && (
          <>
            <section css={menuSectionStyle}>
              <p>All</p>
              <p>Projects</p>
              <p>Development</p>
            </section>
            <PostCardSkeleton />
          </>
        )}
        {isError && <div>Error</div>}
        {isSuccess && (
          <PostsSuccess
            setCntMenu={setCntMenu}
            menuItems={['All', 'Projects', 'Development']}
            data={data}
            cntMenu={cntMenu}
          />
        )}
      </ArticleLayout>
    </>
  );
}
