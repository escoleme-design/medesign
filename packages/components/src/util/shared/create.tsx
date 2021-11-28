import { render, RenderFn } from "./render";
import { RenderResult } from '@testing-library/react';

const create = (
    ...args: Parameters<RenderFn<RenderResult>>
): ChildNode | HTMLCollection | null => {

    const { container } = render(...args);

    return container.children.length > 1
      ? container.children
      : container.firstChild;
};
  
export { create };