import React from 'react';
import Header from './header';
import Footer from './footer';
import { css } from '@emotion/react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div
        css={css`
          width: 100%;
          margin: 0 auto;
        `}
      >
        {children}
      </div>
      <Footer />
    </>
  );
}
