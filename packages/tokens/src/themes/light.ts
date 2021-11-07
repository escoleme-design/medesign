import { Button } from '../types/Component/Button';
import { SurfaceTones } from '../types/Reference/SurfaceTones';
import { Color } from '../types/System/Color';
import { Elevation } from '../types/System/Elevation';
import { States } from '../types/System/State';
import { palette, typescale } from './shared';

export const color: Color = {
    // Primary
    primary: palette.primary['40'],
    onPrimary: palette.primary['100'],
    primaryContainer: palette.primary['90'],
    onPrimaryContainer: palette.primary['10'],
    
    // Secondary
    secondary: palette.secondary['40'],
    onSecondary: palette.secondary['100'],
    secondaryContainer: palette.secondary['90'],
    onSecondaryContainer: palette.secondary['10'],

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
    onError: palette.error['100'],
    errorContainer: palette.error['90'],
    onErrorContainer: palette.error['10'],

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


export const state: States = {
    hover: {
        containerColor: color.primary,
        contentColor: color.onPrimary,
        stateLayerColor: color.onPrimary,
        stateLayerOpacity: 0.08
    },
    focus: {
        containerColor: color.primary,
        contentColor: color.onPrimary,
        stateLayerColor: color.onPrimary,
        stateLayerOpacity: 0.12
    },
    pressed: {
        containerColor: color.primary,
        contentColor: color.onPrimary,
        stateLayerColor: color.onPrimary,
        stateLayerOpacity: 0.12
    },
    dragged: {
        containerColor: color.primary,
        contentColor: color.onPrimary,
        stateLayerColor: color.onPrimary,
        stateLayerOpacity: 0.16
    },
    disabled: {
        color: color.onSurface,
        contentOpacity: 0.38,
        containerOpacity: 0.12,
    }
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
    level0: {
        surfaceTones: null,
        elevation: null,
        shadow: null,
    },
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

export const button: Button = {
    filled: {
        color: {
            container: color.primary,
            labelText: color.onPrimary,
            icon: color.onPrimary,
        },
        state: {
            enabled: {
                container: {
                    color: color.primary,
                    shadowColor: color.shadow,
                    elevation: elevation.level0,
                },
                labelText: {
                    color: color.onPrimary,
                    font: typescale.labelLarge.font,
                    lineHeight: typescale.labelLarge.lineHeight,
                    size: typescale.labelLarge.size,
                    tracking: typescale.labelLarge.tracking,
                    weight: typescale.labelLarge.weight,
                },
                icon: {
                    color: color.onSurface,
                }
            },
            disabled: {
                container: {
                    color: color.onSurface,
                    elevation: elevation.level0,
                    opacity: 0.12,
                },
                labelText: {
                    color: color.onSurface,
                    opacity: 0.38,
                },
                icon: {
                    color: color.onSurface,
                    opacity: 0.38,
                }
            },
            hovered: {
                container: {
                    stateLayerColor: color.onPrimary,
                    stateLayerOpacity: state.hover.stateLayerOpacity,
                    elevation: elevation.level1,
                },
                labelText: {
                    color: color.onPrimary,
                },
                icon: {
                    color: color.onPrimary,
                }
            },
            focused: {
                container: {
                    stateLayerColor: color.onPrimary,
                    stateLayerOpacity: state.focus.stateLayerOpacity,
                    elevation: elevation.level0,
                },
                labelText: {
                    color: color.onPrimary,
                },
                icon: {
                    color: color.onPrimary,
                }
            },
            pressed: {
                container: {
                    stateLayerColor: color.onPrimary,
                    stateLayerOpacity: state.hover.stateLayerOpacity,
                    elevation: elevation.level0,
                },
                labelText: {
                    color: color.onPrimary,
                },
                icon: {
                    color: color.onPrimary,
                }
            },
        },
        layout: {
            height: 40,
            shape: 20,
            iconSize: 18,
            leftRightPadding: 24,
            LeftPaddingWithIcon: 16,
            rightPaddingWithIcon: 24,
            paddingBetweenElements: 8,
            labelTextAlignment: 'center',
        },
    },
    tonal: {
        color: {
            container: color.secondaryContainer,
            labelText: color.onSecondaryContainer,
            icon: color.onSecondaryContainer,
        },
        state: {
            enabled: {
                container: {
                    color: color.secondaryContainer,
                    shadowColor: color.shadow,
                    elevation: elevation.level0,
                },
                labelText: {
                    color: color.onSecondaryContainer,
                    font: typescale.labelLarge.font,
                    lineHeight: typescale.labelLarge.lineHeight,
                    size: typescale.labelLarge.size,
                    tracking: typescale.labelLarge.tracking,
                    weight: typescale.labelLarge.weight,
                },
                icon: {
                    color: color.onSecondaryContainer,
                }
            },
            disabled: {
                container: {
                    color: color.onSurface,
                    opacity: 0.12,
                },
                labelText: {
                    color: color.onSurface,
                    opacity: 0.38,
                },
                icon: {
                    color: color.onSurface,
                    opacity: 0.38,
                }
            },
            hovered: {
                container: {
                    stateLayerColor: color.onSecondaryContainer,
                    stateLayerOpacity: state.hover.stateLayerOpacity,
                    elevation: elevation.level1,
                },
                labelText: {
                    color: color.onSecondaryContainer,
                },
                icon: {
                    color: color.onSecondaryContainer,
                }
            },
            focused: {
                container: {
                    stateLayerColor: color.onSecondaryContainer,
                    stateLayerOpacity: state.focus.stateLayerOpacity,
                    elevation: elevation.level0,
                },
                labelText: {
                    color: color.onSecondaryContainer,
                },
                icon: {
                    color: color.onSecondaryContainer,
                }
            },
            pressed: {
                container: {
                    stateLayerColor: color.onSecondaryContainer,
                    stateLayerOpacity: state.pressed.stateLayerOpacity,
                    elevation: elevation.level0,
                },
                labelText: {
                    color: color.onSecondaryContainer,
                },
                icon: {
                    color: color.onSecondaryContainer,
                }
            },
        },
        layout: {
            height: 40,
            shape: 20,
            iconSize: 18,
            leftRightPadding: 24,
            LeftPaddingWithIcon: 16,
            rightPaddingWithIcon: 24,
            paddingBetweenElements: 8,
            labelTextAlignment: 'center',
        },
    },
    outlined: {
        color: {
            container: color.surface,
            containerOutline: color.outline,
            labelText: color.primary,
            icon: color.primary,
        },
        state: {
            enabled: {
                container: {
                    outlineColor: color.outline,
                    outlineWidth: 1,
                    elevation: elevation.level0,
                },
                labelText: {
                    color: color.primary,
                    font: typescale.labelLarge.font,
                    lineHeight: typescale.labelLarge.lineHeight,
                    size: typescale.labelLarge.size,
                    tracking: typescale.labelLarge.tracking,
                    weight: typescale.labelLarge.weight,
                },
                icon: {
                    color: color.primary,
                }
            },
            disabled: {
                container: {
                    outlineColor: color.onSurface,
                    outlineOpacity: 0.12,
                },
                labelText: {
                    color: color.onSurface,
                    opacity: 0.38,
                },
                icon: {
                    color: color.onSurface,
                    opacity: 0.38,
                }
            },
            hovered: {
                container: {
                    outlineColor: color.outline,
                    stateLayerColor: color.primary,
                    StateLayerOpacity: state.hover.stateLayerOpacity,
                },
                labelText: {
                    color: color.primary,
                },
                icon: {
                    color: color.primary,
                }
            },
            focused: {
                container: {
                    outlineColor: color.primary,
                    stateLayerColor: color.primary,
                    elevation: state.focus.stateLayerOpacity,
                },
                labelText: {
                    color: color.primary,
                },
                icon: {
                    color: color.primary,
                }
            },
            pressed: {
                container: {
                    outlineColor: color.outline,
                    stateLayerColor: color.primary,
                    stateLayerOpacity: state.pressed.stateLayerOpacity,
                },
                labelText: {
                    color: color.primary,
                },
                icon: {
                    color: color.primary,
                }
            },
        },
        layout: {
            height: 40,
            shape: 20,
            iconSize: 18,
            leftRightPadding: 24,
            LeftPaddingWithIcon: 16,
            rightPaddingWithIcon: 24,
            paddingBetweenElements: 8,
            labelTextAlignment: 'center',
        },
    },
    text: {
        color: {
            labelText: color.primary,
            icon: color.primary,
        },
        state: {
            enabled: {
                container: {
                    elevation: elevation.level0,
                },
                labelText: {
                    color: color.primary,
                    font: typescale.labelLarge.font,
                    lineHeight: typescale.labelLarge.lineHeight,
                    size: typescale.labelLarge.size,
                    tracking: typescale.labelLarge.tracking,
                    weight: typescale.labelLarge.weight,
                },
                icon: {
                    color: color.primary,
                }
            },
            disabled: {
                labelText: {
                    color: color.onSurface,
                    opacity: 0.38,
                },
                icon: {
                    color: color.onSurface,
                    opacity: 0.38,
                }
            },
            hovered: {
                container: {
                    stateLayerColor: color.primary,
                    StateLayerOpacity: state.hover.stateLayerOpacity,
                },
                labelText: {
                    color: color.primary,
                },
                icon: {
                    color: color.primary,
                }
            },
            focused: {
                container: {
                    stateLayerColor: color.primary,
                    stateLayerOpacity: state.focus.stateLayerOpacity,
                },
                labelText: {
                    color: color.primary,
                },
                icon: {
                    color: color.primary,
                }
            },
            pressed: {
                container: {
                    stateLayerColor: color.primary,
                    stateLayerOpacity: state.pressed.stateLayerOpacity,
                },
                labelText: {
                    color: color.primary,
                },
                icon: {
                    color: color.primary,
                }
            },
        },
        layout: {
            height: 40,
            shape: 20,
            iconSize: 18,
            containerWidth: 48,
            leftRightPadding: 12,
            LeftPaddingWithIcon: 12,
            rightPaddingWithIcon: 16,
            paddingBetweenElements: 8,
            labelTextAlignment: 'center'
        },
    },
}

export * from './shared';