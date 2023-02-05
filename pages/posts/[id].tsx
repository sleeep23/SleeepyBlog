import React, { useEffect, useMemo, useState } from 'react';
import ArticleLayout from '../../components/layout/articleLayout';
import { css } from '@emotion/react';
import Image from 'next/image';

import { PostContentType } from '../../lib/type';
import { useRouter } from 'next/router';
import { server } from '../../config';

import { Markdown } from '../../components/Markdown';

const sectionStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin-top: 40px;
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

export const getPost = async (id: string) => {
  const res = await fetch(`${server}/api/posts/${id}`);
  return res.json();
};

export default function SinglePost() {
  const [post, setPost] = useState<PostContentType | undefined>(undefined);
  const router = useRouter();
  const { id } = useMemo(() => {
    return router.query;
  }, [router.query]);

  useEffect(() => {
    const getFn = async () => {
      if (id) {
        const content = await getPost(id as string);
        setPost(() => content);
      }
    };
    getFn();
  }, [id]);

  return (
    <ArticleLayout>
      <section css={sectionStyle}>
        <h1>{post?.title}</h1>
        <p>{post?.date}</p>
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
