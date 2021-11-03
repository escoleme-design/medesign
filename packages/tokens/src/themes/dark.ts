import { Color, Elevation, SurfaceTones, System } from '../types'
import { palette } from './shared';

export const color: Color = {
    // Primary
    primary: palette.primary['80'],
    onPrimary: palette.primary['20'],
    primaryContainer: palette.primary['30'],
    onPrimaryContainer: palette.primary['90'],
    
    // Secondary
    secondary: palette.success['80'],
    onSecondary: palette.success['20'],
    secondaryContainer: palette.success['30'],
    onSecondaryContainer: palette.success['90'],

    // Tertiary
    tertiary: palette.tertiary['80'],
    onTertiary: palette.tertiary['20'],
    tertiaryContainer: palette.tertiary['30'],
    onTertiaryContainer: palette.tertiary['90'],

    // Neutral
    background: palette.neutral['10'],
    onBackground: palette.neutral['90'],
    surface: palette.neutral['10'],
    onSurface: palette.neutral['90'],

    // Neutral Variant
    surfaceVariant: palette.neutralVariant['30'],
    onSurfaceVariant: palette.neutralVariant['80'],
    outline: palette.neutralVariant['60'],
    
    // Error
    error: palette.error['80'],
    onRrror: palette.error['20'],
    errorContainer: palette.error['30'],
    onRrrorContainer: palette.error['90'],

    // Warning
    warning: palette.warning['80'],
    onWarning: palette.warning['20'],
    warningContainer: palette.warning['30'],
    onWarningContainer: palette.warning['90'],

    // Success
    success: palette.success['80'],
    onSuccess: palette.success['20'],
    successContainer: palette.success['30'],
    onSuccessContainer: palette.success['90'],

    // Inverse
    inverseSurface: palette.neutral['90'],
    inverseOnSurface: palette.neutral['20'],
    inversePrimary: palette.primary['40'],

    // Shadow
    shadow: palette.neutral['0'],
}

export const surfaceTones: SurfaceTones = {
    "1": {
        contentLayer: color.primary,
        surface: color.background,
        opacity: 0.05,
    },
    "2": {
        contentLayer: color.primary,
        surface: color.background,
        opacity: 0.08,
    },
    "3": {
        contentLayer: color.primary,
        surface: color.background,
        opacity: 0.11,
    },
    "4": {
        contentLayer: color.primary,
        surface: color.background,
        opacity: 0.12,
    },
    "5": {
        contentLayer: color.primary,
        surface: color.background,
        opacity: 0.14,
    },
}

export const elevation: Elevation = {
    level1: {
        surfaceTones: surfaceTones[1],
        elevation: 1,
        shadow: [
            {
                blur: 3,
                color: palette.black,
                opacity: 0.15,
                shadowOffset: {
                    x: 0,
                    y: 1,
                },
                spread: 1
            },
            {
                blur: 2,
                color: palette.black,
                opacity: 0.30,
                shadowOffset: {
                    x: 0,
                    y: 1,
                },
                spread: 0
            },
        ],
    },
    level2: {
        surfaceTones: surfaceTones[2],
        elevation: 2,
        shadow: [
            {
                blur: 6,
                color: palette.black,
                opacity: 0.15,
                shadowOffset: {
                    x: 0,
                    y: 2,
                },
                spread: 2
            },
            {
                blur: 2,
                color: palette.black,
                opacity: 0.30,
                shadowOffset: {
                    x: 0,
                    y: 1,
                },
                spread: 0
            },
        ],
    },
    level3: {
        surfaceTones: surfaceTones[3],
        elevation: 3,
        shadow: [
            {
                blur: 8,
                color: palette.black,
                opacity: 0.15,
                shadowOffset: {
                    x: 0,
                    y: 4,
                },
                spread: 3
            },
            {
                blur: 3,
                color: palette.black,
                opacity: 0.30,
                shadowOffset: {
                    x: 0,
                    y: 1
                },
                spread: 0
            },
        ],
    },
    level4: {
        surfaceTones: surfaceTones[4],
        elevation: 4,
        shadow: [
            {
                blur: 10,
                color: palette.black,
                opacity: 0.15,
                shadowOffset: {
                    x: 0,
                    y: 6,
                },
                spread: 4
            },
            {
                blur: 3,
                color: palette.black,
                opacity: 0.30,
                shadowOffset: {
                    x: 0,
                    y: 2,
                },
                spread: 0
            },
        ],
    },
    level5: {
        surfaceTones: surfaceTones[5],
        elevation: 5,
        shadow: [
            {
                blur: 12,
                color: palette.black,
                opacity: 0.15,
                shadowOffset: {
                    x: 0,
                    y: 8,
                },
                spread: 6
            },
            {
                blur: 4,
                color: palette.black,
                opacity: 0.30,
                shadowOffset: {
                    x: 0,
                    y: 4,
                },
                spread: 0
            },
        ],
    },
}

export * from './shared';