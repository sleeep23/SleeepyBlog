import React from 'react';
import { layout } from './LandingIntro';
import { bgStyle } from './LandingBackground';

function LandingSkills() {
  return (
    <section css={[layout, bgStyle]}>
      <h1>Skills</h1>
    </section>
  );
}

export default LandingSkills;
