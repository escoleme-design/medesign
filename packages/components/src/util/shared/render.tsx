import { FunctionComponent, ReactElement } from 'react';
import { render as renderTest, RenderResult } from '@testing-library/react';
import { WithProviders } from './withProvider';

export type RenderFn<T = any> = (component: ReactElement, ...rest: any) => T;

const render: RenderFn<RenderResult> = (component, options) =>
  renderTest(component, { wrapper: WithProviders, ...options });

export { render };