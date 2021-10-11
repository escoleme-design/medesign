import { light } from '..';

describe('Themes', () => {
  describe('light', () => {
    it('should match the snapshot', () => {
      expect(light).toMatchSnapshot();
    });
  });
});