import React, { useEffect, useMemo, useState } from 'react';
import ArticleLayout from '../../components/layout/articleLayout';
import { css } from '@emotion/react';
import Image from 'next/image';

import { PostContentType } from '../../lib/type';
import { useRouter } from 'next/router';
import { server } from '../../config';

import { Markdown } from '../../components/Markdown';
import { useQuery } from '@tanstack/react-query';
import { fetchSinglePost } from '../../lib/fetchers';

const sectionStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin-top: 80px;
  & > h1 {
    font-size: 48px;
    text-align: center;
    overflow-wrap: break-word;
    word-break: keep-all;
    @media (max-width: 768px) {
      font-size: 32px;
    }
  }
  & > p {
    @media (max-width: 768px) {
      font-size: 12px;
      color: #f2f4f6;
    }
  }
`;

const imgStyle = css`
  border-radius: 20px;
  margin-bottom: 40px;
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

export default function SinglePost() {
  const router = useRouter();
  const postId = router.query.id as string;
  const { isLoading, isSuccess, isError, data, error } = useQuery(
    ['single-post', router.query.id],
    () => fetchSinglePost(postId),
    { staleTime: 3000 }
  );

  if (isLoading) {
    console.log(`Loading post ${postId}...`);
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
  const post = data as PostContentType;

  return (
    <ArticleLayout>
      <section css={sectionStyle}>
        <h1>{post && post.title}</h1>
        <p>{post && post.date}</p>
        {post && (
          <Image
            css={imgStyle}
            src={post.imgLink as string}
            alt={post.title}
            width={700}
            height={430}
          />
        )}
        {post && <Markdown content={post.content} />}
      </section>
    </ArticleLayout>
  );
}
