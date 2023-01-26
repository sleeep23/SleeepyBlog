import React from 'react';
import styled from '@emotion/styled';
import { TagType } from '../lib/type';
import { css } from '@emotion/react';
import { changeColor } from '../lib/color';

const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5em;
`;

function Tags({ tags }: { tags: Array<TagType> }) {
  return (
    <TagContainer>
      {tags.map((tag: TagType) => {
        return (
          <p
            css={css`
              width: fit-content;
              height: fit-content;
              line-height: 1.4;
              padding: 2px 6px;
              border-radius: 4px;
              background-color: ${changeColor(tag.color)};
              font-size: 8px;
              color: black;
              display: block;
              justify-content: center;
              align-items: center;
            `}
            key={tag.id}
          >
            {tag.name}
          </p>
        );
      })}
    </TagContainer>
  );
}

export default Tags;
