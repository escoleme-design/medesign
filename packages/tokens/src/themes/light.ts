import { Color, Elevation, SurfaceTones, System } from '../types'
import { palette } from './shared';

export const color: Color = {
    // Primary
    primary: palette.primary['40'],
    onPrimary: palette.primary['100'],
    primaryContainer: palette.primary['90'],
    onPrimaryContainer: palette.primary['10'],
    
    // Secondary
    secondary: palette.success['40'],
    onSecondary: palette.success['100'],
    secondaryContainer: palette.success['90'],
    onSecondaryContainer: palette.success['10'],

    // Tertiary
    tertiary: palette.tertiary['40'],
    onTertiary: palette.tertiary['100'],
    tertiaryContainer: palette.tertiary['90'],
    onTertiaryContainer: palette.tertiary['10'],

    // Neutral
    background: palette.neutral['99'],
    onBackground: palette.neutral['10'],
    surface: palette.neutral['99'],
    onSurface: palette.neutral['10'],

    // Neutral Variant
    surfaceVariant: palette.neutralVariant['90'],
    onSurfaceVariant: palette.neutralVariant['90'],
    outline: palette.neutralVariant['50'],

    // Error
    error: palette.error['40'],
    onRrror: palette.error['100'],
    errorContainer: palette.error['90'],
    onRrrorContainer: palette.error['10'],

    // Warning
    warning: palette.warning['40'],
    onWarning: palette.warning['100'],
    warningContainer: palette.warning['90'],
    onWarningContainer: palette.warning['10'],

    // Success
    success: palette.success['40'],
    onSuccess: palette.success['100'],
    successContainer: palette.success['90'],
    onSuccessContainer: palette.success['10'],

    // Inverse
    inverseSurface: palette.neutral['20'],
    inverseOnSurface: palette.neutral['95'],
    inversePrimary: palette.primary['80'],

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
                blur: 2,
                color: palette.black,
                opacity: 0.30,
                shadowOffset: {
                    x: 0,
                    y: 1,
                },
                spread: 0
            },
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
        ],
    },
    level2: {
        surfaceTones: surfaceTones[2],
        elevation: 2,
        shadow: [
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