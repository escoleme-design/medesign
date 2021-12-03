import { ReactElement } from 'react';
import { RenderResult } from '@testing-library/react';
export declare type RenderFn<T = any> = (component: ReactElement, ...rest: any) => T;
declare const render: RenderFn<RenderResult>;
export { render };
