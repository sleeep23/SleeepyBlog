import React from 'react';
import Header from './header';
import Footer from './footer';
import { css } from '@emotion/react';

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const contentStyle = css`
    max-width: 700px;
    margin: 0 auto 120px auto;
    @media (max-width: 768px) {
      padding: 0 16px 120px 16px;
    }
  `;
  return (
    <>
      <Header />
      <div css={contentStyle}>{children}</div>
      {/*<Footer />*/}
    </>
  );
}
