// /** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Link from 'next/link';

const liStyle = css`
  height: 100%;
  padding: 0 8px;
`;

export default function Header() {
  const Container = styled.div`
    width: 100%;
    height: 60px;
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
            Logo
          </Link>
        </h2>
        <LinkContainer>
          <li>
            <Link href="/posts">Writings</Link>
          </li>
        </LinkContainer>
      </Container>
    </>
  );
}
