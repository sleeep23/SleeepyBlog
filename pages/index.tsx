/** @jsxImportSource @emotion/react */
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import LandingIntro from '../components/LandingIntro';
import LandingSideSocialLinks from '../components/LandingSideSocialLinks';

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content="Sleeep23's Blog" />
        <link rel="icon" href="/sleepyFace.ico" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sleeep23's Blog" />
        <meta name="og:description" content="Sleeep23's Blog" />

        <meta name="robots" content="index,follow" />

        <title>Sleeepy Blog</title>
      </Head>
      <Layout>
        <LandingSideSocialLinks />
        <LandingIntro />
      </Layout>
    </>
  );
}
