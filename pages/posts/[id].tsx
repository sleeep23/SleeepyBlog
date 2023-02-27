import React from 'react';
import { css } from '@emotion/react';

import Image from 'next/image';
import ArticleLayout from '../../components/layout/ArticleLayout';
import { NotionPage } from '../../components/NotionPage';

import notion from '../../lib/notion';
import { ExtendedRecordMap } from 'notion-types';
import { getPageTitle } from 'notion-utils';

import { rootNotionPageId, server } from '../../config';
import { getChildPageIds, getDb } from '../api/posts';
import Chatting from '../../components/Chatting';
import useThemeValue from '../../lib/Hooks/useThemeValue';

interface ContextType {
  params: {
    id: string;
  };
}

export default function SinglePost({
  recordMap,
}: {
  recordMap: ExtendedRecordMap;
}) {
  const isLightTheme = useThemeValue();
  const title = getPageTitle(recordMap);
  const src = getImagePath(recordMap);
  return (
    <ArticleLayout showProgress={true}>
      <section css={contentStyle}>
        <h1>{title}</h1>
        <Image css={imgStyle} src={src} alt={title} width={700} height={500} />
        <NotionPage recordMap={recordMap} isLightTheme={isLightTheme} />
        <Chatting isLightTheme={isLightTheme} />
      </section>
    </ArticleLayout>
  );
}
const getImagePath = (recordMap: ExtendedRecordMap) => {
  const cover_section_key = Object.keys(recordMap.block).at(0) as string;
  return recordMap.block[cover_section_key].value.format.page_cover;
};

export async function getStaticPaths() {
  let postIds: string[] = [];
  const parentPage = await notion.getPage(rootNotionPageId);
  await Promise.all(
    Object.keys(parentPage.collection).map(async (key) => {
      const db = await getDb(parentPage.collection, key);
      const childIds = await getChildPageIds(db);
      if (childIds) {
        postIds = [...childIds, ...postIds];
      }
    })
  );
  const paths = await Promise.all(
    postIds.map((postId: string) => {
      return {
        params: { id: postId },
      };
    })
  );
  return {
    paths,
    fallback: 'blocking',
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

const contentStyle = css`
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
    height: 400px;
  }
  @media (max-width: 480px) {
    width: 100%;
    height: 280px;
  }
`;
