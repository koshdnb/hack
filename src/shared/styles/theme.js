import { css } from '@emotion/react';

export const darkTheme = {};

export const whiteTheme = {};

export const BorderGradient = ({ radius }) => css`
  background: linear-gradient(#1d1d1d, #1d1d1d) padding-box,
    linear-gradient(to right, #f70d29 0%, #ec03ff 100%) border-box;
  border-radius: ${radius};
  border: 1px solid transparent;
`;

export const TextGradient = () => css`
  background: linear-gradient(90deg, #f70d29 0%, #ec03ff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
