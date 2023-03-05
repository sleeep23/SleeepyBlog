import { css } from '@emotion/react';
import Link from 'next/link';
import ThemeController from '../ThemeController';

export default function Header() {
  return (
    <>
      <div css={Container}>
        <h2>
          <Link href="/" css={logo}>
            Sleep23&apos;s Space
          </Link>
        </h2>
        <ul css={linkContainer}>
          <li>
            <Link href="/posts" css={link}>
              Posts
            </Link>
          </li>
          <li>
            <div css={lightSwitch}>
              <ThemeController />
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

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

const linkContainer = css`
  width: 900px;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  li {
    list-style: none;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const logo = css`
  color: var(--color-text);
  :visited {
    color: inherit;
  }
`;

const link = css`
  padding: 11px 16px;
  border-radius: 6px;
  color: var(--color-text);
  :visited {
    color: inherit;
  }
  :hover {
    transition: 0.15s;
    background-color: var(--color-btn-hover);
  }
`;

const lightSwitch = css`
  box-sizing: border-box;
  position: relative;
  width: 80px;
  height: fit-content;
  padding: 11px 16px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
