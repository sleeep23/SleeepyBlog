import React, { useEffect, useMemo, useState } from 'react';
import ArticleLayout from '../../components/layout/articleLayout';
import { css } from '@emotion/react';

import { PostContentType } from '../../lib/type';
import { useRouter } from 'next/router';
import { server } from '../../config';

import { Markdown } from '../../components/Markdown';

const sectionStyle = css`
  margin-top: 40px;
`;

export const getPostContent = async (id: string) => {
  const res = await fetch(`${server}/api/posts/${id}`);
  return res.json();
};

export default function SinglePost() {
  const [postContent, setPostContent] = useState<PostContentType | undefined>(
    undefined
  );
  const router = useRouter();
  const { id } = useMemo(() => {
    return router.query;
  }, [router.query]);

  useEffect(() => {
    const getFn = async () => {
      if (id) {
        const content = await getPostContent(id as string);
        setPostContent(() => content);
      }
    };
    getFn();
  }, [id]);

  return (
    <ArticleLayout>
      <section css={sectionStyle}>
        {postContent && <Markdown content={postContent.content} />}
      </section>
    </ArticleLayout>
  );
}
