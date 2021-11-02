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

type Palette = {
    primary: Tones;
    secondary: Tones;
    tertiary: Tones;
    neutral: Tones;
    neutralVariant: Tones;
    error: Tones;
    success: Tones;
    warning: Tones;
}

type Color = {
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

export type Reference = {
    palette: Palette
}

export type System = {
    color: Color
}

export interface Theme {
    ref: Reference,
    sys: System,
}