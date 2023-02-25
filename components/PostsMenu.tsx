import React, { useState } from 'react';
import { css } from '@emotion/react';

function PostsMenu({
  setCntMenu,
  menuItems,
}: {
  setCntMenu: React.Dispatch<React.SetStateAction<string>>;
  menuItems: string[] | undefined;
}) {
  return (
    <section css={menuSectionStyle}>
      {menuItems &&
        menuItems.map((item) => {
          return (
            <button
              style={{ color: 'var(--color-text)' }}
              key={item}
              onClick={() => setCntMenu(() => item)}
            >
              {item}
            </button>
          );
        })}
    </section>
  );
}

export const menuSectionStyle = css`
  color: inherit;
  width: 100%;
  padding: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 40px;
  button {
    &:hover {
      text-decoration: underline;
    }
    &:visited {
      color: inherit;
    }
  }
`;

export default PostsMenu;
