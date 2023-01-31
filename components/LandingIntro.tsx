import React from 'react';
import { css } from '@emotion/react';
import Link from 'next/link';

export const layout = css`
  width: 100%;
  padding: 120px 0;
  p:nth-of-type(3) {
    font-size: 22px;
    & > span {
      font-size: inherit;
      font-weight: inherit;
      border-bottom: 1px solid black;
    }
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
  & > p {
    font-size: 36px;
    font-weight: 300;
    line-height: 54px;
    padding: 20px 0;
    color: #444452;
    max-width: 700px;
    white-space: pre-wrap;
    overflow-wrap: break-word;
    word-break: keep-all;
  }
  & > p > span {
    font-size: 36px;
    font-weight: 700;
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
    <section css={[layout, landingStyle]}>
      <p>Hi, there? 👋</p>
      <p>
        I&apos;m
        <span> Dongho Seo</span>, a front-end developer 🧑‍💻 focused on enhancing
        user experience and interface.
      </p>
      <p>
        Contact 👉 <span>ehcws333@gm.gist.ac.kr</span>{' '}
      </p>
      <div>
        <Link href="/posts">Checkout my writings!</Link>
      </div>
    </section>
  );
}

export default LandingIntro;
