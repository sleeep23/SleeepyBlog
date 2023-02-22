import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { css } from '@emotion/react';

const contentStyle = css`
  position: relative;
  max-width: 768px;
  margin: 60px auto 60px auto;
  @media (max-width: 768px) {
    padding: 0 16px 120px 16px;
  }
`;

export default function ArticleLayout({
  children,
  showProgress,
}: {
  children: React.ReactNode;
  showProgress: boolean;
}) {
  const [onScroll, setOnScroll] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      setScrollProgress(scrollTop / scrollHeight);
      if (scrollTop / scrollHeight !== 0) {
        setOnScroll(true);
      } else {
        setOnScroll(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const headerBgColor = onScroll ? '#191919' : 'inherit';
  const headerTextColor = onScroll ? 'var(--color-text-header)' : 'inherit';
  const displayProgressBar = showProgress ? 'visible' : 'none';
  return (
    <>
      <div
        css={css`
          position: fixed;
          color: ${headerTextColor};
          background: ${headerBgColor};
          transition: ease-in 0.25s;
          z-index: 100;
        `}
      >
        <Header />
      </div>
      <div
        css={css`
          display: ${displayProgressBar};
          height: 1.5px;
          width: 100%;
          background-color: #2563e8;
          position: fixed;
          z-index: 100;
          top: 60px;
          left: 0;
          right: 0;
          transform-origin: 0 0;
          transform: scaleX(${scrollProgress});
        `}
      />
      <div css={contentStyle}>{children}</div>
      {/*<Footer />*/}
    </>
  );
}
