import { Breakpoints, MediaQueries } from '../types';

export function createMediaQueries(breakpoints: Breakpoints): MediaQueries {
  return Object.keys(breakpoints).reduce((allMediaQueries, breakpoint) => {
    const typedBreakpoint = breakpoint as keyof Breakpoints;
    const value = breakpoints[typedBreakpoint];

    // eslint-disable-next-line no-param-reassign
    allMediaQueries[typedBreakpoint] = `@media ${value}`;

    return allMediaQueries;
  }, {} as MediaQueries);
}