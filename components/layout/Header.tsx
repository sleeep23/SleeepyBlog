// /** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Container = css`
  width: 100%;
  height: 60px;
  padding: 0 20px;
  background: inherit;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 100;
  top: 0;
`;

const LinkContainer = css`
  width: 900px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  li {
    list-style: none;
  }
`;

const logo = css`
  color: white;
  :visited {
    color: white;
  }
`;

const link = css`
  color: white;
  padding: 11px 16px;
  border-radius: 6px;
  :visited {
    color: white;
  }
  :hover {
    transition: 0.15s;
    background-color: #333d4b;
  }
`;

export default function Header() {
  return (
    <>
      <div css={Container}>
        <h2>
          <Link href="/" css={logo}>
            Sleep23&apos;s Space
          </Link>
        </h2>
        <div css={LinkContainer}>
          <li>
            <Link href="/posts" css={link}>
              Writings
            </Link>
          </li>
        </div>
      </div>
    </>
  );
}
