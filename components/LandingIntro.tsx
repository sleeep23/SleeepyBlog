import React from 'react';
import { css } from '@emotion/react';
import Link from 'next/link';
import Lottie from 'lottie-react';
import Blob from '../public/lottie/blob.svg';
// @ts-ignore
import * as astronaut from '/public/lottie/astronaut.json';

const lottieStyle: React.CSSProperties = {
  width: 500,
  height: 500,
};

const blobStyle = css`
  position: absolute;
`;

const lottieContainer = css`
  width: fit-content;
  height: fit-content;
  position: relative;
  & > img {
    position: absolute;
    border-radius: 40px;
    object-fit: cover;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.3);
    opacity: 0.5;
  }
  @media (max-width: 800px) {
    display: none;
  }
`;

export const layout = css`
  width: 100%;
  padding: 120px 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  justify-content: flex-start;
  gap: 40px;
  align-items: flex-end;
  p:nth-of-type(3) {
    font-size: 22px;
  }
`;

const landingStyle = css`
  color: white;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  font-weight: lighter;
  background-color: inherit;
  & > p {
    font-size: 28px;
    font-weight: 300;
    line-height: 54px;
    padding: 20px 0;
    color: white;
    max-width: 600px;
    white-space: pre-wrap;
    overflow-wrap: break-word;
    word-break: keep-all;
  }
  & > p:nth-of-type(2) > span {
    font-size: 32px;
    font-weight: 700;
  }
  & > p:nth-of-type(3) > a {
    color: inherit;
    padding: 2px 3px;
    border-bottom: 2px solid #3182f6;
    transition: 0.2s;
    :visited {
      color: unset;
    }
    :hover {
      box-shadow: inset 0 -33px 0 0 #3182f6;
      cursor: pointer;
    }
  }
  & > div {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    p {
      font-size: 24px;
      font-weight: 300;
      color: #444452;
    }
    a {
      width: fit-content;
      padding: 1.25rem 1.75rem;
      border-radius: 7px;
      display: inline-flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 1rem;
      font-weight: 600;
      background-color: #3182f6;
      color: #f9fafb;
      text-align: center;
      vertical-align: middle;
      :hover {
        background-color: #1b64da;
        transition: 0.2s;
      }
    }
  }
`;

function LandingIntro() {
  const space =
    'https://static.vecteezy.com/system/resources/previews/007/120/314/large_2x/galaxy-background-with-falling-star-space-galaxy-illustration-free-vector.jpg';
  return (
    <section css={[layout]}>
      <div css={landingStyle}>
        <p>Hi, there? 👋</p>
        <p>
          I&apos;m
          <span> Dongho Seo</span>, a front-end developer 🧑‍💻 focused on
          enhancing user experience and interface.
        </p>
        <p>
          Contact 👉{' '}
          <a
            href="mailto:ehcws333@gm.gist.ac.kr"
            target="_blank"
            rel="noreferrer"
          >
            ehcws333@gm.gist.ac.kr
          </a>
        </p>
        <div>
          <Link href="/posts">Checkout my writings!</Link>
        </div>
      </div>
      <div css={lottieContainer}>
        <Blob css={blobStyle} />
        <Lottie animationData={astronaut} style={lottieStyle} />
      </div>
    </section>
  );
}

export default LandingIntro;
