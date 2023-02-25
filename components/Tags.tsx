import React from 'react';
import styled from '@emotion/styled';
import { TagType } from '../lib/type';
import { css } from '@emotion/react';
import { changeColor } from '../lib/color';

function Tags({ tags }: { tags: Array<string> }) {
  return (
    <div css={tagContainer}>
      {tags.map((tag: string, index) => {
        return (
          <p css={tagStyle} key={index}>
            {tag}
          </p>
        );
      })}
    </div>
  );
}

export const tagContainer = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.5em;
  p {
    margin: 0;
  }
`;

export const tagStyle = css`
  width: fit-content;
  height: fit-content;
  line-height: 1.4;
  padding: 2px 6px;
  border-radius: 4px;
  background-color: var(--color-tags);
  font-size: 8px;
  display: block;
  justify-content: center;
  align-items: center;
`;

export default Tags;
