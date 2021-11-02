import * as Types from './types';
import * as lightBase from './themes/light';
import * as darkBase from './themes/dark';

const light: Types.Theme = {
    ...lightBase
};

const dark: Types.Theme = {
    ...darkBase
};

export type Theme = Types.Theme;
export { light, dark };