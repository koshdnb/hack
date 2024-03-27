import { breakpoints } from './breakpoints';

export const mediaMin = Object.entries(breakpoints).reduce(
  (acc, [bp, size]) => ({
    ...acc,
    [bp]: `@media (min-width: ${size}px)`,
  }),
  {}
);

export const mediaMax = Object.entries(breakpoints).reduce(
  (acc, [bp, size]) => ({
    ...acc,
    [bp]: `@media (max-width: ${size - 1}px)`,
  }),
  {}
);
