import React from 'react';
import { css } from '@emotion/react';

const labelStyle = css`
  --width-of-switch: 3.5em;
  --height-of-switch: 2em;
  --size-of-icon: 1.4em;
  --slider-offset: 0.3em;
  position: relative;
  width: var(--width-of-switch);
  height: var(--height-of-switch);
  & input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  input:checked + span {
    background-color: #303136;
  }
  input:checked + span:before {
    left: calc(
      100% - (var(--size-of-icon, 1.4em) + var(--slider-offset, 0.3em))
    );
    background: #303136;
    /* change the value of second inset in box-shadow to change the angle and direction of the moon  */
    -webkit-box-shadow: inset -3px -2px 5px -2px #8983f7,
      inset -10px -4px 0 0 #a3dafb;
    box-shadow: inset -3px -2px 5px -2px #8983f7, inset -10px -4px 0 0 #a3dafb;
  }
`;

const sliderStyle = css`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f4f4f5;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 30px;
  &:before {
    position: absolute;
    content: '';
    height: var(--size-of-icon, 1.4em);
    width: var(--size-of-icon, 1.4em);
    border-radius: 20px;
    left: var(--slider-offset, 0.3em);
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    background: linear-gradient(40deg, #ff0080, #ff8c00 70%);
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
`;

function ThemeController() {
  return (
    <label css={labelStyle}>
      <input type="checkbox" />
      <span css={sliderStyle}></span>
    </label>
  );
}

export default ThemeController;
