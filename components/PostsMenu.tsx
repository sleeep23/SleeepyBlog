import React, { useState } from 'react';
import { css } from '@emotion/react';

const sectionStyle = css`
  width: 100%;
  padding: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 40px;
  button {
    color: white;
    &:hover {
      text-decoration: underline;
    }
    &:visited {
      color: unset;
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
  const [isClicked, setIsClicked] = useState<boolean>(true);
  return (
    <section css={sectionStyle}>
      <button onClick={() => setCntMenu(() => 'All')}>All</button>
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
