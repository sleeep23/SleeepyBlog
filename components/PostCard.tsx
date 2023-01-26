import React, { Fragment } from 'react';
import Tags from './Tags';
import { PostThumbnailType } from '../lib/type';
import Link from 'next/link';
import { css } from '@emotion/react';
import Image from 'next/image';

const tagAndDateStyle = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  p {
    font-size: 10px;
  }
`;

const imgStyle = css`
  border-radius: 16px;
  background-size: cover;
`;
const contentStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 20px;
  gap: 10px;
`;
const linkStyle = css`
  color: black;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 40px;
  width: 100%;
  h2 p section {
    display: block;
    margin: 4px;
    line-height: 1.8rem;
  }
  h1 {
    font-size: 24px;
  }
  &:visited {
    color: unset;
  }
  &:hover {
    & h1 {
      text-decoration: underline;
    }
    & img {
      transform: translateY(-4px);
      box-shadow: 0 8px 16px -12px #b0b8c1;
      transition: 0.3s ease-in-out;
    }
  }
`;

function PostCard({ cntPost }: { cntPost: PostThumbnailType[] | undefined }) {
  const to = (id: string) => {
    return `/posts/${id}`;
  };
  console.log(cntPost);
  return (
    <>
      {cntPost &&
        cntPost.map((post) => {
          return (
            <Link key={post.id} href={to(post.id)} css={linkStyle}>
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
    </>
  );
}

export default PostCard;
