import '@testing-library/jest-dom/extend-expect';
// import { createSerializer } from '@emotion/jest';
import { toHaveNoViolations } from 'jest-axe';
import { fireEvent } from '@testing-library/react';

// import {
//   create,
//   render,
//   renderToHtml,
//   act,
//   userEvent,
//   axe,
// } from './src/helpers/test-utils';

import {
  create,
  render,
  renderToHtml,
  axe
} from './src/util/shared';

global.axe = axe;
// global.act = act;
// global.fireEvent = fireEvent;
// global.userEvent = userEvent;
global.render = render;
global.renderToHtml = renderToHtml;
global.create = create;

// react-popper relies on document.createRange
if (global.document) {
  document.createRange = () => ({
    setStart: () => {},
    setEnd: () => {},
    commonAncestorContainer: {
      nodeName: 'BODY',
      ownerDocument: document,
    },
  });
}

// Add custom matchers
expect.extend(toHaveNoViolations);

// Add a snapshot serializer that removes random hashes
// from emotion class names.
// expect.addSnapshotSerializer(
//   createSerializer({
//     classNameReplacer(className, index) {
//       return `circuit-${index}`;
//     },
//   }),
// );

global.matchMedia = jest.fn().mockImplementation((query) => ({
  matches: false,
  media: query,
  onchange: null,
  /**
   * @deprecated
   */
  addListener: jest.fn(),
  /**
   * @deprecated
   */
  removeListener: jest.fn(),
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
}));