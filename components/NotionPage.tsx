import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';

import { ExtendedRecordMap } from 'notion-types';
import { getPageTitle } from 'notion-utils';
import { NotionRenderer } from 'react-notion-x';
import PageHead from './PageHead';
import { server } from '../config';
import useThemeValue from '../lib/Hooks/useThemeValue';

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

export const NotionPage = ({
  recordMap,
  isLightTheme,
}: {
  recordMap: ExtendedRecordMap;
  isLightTheme: boolean;
}) => {
  if (!recordMap) {
    return null;
  }
  const title = getPageTitle(recordMap);
  const key = Object.keys(recordMap.block).at(0) as string;
  const postId = recordMap.block[key].value.parent_id;
  const url = `${server}/posts/${postId}`;
  return (
    <>
      <PageHead title={title} url={url} />
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
        darkMode={!isLightTheme}
        previewImages={!!recordMap.preview_images}
      />
    </>
  );
};
