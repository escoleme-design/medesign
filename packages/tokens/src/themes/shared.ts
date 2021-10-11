import {
  Spacings,
  IconSizes,
  BorderRadius,
  BorderWidth,
  Typeface,
  Typography,
  Transitions,
  Case,
  FontWeight,
  Grid,
  Breakpoints,
  MediaQueries,
  ZIndex,
} from '../types';

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
      breakpoint: 'sm',
      cols: 12,
      maxWidth: '400px',
      gutter: spacingsInPx.s6,
    },
    md: {
      priority: 2,
      breakpoint: 'md',
      cols: 12,
      maxWidth: '600px',
      gutter: spacingsInPx.s10,
    },
    lg: {
      priority: 3,
      breakpoint: 'lg',
      cols: 12,
      maxWidth: '760px',
      gutter: spacingsInPx.s12,
    },
    xl: {
      priority: 4,
      breakpoint: 'xl',
      cols: 12,
      maxWidth: '880px',
      gutter: spacingsInPx.s12,
    },
    xxl: {
      priority: 5,
      breakpoint: 'xxl',
      cols: 12,
      maxWidth: '1200px',
      gutter: spacingsInPx.s12,
    },
};