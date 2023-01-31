// /** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Link from 'next/link';

export default function Header() {
  const Container = styled.div`
    width: 100%;
    height: 60px;
    padding: 0 20px;
    background-color: white;
    color: black;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: sticky;
    border-bottom: 1px solid rgba(0, 27, 55, 0.1);
  `;
  const LinkContainer = styled.ul`
    width: 900px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    li {
      list-style: none;
    }
  `;
  return (
    <>
      <Container>
        <h2>
          <Link
            href="/"
            css={css`
              :visited {
                color: black;
              }
            `}
          >
            Sleep23&apos;s Space
          </Link>
        </h2>
        <LinkContainer>
          <li>
            <Link
              href="/posts"
              css={css`
                padding: 11px 16px;
                border-radius: 6px;
                :visited {
                  color: black;
                }
                :hover {
                  transition: 0.15s;
                  background-color: #e5e8eb;
                }
              `}
            >
              Writings
            </Link>
          </li>
        </LinkContainer>
      </Container>
    </>
  );
}
