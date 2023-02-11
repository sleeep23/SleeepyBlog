import React from 'react';
import ArticleLayout from '../../components/layout/articleLayout';
import { css } from '@emotion/react';
import Image from 'next/image';

import notion from '../../lib/notion';
import { ExtendedRecordMap } from 'notion-types';
import { NotionPage } from '../../components/NotionPage';
import { getPageTitle } from 'notion-utils';
import axios from 'axios';
import { server } from '../../config';
import { PostThumbnailType } from '../../lib/type';

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
  width: 700px;
  border-radius: 20px;
  margin: 10px 0 0 0;
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

interface ContextType {
  params: {
    id: string;
  };
}

export const getStaticProps = async (context: ContextType) => {
  const postId = context.params.id as string;
  const recordMap = await notion.getPage(postId);

  return {
    props: {
      recordMap,
    },
    revalidate: 300,
  };
};

export async function getStaticPaths() {
  const res = await axios.get(`${server}/api/posts`);
  const databases = Object.keys(res.data.posts);
  let postIds: string[] = [];
  databases.map((key) => {
    res.data.posts[key]
      .filter((item: PostThumbnailType) => item !== null)
      .map((item: PostThumbnailType) => postIds.push(item.id));
  });
  const paths = postIds.map((postId: string) => {
    return {
      params: { id: postId },
    };
  });
  return {
    paths,
    fallback: true,
  };
}

const getImagePath = (recordMap: ExtendedRecordMap) => {
  const cover_section_key = Object.keys(recordMap.block).at(0) as string;
  return recordMap.block[cover_section_key].value.format.page_cover;
};

export default function SinglePost({
  recordMap,
}: {
  recordMap: ExtendedRecordMap;
}) {
  if (recordMap) {
    const title = getPageTitle(recordMap);
    const src = getImagePath(recordMap);
    return (
      <ArticleLayout>
        <section css={sectionStyle}>
          <h1>{title}</h1>
          <Image
            css={imgStyle}
            src={src}
            alt={title}
            width={700}
            height={500}
          />
          <NotionPage recordMap={recordMap} />
        </section>
      </ArticleLayout>
    );
  }
}
