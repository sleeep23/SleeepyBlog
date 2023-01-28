/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Head from 'next/head';
import Layout from '../components/layout/layout';

const containerStyle = css`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const landingStyle = css`
  color: white;
  font-size: 24px;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: gray;
`;

const introStyle = css`
  font-size: 40px;
  padding: 80px;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Sleeepy Blog</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div css={containerStyle}>
          <section css={landingStyle}>
            <p css={introStyle}>Hello I&apos;m Sleeep23 👋</p>
          </section>
        </div>
      </Layout>
    </>
  );
}
