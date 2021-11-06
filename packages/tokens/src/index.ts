import * as Types from './types';
import * as lightBase from './themes/light';
import * as darkBase from './themes/dark';

const light: Types.Theme = {
    ref: {
        palette: lightBase.palette,
        surfaceTones: lightBase.surfaceTones
    },
    sys: {
        color: lightBase.color,
        elevation: lightBase.elevation,
        state: lightBase.state,
        typeface: darkBase.typescale,
    },
    comp: {
        button: lightBase.button
    }
};

const dark: Types.Theme = {
    ref: {
        palette: darkBase.palette,
        surfaceTones: darkBase.surfaceTones
    },
    sys: {
        color: darkBase.color,
        elevation: darkBase.elevation,
        state: darkBase.state,
        typeface: darkBase.typescale,
    },
    comp: {
        button: darkBase.button
    }
};

export type Theme = Types.Theme;
export { light, dark };