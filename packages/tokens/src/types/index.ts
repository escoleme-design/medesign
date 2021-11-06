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
    surfaceTones: SurfaceTone | null,
    elevation: number | null,
    shadow: Shadow[] | null,
}

export type Elevation = {
    level0: ElevationLevel,
    level1: ElevationLevel,
    level2: ElevationLevel,
    level3: ElevationLevel,
    level4: ElevationLevel,
    level5: ElevationLevel,
}

export type State = {
    stateLayerOpacity: number,
    stateLayerColor: string,
    containerColor: string,
    contentColor: string,
}

type StateDisabled = {
    color: string,
    contentOpacity: number,
    containerOpacity: number,
}

export type States = {
    hover: State,
    focus: State,
    pressed: State,
    dragged: State,
    disabled: StateDisabled,
}

type TypeScale = {
    font: string,
    lineHeight: number,
    size: number,
    tracking: number,
    weight: number,
}

export type Typeface = {
    // Display
    displayLarge: TypeScale,
    displayMedium: TypeScale,
    displaySmall: TypeScale,
    // Headline
    headlineLarge: TypeScale,
    headlineMedium: TypeScale,
    headlineSmall: TypeScale,
    // Title
    titleLarge: TypeScale,
    titleMedium: TypeScale,
    titleSmall: TypeScale,
    // Label
    labelLarge: TypeScale,
    labelMedium: TypeScale,
    labelSmall: TypeScale,
    // Body
    bodyLarge: TypeScale,
    bodyMedium: TypeScale,
    bodySmall: TypeScale,
}

// Button

type FilledButton = {
    color: {
        container: string,
        labelText: string,
        icon: string,
    },
    state: {
        enabled: {
            container: {
                color: string,
                shadowColor: string,
                elevation: ElevationLevel,
            },
            labelText: {
                color: string,
                font: string,
                lineHeight: number,
                size: number,
                tracking: number,
                weight: number,
            },
            icon: {
                color: string,
            }
        },
        disabled: {
            container: {
                color: string,
                elevation: ElevationLevel,
                opacity: number,
            },
            labelText: {
                color: string,
                opacity: number,
            },
            icon: {
                color: string,
                opacity: number,
            }
        },
        hovered: {
            container: {
                stateLayerColor: string,
                stateLayerOpacity: number,
                elevation: ElevationLevel,
            },
            labelText: {
                color: string,
            },
            icon: {
                color: string,
            }
        },
        focused: {
            container: {
                stateLayerColor: string,
                stateLayerOpacity: number,
                elevation: ElevationLevel,
            },
            labelText: {
                color: string,
            },
            icon: {
                color: string,
            }
        },
        pressed: {
            container: {
                stateLayerColor: string,
                stateLayerOpacity: number,
                elevation: ElevationLevel,
            },
            labelText: {
                color: string,
            },
            icon: {
                color: string,
            }
        },
    },
    layout: {
        height: number,
        shape: number,
        iconSize: number,
        leftRightPadding: number,
        LeftPaddingWithIcon: number,
        rightPaddingWithIcon: number,
        paddingBetweenElements: number,
        labelTextAlignment: string,
    },
}

type FilledTonalButton = {
    color: {
        container: string,
        labelText: string,
        icon: string,
    },
    state: {
        enabled: {
            container: {
                color: string,
                shadowColor: string,
                elevation: ElevationLevel,
            },
            labelText: {
                color: string,
                font: string,
                lineHeight: number,
                size: number,
                tracking: number,
                weight: number,
            },
            icon: {
                color: string,
            }
        },
        disabled: {
            container: {
                color: string,
                opacity: number,
            },
            labelText: {
                color: string,
                opacity: number,
            },
            icon: {
                color: string,
                opacity: number,
            }
        },
        hovered: {
            container: {
                stateLayerColor: string,
                stateLayerOpacity: number,
                elevation: ElevationLevel,
            },
            labelText: {
                color: string,
            },
            icon: {
                color: string,
            }
        },
        focused: {
            container: {
                stateLayerColor: string,
                stateLayerOpacity: number,
                elevation: ElevationLevel,
            },
            labelText: {
                color: string,
            },
            icon: {
                color: string,
            }
        },
        pressed: {
            container: {
                stateLayerColor: string,
                stateLayerOpacity: number,
                elevation: ElevationLevel,
            },
            labelText: {
                color: string,
            },
            icon: {
                color: string,
            }
        },
    },
    layout: {
        height: number,
        shape: number,
        iconSize: number,
        leftRightPadding: number,
        LeftPaddingWithIcon: number,
        rightPaddingWithIcon: number,
        paddingBetweenElements: number,
        labelTextAlignment: string,
    },
}

type OutlinedButton = {
    color: {
        container: string,
        containerOutline: string,
        labelText: string,
        icon: string,
    },
    state: {
        enabled: {
            container: {
                outlineColor: string,
                outlineWidth: number,
                elevation: ElevationLevel,
            },
            labelText: {
                color: string,
                font: string,
                lineHeight: number,
                size: number,
                tracking: number,
                weight: number,
            },
            icon: {
                color: string,
            }
        },
        disabled: {
            container: {
                outlineColor: string,
                outlineOpacity: number,
            },
            labelText: {
                color: string,
                opacity: number,
            },
            icon: {
                color: string,
                opacity: number,
            }
        },
        hovered: {
            container: {
                outlineColor: string,
                stateLayerColor: string,
                StateLayerOpacity: number,
            },
            labelText: {
                color: string,
            },
            icon: {
                color: string,
            }
        },
        focused: {
            container: {
                outlineColor: string,
                stateLayerColor: string,
                elevation: number,
            },
            labelText: {
                color: string,
            },
            icon: {
                color: string,
            }
        },
        pressed: {
            container: {
                outlineColor: string,
                stateLayerColor: string,
                stateLayerOpacity: number,
            },
            labelText: {
                color: string,
            },
            icon: {
                color: string,
            }
        },
    },
    layout: {
        height: number,
        shape: number,
        iconSize: number,
        leftRightPadding: number,
        LeftPaddingWithIcon: number,
        rightPaddingWithIcon: number,
        paddingBetweenElements: number,
        labelTextAlignment: string,
    },
}

type TextButton = {
    color: {
        labelText: string,
        icon: string,
    },
    state: {
        enabled: {
            container: {
                elevation: ElevationLevel,
            },
            labelText: {
                color: string,
                font: string,
                lineHeight: number,
                size: number,
                tracking: number,
                weight: number,
            },
            icon: {
                color: string,
            }
        },
        disabled: {
            labelText: {
                color: string,
                opacity: number,
            },
            icon: {
                color: string,
                opacity: number,
            }
        },
        hovered: {
            container: {
                stateLayerColor: string,
                StateLayerOpacity: number,
            },
            labelText: {
                color: string,
            },
            icon: {
                color: string,
            }
        },
        focused: {
            container: {
                stateLayerColor: string,
                stateLayerOpacity: number,
            },
            labelText: {
                color: string,
            },
            icon: {
                color: string,
            }
        },
        pressed: {
            container: {
                stateLayerColor: string,
                stateLayerOpacity: number,
            },
            labelText: {
                color: string,
            },
            icon: {
                color: string,
            }
        },
    },
    layout: {
        height: number,
        shape: number,
        iconSize: number,
        containerWidth: number,
        leftRightPadding: number,
        LeftPaddingWithIcon: number,
        rightPaddingWithIcon: number,
        paddingBetweenElements: number,
        labelTextAlignment: string,
    },
}

export type Button = {
    filled: FilledButton,
    tonal: FilledTonalButton,
    outlined: OutlinedButton,
    text: TextButton,
}

export type Component = {
    button: Button
}

export type Reference = {
    palette: Palette,
    surfaceTones: SurfaceTones,
}

export type System = {
    color: Color,
    elevation: Elevation,
    state: States,
    typeface: Typeface,
}

export interface Theme {
    ref: Reference,
    sys: System,
    comp: Component,
}