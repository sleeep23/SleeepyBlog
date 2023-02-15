import React from 'react';
import Head from 'next/head';

function PageHead({
  title,
  description,
  url,
  rssFeedUrl,
  site,
}: {
  title: string;
  description?: string;
  url?: string;
  rssFeedUrl?: string;
  site?: { name: string };
}) {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />

      <meta name="robots" content="index,follow" />
      <meta property="og:type" content="website" />

      {description && (
        <>
          <meta name="description" content={description} />
          <meta property="og:description" content={description} />
          <meta name="twitter:description" content={description} />
        </>
      )}

      {url && (
        <>
          <link rel="canonical" href={url} />
          <meta property="og:url" content={url} />
          <meta property="twitter:url" content={url} />
        </>
      )}

      <link
        rel="alternate"
        type="application/rss+xml"
        href={rssFeedUrl}
        title={site?.name}
      />

      <meta property="og:title" content={title} />
      <meta name="twitter:title" content={title} />
      <title>{title}</title>
    </Head>
  );
}

export default PageHead;
