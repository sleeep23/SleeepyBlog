/** @jsxImportSource @emotion/react */
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import LandingIntro from '../components/LandingIntro';
import LandingSideSocialLinks from '../components/LandingSideSocialLinks';
import ArticleLayout from '../components/layout/ArticleLayout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Sleeepy Blog</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ArticleLayout showProgress={false}>
        <LandingSideSocialLinks />
        <LandingIntro />
      </ArticleLayout>
    </>
  );
}
