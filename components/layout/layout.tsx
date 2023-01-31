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
          padding: 0 150px;
          background-color: #333d4b;
        `}
      >
        {children}
      </div>
      <Footer />
    </>
  );
}
