import React from 'react';
import { css } from '@emotion/react';
import Link from 'next/link';
import Github from '../public/icons/github.svg';
import Instagram from '../public/icons/instagram.svg';
import Twitter from '../public/icons/twitter.svg';

const sideStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  position: fixed;
  left: 40px;
  bottom: 0;
  width: 40px;
  color: var(--color-text);
  & > div {
    margin: 0 19.5px;
    border-left: 2px solid var(--color-text);
    height: 160px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const iconStyle = css`
  fill: var(--color-text);
`;

function LandingSideSocialLinks() {
  return (
    <div css={sideStyle}>
      <Link href="https://github.com/sleeep23" target="_blank">
        <Github css={iconStyle} />
      </Link>
      <Link href="https://www.instagram.com/sdh_0923/" target="_blank">
        <Instagram css={iconStyle} />
      </Link>
      <Link href="https://twitter.com/sleeep23_" target="_blank">
        <Twitter css={iconStyle} />
      </Link>
      <div />
    </div>
  );
}

export default LandingSideSocialLinks;
