type Tones = {
    '0': string;
    '10': string;
    '20': string;
    '30': string;
    '40': string;
    '50': string;
    '60': string;
    '70': string;
    '80': string;
    '90': string;
    '95': string;
    '99': string;
    '100': string;
}

export type Palette = {
    primary: Tones;
    secondary: Tones;
    tertiary: Tones;
    neutral: Tones;
    neutralVariant: Tones;
    error: Tones;
    success: Tones;
    warning: Tones;
    white: string;
    black: string;
}

export type Color = {
    // Primary
    primary: string;
    onPrimary: string;
    primaryContainer: string;
    onPrimaryContainer: string;
    
    // Secondary
    secondary: string;
    onSecondary: string;
    secondaryContainer: string;
    onSecondaryContainer: string;

    // Tertiary
    tertiary: string;
    onTertiary: string;
    tertiaryContainer: string;
    onTertiaryContainer: string;

    // Neutral
    background: string;
    onBackground: string;
    surface: string;
    onSurface: string;

    // Neutral Variant
    surfaceVariant: string;
    onSurfaceVariant: string;
    outline: string;

    // Error
    error: string;
    onRrror: string;
    errorContainer: string;
    onRrrorContainer: string;

    // Warning
    warning: string;
    onWarning: string;
    warningContainer: string;
    onWarningContainer: string;

    // Success
    success: string;
    onSuccess: string;
    successContainer: string;
    onSuccessContainer: string;

    // Inverse
    inverseSurface: string;
    inverseOnSurface: string;
    inversePrimary: string;

    // Shadow
    shadow: string;
}

type SurfaceTone = {
    surface: string,
    contentLayer: string,
    opacity: number
}

export type SurfaceTones = {
    '1': SurfaceTone,
    '2': SurfaceTone,
    '3': SurfaceTone,
    '4': SurfaceTone,
    '5': SurfaceTone,
}

type ShadowOffset = {
    x: number,
    y: number,
}

type Shadow = {
    shadowOffset: ShadowOffset,
    blur: number,
    spread: number,
    opacity: number,
    color: string
}

type ElevationLevel = {
    surfaceTones: SurfaceTone,
    elevation: number,
    shadow: Shadow[],
}

export type Elevation = {
    level1: ElevationLevel,
    level2: ElevationLevel,
    level3: ElevationLevel,
    level4: ElevationLevel,
    level5: ElevationLevel,
}

export type Reference = {
    palette: Palette,
    surfaceTones: SurfaceTones,
}

export type System = {
    color: Color,
    elevation: Elevation,
    // state: {
    //     hover: {},
    //     focus: {},
    //     pressed: {},
    //     dragged: {},
    // },
    // typescale: {

    // }
}

export interface Theme {
    ref: Reference,
    sys: System,
    comp: object,
}