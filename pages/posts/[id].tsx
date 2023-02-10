import React from 'react';
import ArticleLayout from '../../components/layout/articleLayout';
import { css } from '@emotion/react';
import Image from 'next/image';

import notion from '../../lib/notion';
import { ExtendedRecordMap } from 'notion-types';
import { imgStyle, NotionPage } from '../../components/NotionPage';
import { getPageTitle } from 'notion-utils';

const sectionStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 60px;
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
    revalidate: 10,
  };
};

export async function getStaticPaths() {
  return {
    paths: [],
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
            alt={'title'}
            width={700}
            height={430}
          />
          <NotionPage recordMap={recordMap} />
        </section>
      </ArticleLayout>
    );
  }
}
