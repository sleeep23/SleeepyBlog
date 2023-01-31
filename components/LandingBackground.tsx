import React from 'react';
import { layout } from './LandingIntro';
import { css } from '@emotion/react';

export const bgStyle = css`
  background-color: inherit;
  & > h1 {
    color: white;
    font-size: 24px;
    border-left: 4px solid gray;
    padding: 0 16px;
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
