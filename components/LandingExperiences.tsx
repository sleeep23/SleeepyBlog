import React from 'react';
import { layout } from './LandingIntro';
import { bgStyle } from './LandingBackground';

function LandingExperiences() {
  return (
    <section css={[layout, bgStyle]}>
      <h1>Experiences</h1>
    </section>
  );
}

export default LandingExperiences;
