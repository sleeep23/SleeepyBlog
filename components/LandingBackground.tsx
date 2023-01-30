import React from 'react';
import { css } from '@emotion/react';

export const contentLayout = css`
  width: 100%;
  padding: 100px;
  background-color: navajowhite;
`;

function LandingBackground() {
  return <div css={contentLayout}>Background Section</div>;
}

export default LandingBackground;
