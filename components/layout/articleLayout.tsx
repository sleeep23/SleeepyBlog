import React from 'react';
import Header from './header';
import Footer from './footer';
import { css } from '@emotion/react';

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const mainStyle = css`
    max-width: 768px;
    margin: 0 auto;
  `;
  return (
    <>
      <Header />
      <main css={mainStyle}>{children}</main>
      <Footer />
    </>
  );
}
