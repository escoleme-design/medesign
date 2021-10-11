import * as Types from './types';
import * as lightBase from './themes/light';

export { themePropType } from './utils/theme-prop-type';

const light: Types.Theme = { ...lightBase };

export type Theme = Types.Theme;
export { light };