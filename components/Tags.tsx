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
              line-height: 1.4;
              padding: 2px 6px;
              border-radius: 4px;
              background-color: ${changeColor(tag.color)};
              font-size: 12px;
              color: black;
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
