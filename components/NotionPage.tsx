import React from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';

import { NotionRenderer } from 'react-notion-x';
import { ExtendedRecordMap } from 'notion-types';
import notion from '../lib/notion';
import { getPageTitle } from 'notion-utils';

const Code = dynamic(() =>
  import('react-notion-x/build/third-party/code').then(
    async (data) => data.Code
  )
);
const Collection = dynamic(() =>
  import('react-notion-x/build/third-party/collection').then(
    async (data) => data.Collection
  )
);
const Equation = dynamic(() =>
  import('react-notion-x/build/third-party/equation').then(
    async (data) => data.Equation
  )
);
const Pdf = dynamic(
  () =>
    import('react-notion-x/build/third-party/pdf').then(
      async (data) => data.Pdf
    ),
  {
    ssr: false,
  }
);
const Modal = dynamic(
  () =>
    import('react-notion-x/build/third-party/modal').then(
      async (data) => data.Modal
    ),
  { ssr: false }
);

function NotionPage({
  recordMap,
  rootPageId,
}: {
  recordMap: ExtendedRecordMap;
  rootPageId?: string;
}) {
  if (!recordMap) {
    return null;
  }

  const title = getPageTitle(recordMap);
  console.log(title);
  return (
    <>
      <Head>
        <meta name="description" content="Sleeep23의 개발 블로그" />
        <title>{title}</title>
      </Head>
      <NotionRenderer
        recordMap={recordMap}
        fullPage={true}
        darkMode={false}
        rootPageId={rootPageId}
      />
    </>
  );
}

export default NotionPage;
