import React from 'react';
import Header from './header';
import Footer from './footer';
import { css } from '@emotion/react';

const contentStyle = css`
  width: 100%;
  height: calc(100% - 60px);
  padding: 0 150px;
  background-color: #1f2028;
`;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div css={contentStyle}>{children}</div>
      {/*<Footer />*/}
    </>
  );
}
