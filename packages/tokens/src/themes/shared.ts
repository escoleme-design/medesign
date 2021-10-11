import {
  Spacings,
  IconSizes,
  BorderRadius,
  BorderWidth,
  Typeface,
  FontWeight,
  Grid,
  Breakpoints,
  MediaQueries,
  ZIndex,
  Elevation,
  States,
} from '../types';
import { createMediaQueries } from '../utils/media-queries';

export const spacings: Spacings = {
    s1: '0px',
    s2: '1px',
    s3: '2px',
    s4: '4px',
    s5: '6px',
    s6: '8px',
    s7: '10px',
    s8: '12px',
    s9: '14px',
    s10: '16px',
    s11: '20px',
    s12: '24px',
    s13: '28px',
    s14: '32px',
    s15: '36px',
    s16: '40px',
    s17: '44px',
    s18: '48px',
    s19: '56px',
    s20: '64px',
    s21: '80px',
    s22: '96px',
    s23: '112px',
    s24: '128px',
    s25: '144px',
    s26: '160px',
    s27: '176px',
    s28: '192px',
    s29: '208px',
    s30: '224px',
    s31: '240px',
    s32: '256px',
    s33: '288px',
    s34: '320px',
    s35: '384px'
};

export const spacingsInPx: Spacings = {
    s1: '0px',
    s2: '1px',
    s3: '2px',
    s4: '4px',
    s5: '6px',
    s6: '8px',
    s7: '10px',
    s8: '12px',
    s9: '14px',
    s10: '16px',
    s11: '20px',
    s12: '24px',
    s13: '28px',
    s14: '32px',
    s15: '36px',
    s16: '40px',
    s17: '44px',
    s18: '48px',
    s19: '56px',
    s20: '64px',
    s21: '80px',
    s22: '96px',
    s23: '112px',
    s24: '128px',
    s25: '144px',
    s26: '160px',
    s27: '176px',
    s28: '192px',
    s29: '208px',
    s30: '224px',
    s31: '240px',
    s32: '256px',
    s33: '288px',
    s34: '320px',
    s35: '384px'
};

export const spacingsInRem: Spacings = {
    s1: '0rem',
    s2: '1rem',
    s3: '0.125rem',
    s4: '0.25rem',
    s5: '0.375rem',
    s6: '0.5rem',
    s7: '0.625rem',
    s8: '0.75rem',
    s9: '0.875rem',
    s10: '1rem',
    s11: '1.25rem',
    s12: '1.5rem',
    s13: '1.75rem',
    s14: '2rem',
    s15: '2.25rem',
    s16: '2.5rem',
    s17: '2.75rem',
    s18: '3rem',
    s19: '3.5rem',
    s20: '4rem',
    s21: '5rem',
    s22: '6rem',
    s23: '7rem',
    s24: '8rem',
    s25: '9rem',
    s26: '10rem',
    s27: '11rem',
    s28: '12rem',
    s29: '13rem',
    s30: '14rem',
    s31: '15rem',
    s32: '16rem',
    s33: '18rem',
    s34: '20rem',
    s35: '24rem'
};
  
export const iconSizes: IconSizes = {
    sm: '16px',
    md: '24px',
    lg: '32px',
    xl: '48px'
};

export const borderRadius: BorderRadius = {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    circle: '100%',
    pill: '999999px',
};

export const borderWidth: BorderWidth = {
    sm: "1px",
    md: "2px",
    lg: "3px"
};

export const typeface: Typeface = {
    primary: 'Roboto',
    secondary: 'Helvetica'
};
  
export const fontWeight: FontWeight = {
    normal: '400',
    thin: '200',
    extraBold: '900',
    bold: '700',
};

export const typography = {
    headline: {
        one: {
            font: typeface.primary,
            fontWeight: 'lighter',
            fontSize: spacingsInRem.s22,
            letterSpacing: '-1.5px',
            case: 'none',
        },
        two: {
            font: typeface.primary,
            fontWeight: 'lighter',
            fontSize: spacingsInRem.s20,
            letterSpacing: '-0.5px',
            case: 'none',
        },
        three: {
            font: typeface.primary,
            fontWeight: 'normal',
            fontSize: spacingsInRem.s18,
            letterSpacing: '0px',
            case: 'none',
        },
        four: {
            font: typeface.primary,
            fontWeight: 'normal',
            fontSize: spacingsInRem.s15,
            letterSpacing: '0.25px',
            case: 'none',
        },
        five: {
            font: typeface.primary,
            fontWeight: 'normal',
            fontSize: spacingsInRem.s12,
            letterSpacing: '0px',
            case: 'none',
        },
        six: {
            font: typeface.primary,
            fontWeight: '500',
            fontSize: spacingsInRem.s11,
            letterSpacing: '0.15',
            case: 'none',
        },
    },
    subtitle: {
        one: {
            font: typeface.primary,
            fontWeight: 'normal',
            fontSize: spacingsInRem.s10,
            letterSpacing: '0.15px',
            case: 'none',
        },
        two: {
            font: typeface.primary,
            fontWeight: '500',
            fontSize: spacingsInRem.s9,
            letterSpacing: '0.1px',
            case: 'none',
        },
    },
    body: {
        one: {
            font: typeface.primary,
            fontWeight: 'normal',
            fontSize: spacingsInRem.s10,
            letterSpacing: '0.5px',
            case: 'none',
        },
        two: {
            font: typeface.primary,
            fontWeight: 'normal',
            fontSize: spacingsInRem.s9,
            letterSpacing: '0.25px',
            case: 'none',
        },
    },
    button: {
        font: typeface.primary,
        fontWeight: '500',
        fontSize: spacingsInRem.s9,
        letterSpacing: '1.25px',
        case: 'uppercase',
    },
    caption: {
        font: typeface.primary,
        fontWeight: 'normal',
        fontSize: spacingsInRem.s8,
        letterSpacing: '0.4px',
        case: 'none',
    },
    overline: {
        font: typeface.primary,
        fontWeight: 'normal',
        fontSize: spacingsInRem.s7,
        letterSpacing: '1.5px',
        case: 'uppercase',
    },
};

export const grid: Grid = {
    default: {
      priority: 0,
      breakpoint: 'default',
      cols: 12,
      maxWidth: '880px',
      gutter: spacingsInPx.s10,
    },
    sm: {
      priority: 1,
      breakpoint: 'smDown',
      cols: 12,
      maxWidth: '400px',
      gutter: spacingsInPx.s6,
    },
    md: {
      priority: 2,
      breakpoint: 'mdUp',
      cols: 12,
      maxWidth: '600px',
      gutter: spacingsInPx.s10,
    },
    lg: {
      priority: 3,
      breakpoint: 'lgUp',
      cols: 12,
      maxWidth: '760px',
      gutter: spacingsInPx.s12,
    },
    xl: {
      priority: 4,
      breakpoint: 'xlUp',
      cols: 12,
      maxWidth: '880px',
      gutter: spacingsInPx.s12,
    },
    xxl: {
      priority: 5,
      breakpoint: 'xxlUp',
      cols: 12,
      maxWidth: '1200px',
      gutter: spacingsInPx.s12,
    },
};

export const breakpoints: Breakpoints = {
    'smDown':   '(max-width: 575.98px)',
    'smUp':     '(min-width: 576px)',
    'smOnly':   '(min-width: 576px) and (max-width: 767.98px)',

    'mdDown':   '(max-width: 767.98px)',
    'mdUp':     '(min-width: 768px)',
    'mdOnly':   '(min-width: 768px) and (max-width: 991.98px)',

    'lgDown':   '(max-width: 991.98px)',
    'lgUp':     '(min-width: 992px)',
    'lgOnly':   '(min-width: 992px) and (max-width: 1199.98px)',

    'xlDown':   '(max-width: 1199.98px)',
    'xlUp':     '(min-width: 1200px)',
    'xlOnly':   '(min-width: 1200px) and (max-width: 1399.98px)',

    'xxlDown':  '(max-width: 1399.98px)',
    'xxlUp':    '(min-width: 1400px)'
};

export const mq: MediaQueries = createMediaQueries(breakpoints);

export const transitions = {
    default: '120ms ease-in-out',
    slow: '300ms ease-in-out',
  };
  
export const zIndex: ZIndex = {
    default: 0,
    absolute: 1,
    input: 20,
    popover: 30,
    tooltip: 40,
    header: 600,
    backdrop: 700,
    modal: 1000,
};

export const elevation: Elevation = {
    density0: '',
    density1: '0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 1px 3px rgba(0, 0, 0, 0.12)',
    density2: '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)',
    density3: '0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.14), 0px 1px 8px rgba(0, 0, 0, 0.12)',
    density4: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12)',
    density5: '0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px rgba(0, 0, 0, 0.14), 0px 1px 14px rgba(0, 0, 0, 0.12)',
    density6: '0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px rgba(0, 0, 0, 0.14), 0px 1px 18px rgba(0, 0, 0, 0.12)',
    density7: '0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12)',
    density8: '0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12)',
    density9: '0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12)',
    density10: '0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12)',
    density11: '0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12)',
    density12: '0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12)',
    density13: '0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12)',
    density14: '0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12)',
    density15: '0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12)',
    density16: '0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 16px 30px 5px rgba(0, 0, 0, 0.12)',
    density17: '0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12)',
    density18: '0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12)',
    density19: '0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12)',
    density20: '0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12)',
    density21: '0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12)',
    density22: '0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12)',
    density23: '0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12)',
    density24: '0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12)',
}

export const statesPrimary: States = {
    enabled:    'rgba(255, 255, 255, 0)',
    hover:      'rgba(255, 255, 255, 0.08)',
    focus:      'rgba(255, 255, 255, 0.24)',
    selected:   'rgba(255, 255, 255, 0.16)',
    activated:  'rgba(255, 255, 255, 0.24)',
    pressed:    'rgba(255, 255, 255, 0.32)',
    dragged:    'rgba(255, 255, 255, 0.16)',
}