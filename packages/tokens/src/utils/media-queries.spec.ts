import { Breakpoints } from '../types';

import { createMediaQueries } from './media-queries';

describe('Utils', () => {
  describe('createMediaQueries', () => {
    it('should prefix the media queries with @media', () => {
      const breakpoints = { mdDown: '(max-width: 1000px)' } as Breakpoints;
      const actual = createMediaQueries(breakpoints);
      const expected = expect.objectContaining({
        mdDown: '@media (max-width: 1000px)',
      });
      expect(actual).toEqual(expected);
    });
  });
});