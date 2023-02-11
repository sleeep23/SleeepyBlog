import React from 'react';
import styled from '@emotion/styled';
import { TagType } from '../lib/type';
import { css } from '@emotion/react';
import { changeColor } from '../lib/color';

const tagContainer = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.5em;
  p {
    margin: 0;
  }
`;

function Tags({ tags }: { tags: Array<string> }) {
  return (
    <div css={tagContainer}>
      {tags.map((tag: string, index) => {
        return (
          <p
            css={css`
              width: fit-content;
              height: fit-content;
              line-height: 1.4;
              padding: 2px 6px;
              border-radius: 4px;
              background-color: #4e5968;
              font-size: 8px;
              display: block;
              justify-content: center;
              align-items: center;
            `}
            key={index}
          >
            {tag}
          </p>
        );
      })}
    </div>
  );
}

export default Tags;
