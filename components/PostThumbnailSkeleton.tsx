import React from 'react';
import { contentStyle, imgStyle, linkStyle, tagAndDateStyle } from './PostCard';
import { tagContainer, tagStyle } from './Tags';
import { css, keyframes } from '@emotion/react';

const imgSkeletonStyle = css`
  width: 200px;
  height: 200px;
  background-color: #3a3d4a;
`;
const placeholderShimmer = keyframes`
  0% {
    background-position: -768px 0;
  }

  100% {
    background-position: 768px 0;
  }
`;
const tagSkeletonStyle = css`
  width: 40px;
  height: 18px;
`;
const titleSkeletonStyle = css`
  width: 60%;
  height: 30px;
  background-color: #3a3d4a;
  margin-bottom: 20px;
  border-radius: 8px;
`;
const descriptionSkeletonStyle = css`
  width: 100%;
  height: 20px;
  background-color: #3a3d4a;
  border-radius: 8px;
  margin-bottom: 10px;
`;
const dateSkeletonStyle = css`
  width: 60px;
  height: 20px;
  background-color: #3a3d4a;
  border-radius: 8px;
  margin: 10px 0;
`;
const shimmerStyle = css`
  background-color: #3a3d4a;
  background-image: linear-gradient(
    to right,
    #3a3d4a 0%,
    #2e3039 20%,
    #3a3d4a 40%,
    #3a3d4a 60%,
    #3a3d4a 100%
  );
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: inline-block;

  -webkit-animation-duration: 2s;
  -webkit-animation-fill-mode: forwards;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-name: ${placeholderShimmer};
  -webkit-animation-timing-function: linear;
`;

function PostThumbnailSkeleton() {
  return (
    <section css={linkStyle}>
      <div css={[imgStyle, imgSkeletonStyle, shimmerStyle]} />
      <section css={contentStyle}>
        <div css={[titleSkeletonStyle, shimmerStyle]} />
        <div css={[descriptionSkeletonStyle, shimmerStyle]} />
        <div css={[descriptionSkeletonStyle, shimmerStyle]} />
        <div
          css={[
            descriptionSkeletonStyle,
            shimmerStyle,
            css`
              width: 50%;
            `,
          ]}
        />
        <section css={tagAndDateStyle}>
          <div css={[dateSkeletonStyle, shimmerStyle]} />
          <div css={tagContainer}>
            <div css={[tagStyle, tagSkeletonStyle, shimmerStyle]} />
            <div css={[tagStyle, tagSkeletonStyle, shimmerStyle]} />
            <div css={[tagStyle, tagSkeletonStyle, shimmerStyle]} />
          </div>
        </section>
      </section>
    </section>
  );
}

export default PostThumbnailSkeleton;
