import React, { useState } from 'react';
import { css } from '@emotion/react';

export const menuSectionStyle = css`
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
            <button key={item} onClick={() => setCntMenu(() => item)}>
              {item}
            </button>
          );
        })}
    </section>
  );
}

export default PostsMenu;
