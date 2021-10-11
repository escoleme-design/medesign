import { Colors } from '../types';

export const type = 'light';

const transparent = 'transparent';
const white = '#FFF';
const black = '#000';

const reds = {
    red50: '#',
    red100: '#',
    red200: '#',
    red300: '#',
    red400: '#',
    red500: '#',
    red600: '#',
    red700: '#',
    red800: '#',
    red900: '#',
}

const pinks = {
    pink50: '#',
    pink100: '#',
    pink200: '#',
    pink300: '#',
    pink400: '#',
    pink500: '#',
    pink600: '#',
    pink700: '#',
    pink800: '#',
    pink900: '#',
}

const purples = {
    purple50: '#',
    purple100: '#',
    purple200: '#',
    purple300: '#',
    purple400: '#',
    purple500: '#',
    purple600: '#',
    purple700: '#',
    purple800: '#',
    purple900: '#',
}

const deepPurples = {
    deepPurple50: '#',
    deepPurple100: '#',
    deepPurple200: '#',
    deepPurple300: '#',
    deepPurple400: '#',
    deepPurple500: '#',
    deepPurple600: '#',
    deepPurple700: '#',
    deepPurple800: '#',
    deepPurple900: '#',
}

const indigos = {
    indigo50: '#',
    indigo100: '#',
    indigo200: '#',
    indigo300: '#',
    indigo400: '#',
    indigo500: '#',
    indigo600: '#',
    indigo700: '#',
    indigo800: '#',
    indigo900: '#',
}

const blues = {
    blue50: '#',
    blue100: '#',
    blue200: '#',
    blue300: '#',
    blue400: '#',
    blue500: '#',
    blue600: '#',
    blue700: '#',
    blue800: '#',
    blue900: '#',
}

const lightBlues = {
    lightBlue50: '#',
    lightBlue100: '#',
    lightBlue200: '#',
    lightBlue300: '#',
    lightBlue400: '#',
    lightBlue500: '#',
    lightBlue600: '#',
    lightBlue700: '#',
    lightBlue800: '#',
    lightBlue900: '#',
}

const cyans = {
    cyan50: '#',
    cyan100: '#',
    cyan200: '#',
    cyan300: '#',
    cyan400: '#',
    cyan500: '#',
    cyan600: '#',
    cyan700: '#',
    cyan800: '#',
    cyan900: '#',
}

const teals = {
    teal50: '#',
    teal100: '#',
    teal200: '#',
    teal300: '#',
    teal400: '#',
    teal500: '#',
    teal600: '#',
    teal700: '#',
    teal800: '#',
    teal900: '#',
}

const greens = {
    green50: '#',
    green100: '#',
    green200: '#',
    green300: '#',
    green400: '#',
    green500: '#',
    green600: '#',
    green700: '#',
    green800: '#',
    green900: '#',
}

const lightGreens = {
    lightGreen50: '#',
    lightGreen100: '#',
    lightGreen200: '#',
    lightGreen300: '#',
    lightGreen400: '#',
    lightGreen500: '#',
    lightGreen600: '#',
    lightGreen700: '#',
    lightGreen800: '#',
    lightGreen900: '#',
}

const limes = {
    lime50: '#',
    lime100: '#',
    lime200: '#',
    lime300: '#',
    lime400: '#',
    lime500: '#',
    lime600: '#',
    lime700: '#',
    lime800: '#',
    lime900: '#',
}

const yellows = {
    yellow50: '#',
    yellow100: '#',
    yellow200: '#',
    yellow300: '#',
    yellow400: '#',
    yellow500: '#',
    yellow600: '#',
    yellow700: '#',
    yellow800: '#',
    yellow900: '#',
}

const ambers = {
    amber50: '#',
    amber100: '#',
    amber200: '#',
    amber300: '#',
    amber400: '#',
    amber500: '#',
    amber600: '#',
    amber700: '#',
    amber800: '#',
    amber900: '#',
}

const oranges = {
    orange50: '#',
    orange100: '#',
    orange200: '#',
    orange300: '#',
    orange400: '#',
    orange500: '#',
    orange600: '#',
    orange700: '#',
    orange800: '#',
    orange900: '#',
}

const deepOranges = {
    deepOrange50: '#',
    deepOrange100: '#',
    deepOrange200: '#',
    deepOrange300: '#',
    deepOrange400: '#',
    deepOrange500: '#',
    deepOrange600: '#',
    deepOrange700: '#',
    deepOrange800: '#',
    deepOrange900: '#',
}

const browns = {
    brown50: '#',
    brown100: '#',
    brown200: '#',
    brown300: '#',
    brown400: '#',
    brown500: '#',
    brown600: '#',
    brown700: '#',
    brown800: '#',
    brown900: '#',
}

const grays = {
    gray50: '#',
    gray100: '#',
    gray200: '#',
    gray300: '#',
    gray400: '#',
    gray500: '#',
    gray600: '#',
    gray700: '#',
    gray800: '#',
    gray900: '#',
}

const blueGrays = {
    blueGray50: '#ECEFF1',
    blueGray100: '#CFD8DC',
    blueGray200: '#B0BEC5',
    blueGray300: '#90A4AE',
    blueGray400: '#78909C',
    blueGray500: '#607D8B',
    blueGray600: '#46E7A',
    blueGray700: '#455A64',
    blueGray800: '#37474F',
    blueGray900: '#263238',
}


export const colors: Colors = {
    transparent,
    white,
    black,
    ...reds,
    ...pinks,
    ...purples,
    ...deepPurples,
    ...indigos,
    ...blues,
    ...lightBlues,
    ...cyans,
    ...teals,
    ...greens,
    ...lightGreens,
    ...limes,
    ...yellows,
    ...ambers,
    ...oranges,
    ...deepOranges,
    ...browns,
    ...grays,
    ...blueGrays,
};
  
export * from './shared';