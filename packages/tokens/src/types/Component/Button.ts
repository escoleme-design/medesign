import { ElevationLevel } from "../System/Elevation"

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
        small: {
            height: number,
            shape: number,
            iconSize: number,
            leftRightPadding: number,
            LeftPaddingWithIcon: number,
            rightPaddingWithIcon: number,
            paddingBetweenElements: number,
            labelTextAlignment: string,
            labelText: {
                font: string,
                lineHeight: number,
                size: number,
                tracking: number,
                weight: number,
            },
        },
        medium: {
            height: number,
            shape: number,
            iconSize: number,
            leftRightPadding: number,
            LeftPaddingWithIcon: number,
            rightPaddingWithIcon: number,
            paddingBetweenElements: number,
            labelTextAlignment: string,
            labelText: {
                font: string,
                lineHeight: number,
                size: number,
                tracking: number,
                weight: number,
            },
        },
        large: {
            height: number,
            shape: number,
            iconSize: number,
            leftRightPadding: number,
            LeftPaddingWithIcon: number,
            rightPaddingWithIcon: number,
            paddingBetweenElements: number,
            labelTextAlignment: string,
            labelText: {
                font: string,
                lineHeight: number,
                size: number,
                tracking: number,
                weight: number,
            },
        }
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
        small: {
            height: number,
            shape: number,
            iconSize: number,
            leftRightPadding: number,
            LeftPaddingWithIcon: number,
            rightPaddingWithIcon: number,
            paddingBetweenElements: number,
            labelTextAlignment: string,
            labelText: {
                font: string,
                lineHeight: number,
                size: number,
                tracking: number,
                weight: number,
            },
        },
        medium: {
            height: number,
            shape: number,
            iconSize: number,
            leftRightPadding: number,
            LeftPaddingWithIcon: number,
            rightPaddingWithIcon: number,
            paddingBetweenElements: number,
            labelTextAlignment: string,
            labelText: {
                font: string,
                lineHeight: number,
                size: number,
                tracking: number,
                weight: number,
            },
        },
        large: {
            height: number,
            shape: number,
            iconSize: number,
            leftRightPadding: number,
            LeftPaddingWithIcon: number,
            rightPaddingWithIcon: number,
            paddingBetweenElements: number,
            labelTextAlignment: string,
            labelText: {
                font: string,
                lineHeight: number,
                size: number,
                tracking: number,
                weight: number,
            },
        }
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
                stateLayerOpacity: number,
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
        small: {
            height: number,
            shape: number,
            iconSize: number,
            leftRightPadding: number,
            LeftPaddingWithIcon: number,
            rightPaddingWithIcon: number,
            paddingBetweenElements: number,
            labelTextAlignment: string,
            labelText: {
                font: string,
                lineHeight: number,
                size: number,
                tracking: number,
                weight: number,
            },
        },
        medium: {
            height: number,
            shape: number,
            iconSize: number,
            leftRightPadding: number,
            LeftPaddingWithIcon: number,
            rightPaddingWithIcon: number,
            paddingBetweenElements: number,
            labelTextAlignment: string,
            labelText: {
                font: string,
                lineHeight: number,
                size: number,
                tracking: number,
                weight: number,
            },
        },
        large: {
            height: number,
            shape: number,
            iconSize: number,
            leftRightPadding: number,
            LeftPaddingWithIcon: number,
            rightPaddingWithIcon: number,
            paddingBetweenElements: number,
            labelTextAlignment: string,
            labelText: {
                font: string,
                lineHeight: number,
                size: number,
                tracking: number,
                weight: number,
            },
        }
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
                stateLayerOpacity: number,
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
        small: {
            height: number,
            shape: number,
            iconSize: number,
            containerWidth: number,
            leftRightPadding: number,
            LeftPaddingWithIcon: number,
            rightPaddingWithIcon: number,
            paddingBetweenElements: number,
            labelTextAlignment: string,
            labelText: {
                font: string,
                lineHeight: number,
                size: number,
                tracking: number,
                weight: number,
            },
        },
        medium: {
            height: number,
            shape: number,
            iconSize: number,
            containerWidth: number,
            leftRightPadding: number,
            LeftPaddingWithIcon: number,
            rightPaddingWithIcon: number,
            paddingBetweenElements: number,
            labelTextAlignment: string,
            labelText: {
                font: string,
                lineHeight: number,
                size: number,
                tracking: number,
                weight: number,
            },
        },
        large: {
            height: number,
            shape: number,
            iconSize: number,
            containerWidth: number,
            leftRightPadding: number,
            LeftPaddingWithIcon: number,
            rightPaddingWithIcon: number,
            paddingBetweenElements: number,
            labelTextAlignment: string,
            labelText: {
                font: string,
                lineHeight: number,
                size: number,
                tracking: number,
                weight: number,
            },
        }
    },
}

export type Button = {
    filled: FilledButton,
    tonal: FilledTonalButton,
    outlined: OutlinedButton,
    text: TextButton,
}