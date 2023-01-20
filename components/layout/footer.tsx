import { css } from '@emotion/react';

export default function Footer() {
  return (
    <>
      <div
        css={css`
          width: 100%;
          padding: 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        `}
      >
        <h2>Footer</h2>
      </div>
    </>
  );
}
