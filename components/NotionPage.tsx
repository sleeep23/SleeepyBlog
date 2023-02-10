import React from 'react';
import Head from 'next/head';

import { ExtendedRecordMap } from 'notion-types';
import { getPageTitle } from 'notion-utils';
import { NotionRenderer } from 'react-notion-x';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { css } from '@emotion/react';

export const imgStyle = css`
  width: 100%;
  border-radius: 20px;
  margin: 40px 0;
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const Code = dynamic(() =>
  import('react-notion-x/build/third-party/code').then(async (m) => {
    await Promise.all([
      //@ts-ignore
      import('prismjs/components/prism-markup-templating.js'),
      //@ts-ignore
      import('prismjs/components/prism-markup.js'),
      //@ts-ignore
      import('prismjs/components/prism-bash.js'),
      //@ts-ignore
      import('prismjs/components/prism-c.js'),
      //@ts-ignore
      import('prismjs/components/prism-cpp.js'),
      //@ts-ignore
      import('prismjs/components/prism-csharp.js'),
      //@ts-ignore
      import('prismjs/components/prism-docker.js'),
      //@ts-ignore
      import('prismjs/components/prism-java.js'),
      //@ts-ignore
      import('prismjs/components/prism-js-templates.js'),
      //@ts-ignore
      import('prismjs/components/prism-coffeescript.js'),
      //@ts-ignore
      import('prismjs/components/prism-diff.js'),
      //@ts-ignore
      import('prismjs/components/prism-git.js'),
      //@ts-ignore
      import('prismjs/components/prism-go.js'),
      //@ts-ignore
      import('prismjs/components/prism-graphql.js'),
      //@ts-ignore
      import('prismjs/components/prism-handlebars.js'),
      //@ts-ignore
      import('prismjs/components/prism-less.js'),
      //@ts-ignore
      import('prismjs/components/prism-makefile.js'),
      //@ts-ignore
      import('prismjs/components/prism-markdown.js'),
      //@ts-ignore
      import('prismjs/components/prism-objectivec.js'),
      //@ts-ignore
      import('prismjs/components/prism-ocaml.js'),
      //@ts-ignore
      import('prismjs/components/prism-python.js'),
      //@ts-ignore
      import('prismjs/components/prism-reason.js'),
      //@ts-ignore
      import('prismjs/components/prism-rust.js'),
      //@ts-ignore
      import('prismjs/components/prism-sass.js'),
      //@ts-ignore
      import('prismjs/components/prism-scss.js'),
      //@ts-ignore
      import('prismjs/components/prism-solidity.js'),
      //@ts-ignore
      import('prismjs/components/prism-sql.js'),
      //@ts-ignore
      import('prismjs/components/prism-stylus.js'),
      //@ts-ignore
      import('prismjs/components/prism-swift.js'),
      //@ts-ignore
      import('prismjs/components/prism-wasm.js'),
      //@ts-ignore
      import('prismjs/components/prism-yaml.js'),
    ]);
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
