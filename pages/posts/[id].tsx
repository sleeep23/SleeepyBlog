import React, { useEffect, useMemo, useState } from 'react';
import ArticleLayout from '../../components/layout/articleLayout';
import { useRouter } from 'next/router';
import { PostContentType } from '../../lib/type';
import { server } from '../../config';
import dompurify from 'dompurify';
import { marked } from 'marked';

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

  const md_to_html = (string: string) => {
    return dompurify.sanitize(marked.parse(string));
  };

  return (
    <ArticleLayout>
      <p style={{ padding: '20px' }}>
        Post Id : <br />
        {postContent?.id}
      </p>
      <p style={{ padding: '20px' }}>
        Post Markdown : <br />
        {postContent && (
          <div
            dangerouslySetInnerHTML={{
              __html: md_to_html(postContent.content as string),
            }}
          ></div>
        )}
      </p>
    </ArticleLayout>
  );
}
