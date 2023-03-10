import React from 'react';
import Header from './Header';
import { css } from '@emotion/react';
import Footer from './Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div css={contentStyle}>{children}</div>
      {/*<Footer />*/}
    </>
  );
}

const contentStyle = css`
  display: block;
  position: relative;
  width: 100%;
  height: calc(100% - 60px);
  margin-top: 60px;
  padding: 0 150px;
  @media (max-width: 768px) {
    padding: 40px;
  }
`;
