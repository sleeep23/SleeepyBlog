import React from 'react';
import { layout } from './LandingIntro';
import { css } from '@emotion/react';

export const bgStyle = css`
  background-color: inherit;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  & > h1 {
    color: white;
    font-size: 24px;
    border-left: 4px solid gray;
    padding: 0 16px;
  }
  & > div {
    color: white;
  }
`;

function LandingBackground() {
  return (
    <section css={[layout, bgStyle]}>
      <h1>Background</h1>
    </section>
  );
}

export default LandingBackground;
