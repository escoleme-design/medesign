import * as Types from './types';
import * as lightBase from './themes/light';

const light: Types.Theme = { ...lightBase };

export type Theme = Types.Theme;
export { light };