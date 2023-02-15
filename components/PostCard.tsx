import React, { Fragment } from 'react';
import Tags from './Tags';
import { PostThumbnailType } from '../lib/type';
import Link from 'next/link';
import { css } from '@emotion/react';
import Image from 'next/image';

export const tagAndDateStyle = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  p {
    font-size: 10px;
    margin: 0;
  }
  @media (max-width: 768px) {
    gap: 10px;
    flex-direction: column;
    align-items: flex-start;
    p {
      margin: 0;
    }
  }
`;

export const imgStyle = css`
  border-radius: 16px;
  object-fit: cover;
  object-position: center;
  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
  }
`;
export const contentStyle = css`
  display: block;
  width: 528px;
  height: 100%;
  padding: 20px;
  gap: 10px;
  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
  }
  h1,
  p {
    display: block;
    margin-bottom: 10px;
    word-break: keep-all;
    text-decoration-thickness: auto;
  }
  h1 {
    font-size: 24px;
`;
export const linkStyle = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 40px;
  width: 100%;
  color: #f2f4f6;

  &:visited {
    color: #f2f4f6;
  }
  &:hover {
    & h1 {
      text-decoration: underline;
    }
    & img {
      transform: translateY(-4px);
      box-shadow: 0 8px 16px -12px #4e5968;
      transition: 0.3s ease-in-out;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const heading = css`
  font-size: 40px;
  margin-bottom: 20px;
`;

const postNotExisting = css`
  width: 100%;
  height: auto;
  padding: 40px;
  text-align: center;
  font-size: 28px;
  opacity: 0.5;
`;

function PostCard({
  posts,
  cntMenu,
}: {
  posts: PostThumbnailType[] | undefined;
  cntMenu: string;
}) {
  const to = (id: string) => {
    return `/posts/${id}`;
  };
  return (
    <>
      <h1 css={heading}>{cntMenu}</h1>
      {posts &&
        posts.length > 0 &&
        posts.map((post) => {
          return (
            <Link key={post.id} href={to(post?.id)} css={linkStyle}>
              {post.imgLink && (
                <Image
                  src={post.imgLink}
                  alt={post.title}
                  width={200}
                  height={200}
                  css={imgStyle}
                />
              )}
              <section css={contentStyle}>
                <h1>{post.title}</h1>
                <p>{post.description}</p>
                <section css={tagAndDateStyle}>
                  <p>{post.date}</p>
                  <Tags tags={post.tags} />
                </section>
              </section>
            </Link>
          );
        })}
      {!posts ||
        (posts.length === 0 && <div css={postNotExisting}>No Posts Yet!</div>)}
    </>
  );
}

export default PostCard;
