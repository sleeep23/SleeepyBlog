import React from 'react';
import Head from 'next/head';

import { ExtendedRecordMap } from 'notion-types';
import { getPageTitle } from 'notion-utils';
import { NotionRenderer } from 'react-notion-x';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const Code = dynamic(() =>
  import('react-notion-x/build/third-party/code').then(async (m) => {
    return m.Code;
  })
);

const Collection = dynamic(() =>
  import('react-notion-x/build/third-party/collection').then(
    (m) => m.Collection
  )
);
const Equation = dynamic(() =>
  import('react-notion-x/build/third-party/equation').then((m) => m.Equation)
);
const Pdf = dynamic(
  () => import('react-notion-x/build/third-party/pdf').then((m) => m.Pdf),
  {
    ssr: false,
  }
);
const Modal = dynamic(
  () => import('react-notion-x/build/third-party/modal').then((m) => m.Modal),
  {
    ssr: false,
  }
);

export const NotionPage = ({ recordMap }: { recordMap: ExtendedRecordMap }) => {
  if (!recordMap) {
    return null;
  }
  const title = getPageTitle(recordMap);
  return (
    <>
      <Head>
        <meta name="description" content="React Notion X Minimal Demo" />
        <title>{title}</title>
      </Head>
      <NotionRenderer
        recordMap={recordMap}
        components={{
          nextLink: Link,
          nextImage: Image,
          Collection,
          Equation,
          Pdf,
          Modal,
          Code,
        }}
        fullPage={false}
        darkMode={true}
        previewImages={!!recordMap.preview_images}
      />
    </>
  );
};
