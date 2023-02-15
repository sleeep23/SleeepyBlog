import React from 'react';
import Giscus from '@giscus/react';
import { css } from '@emotion/react';

const chatSectionStyle = css`
  width: 100%;
  padding: 0 40px;
`;

function Chatting() {
  return (
    <section css={chatSectionStyle}>
      <Giscus
        repo="sleeep23/SleeepyBlog"
        repoId="R_kgDOI0BIXQ"
        category="General"
        categoryId="DIC_kwDOI0BIXc4CUMpy"
        mapping="title"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="dark"
        lang="ko"
        loading="lazy"
      />
    </section>
  );
}

export default Chatting;
