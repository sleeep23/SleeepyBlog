import React from 'react';
import { css } from '@emotion/react';
import Link from 'next/link';
import Lottie from 'lottie-react';
// @ts-ignore
import * as astronaut from '/public/lottie/astronaut.json';

const lottieStyle: React.CSSProperties = {
  width: 500,
  height: 500,
};

const lottieContainer = css`
  width: fit-content;
  height: fit-content;
  @media (max-width: 1000px) {
    position: relative;
    justify-content: center;
  }
`;

export const layout = css`
  width: 100%;
  padding: 120px 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 40px;
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
  & > p:nth-of-type(3) > span {
    padding: 2px 3px;
    border-bottom: 2px solid #3182f6;
    transition: 0.2s;
    :hover {
      box-shadow: inset 0 -33px 0 0 #3182f6;
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
          Contact 👉 <span>ehcws333@gm.gist.ac.kr</span>{' '}
        </p>
        <div>
          <Link href="/posts">Checkout my writings!</Link>
        </div>
      </div>
      <div css={lottieContainer}>
        <Lottie animationData={astronaut} style={lottieStyle} />
      </div>
    </section>
  );
}

export default LandingIntro;
