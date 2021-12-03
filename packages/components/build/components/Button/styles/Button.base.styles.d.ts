import { IButtonProps } from "../Button.types";
export declare const getBaseStyles: ({ size, variant, rtl, iconAlign, loading, disabled, icon, block, label, success, loadingLabel }: IButtonProps) => {
    style: {
        color: {
            labelText: string;
            icon: string;
        };
        state: {
            enabled: {
                container: {
                    elevation: import("@escoleme/medesign-tokens/dist/es/types/System/Elevation").ElevationLevel;
                };
                labelText: {
                    color: string;
                };
                icon: {
                    color: string;
                };
            };
            disabled: {
                labelText: {
                    color: string;
                    opacity: number;
                };
                icon: {
                    color: string;
                    opacity: number;
                };
            };
            hovered: {
                container: {
                    stateLayerColor: string;
                    stateLayerOpacity: number;
                };
                labelText: {
                    color: string;
                };
                icon: {
                    color: string;
                };
            };
            focused: {
                container: {
                    stateLayerColor: string;
                    stateLayerOpacity: number;
                };
                labelText: {
                    color: string;
                };
                icon: {
                    color: string;
                };
            };
            pressed: {
                container: {
                    stateLayerColor: string;
                    stateLayerOpacity: number;
                };
                labelText: {
                    color: string;
                };
                icon: {
                    color: string;
                };
            };
        };
        layout: {
            small: {
                height: number;
                shape: number;
                iconSize: number;
                containerWidth: number;
                leftRightPadding: number;
                LeftPaddingWithIcon: number;
                rightPaddingWithIcon: number;
                paddingBetweenElements: number;
                labelTextAlignment: string;
                labelText: {
                    font: string;
                    lineHeight: number;
                    size: number;
                    tracking: number;
                    weight: number;
                };
            };
            medium: {
                height: number;
                shape: number;
                iconSize: number;
                containerWidth: number;
                leftRightPadding: number;
                LeftPaddingWithIcon: number;
                rightPaddingWithIcon: number;
                paddingBetweenElements: number;
                labelTextAlignment: string;
                labelText: {
                    font: string;
                    lineHeight: number;
                    size: number;
                    tracking: number;
                    weight: number;
                };
            };
            large: {
                height: number;
                shape: number;
                iconSize: number;
                containerWidth: number;
                leftRightPadding: number;
                LeftPaddingWithIcon: number;
                rightPaddingWithIcon: number;
                paddingBetweenElements: number;
                labelTextAlignment: string;
                labelText: {
                    font: string;
                    lineHeight: number;
                    size: number;
                    tracking: number;
                    weight: number;
                };
            };
        };
    } | {
        color: {
            container: string;
            labelText: string;
            icon: string;
        };
        state: {
            enabled: {
                container: {
                    color: string;
                    shadowColor: string;
                    elevation: import("@escoleme/medesign-tokens/dist/es/types/System/Elevation").ElevationLevel;
                };
                labelText: {
                    color: string;
                };
                icon: {
                    color: string;
                };
            };
            disabled: {
                container: {
                    color: string;
                    elevation: import("@escoleme/medesign-tokens/dist/es/types/System/Elevation").ElevationLevel;
                    opacity: number;
                };
                labelText: {
                    color: string;
                    opacity: number;
                };
                icon: {
                    color: string;
                    opacity: number;
                };
            };
            hovered: {
                container: {
                    stateLayerColor: string;
                    stateLayerOpacity: number;
                    elevation: import("@escoleme/medesign-tokens/dist/es/types/System/Elevation").ElevationLevel;
                };
                labelText: {
                    color: string;
                };
                icon: {
                    color: string;
                };
            };
            focused: {
                container: {
                    stateLayerColor: string;
                    stateLayerOpacity: number;
                    elevation: import("@escoleme/medesign-tokens/dist/es/types/System/Elevation").ElevationLevel;
                };
                labelText: {
                    color: string;
                };
                icon: {
                    color: string;
                };
            };
            pressed: {
                container: {
                    stateLayerColor: string;
                    stateLayerOpacity: number;
                    elevation: import("@escoleme/medesign-tokens/dist/es/types/System/Elevation").ElevationLevel;
                };
                labelText: {
                    color: string;
                };
                icon: {
                    color: string;
                };
            };
        };
        layout: {
            small: {
                height: number;
                shape: number;
                iconSize: number;
                leftRightPadding: number;
                LeftPaddingWithIcon: number;
                rightPaddingWithIcon: number;
                paddingBetweenElements: number;
                labelTextAlignment: string;
                labelText: {
                    font: string;
                    lineHeight: number;
                    size: number;
                    tracking: number;
                    weight: number;
                };
            };
            medium: {
                height: number;
                shape: number;
                iconSize: number;
                leftRightPadding: number;
                LeftPaddingWithIcon: number;
                rightPaddingWithIcon: number;
                paddingBetweenElements: number;
                labelTextAlignment: string;
                labelText: {
                    font: string;
                    lineHeight: number;
                    size: number;
                    tracking: number;
                    weight: number;
                };
            };
            large: {
                height: number;
                shape: number;
                iconSize: number;
                leftRightPadding: number;
                LeftPaddingWithIcon: number;
                rightPaddingWithIcon: number;
                paddingBetweenElements: number;
                labelTextAlignment: string;
                labelText: {
                    font: string;
                    lineHeight: number;
                    size: number;
                    tracking: number;
                    weight: number;
                };
            };
        };
    } | {
        color: {
            container: string;
            labelText: string;
            icon: string;
        };
        state: {
            enabled: {
                container: {
                    color: string;
                    shadowColor: string;
                    elevation: import("@escoleme/medesign-tokens/dist/es/types/System/Elevation").ElevationLevel;
                };
                labelText: {
                    color: string;
                };
                icon: {
                    color: string;
                };
            };
            disabled: {
                container: {
                    color: string;
                    opacity: number;
                };
                labelText: {
                    color: string;
                    opacity: number;
                };
                icon: {
                    color: string;
                    opacity: number;
                };
            };
            hovered: {
                container: {
                    stateLayerColor: string;
                    stateLayerOpacity: number;
                    elevation: import("@escoleme/medesign-tokens/dist/es/types/System/Elevation").ElevationLevel;
                };
                labelText: {
                    color: string;
                };
                icon: {
                    color: string;
                };
            };
            focused: {
                container: {
                    stateLayerColor: string;
                    stateLayerOpacity: number;
                    elevation: import("@escoleme/medesign-tokens/dist/es/types/System/Elevation").ElevationLevel;
                };
                labelText: {
                    color: string;
                };
                icon: {
                    color: string;
                };
            };
            pressed: {
                container: {
                    stateLayerColor: string;
                    stateLayerOpacity: number;
                    elevation: import("@escoleme/medesign-tokens/dist/es/types/System/Elevation").ElevationLevel;
                };
                labelText: {
                    color: string;
                };
                icon: {
                    color: string;
                };
            };
        };
        layout: {
            small: {
                height: number;
                shape: number;
                iconSize: number;
                leftRightPadding: number;
                LeftPaddingWithIcon: number;
                rightPaddingWithIcon: number;
                paddingBetweenElements: number;
                labelTextAlignment: string;
                labelText: {
                    font: string;
                    lineHeight: number;
                    size: number;
                    tracking: number;
                    weight: number;
                };
            };
            medium: {
                height: number;
                shape: number;
                iconSize: number;
                leftRightPadding: number;
                LeftPaddingWithIcon: number;
                rightPaddingWithIcon: number;
                paddingBetweenElements: number;
                labelTextAlignment: string;
                labelText: {
                    font: string;
                    lineHeight: number;
                    size: number;
                    tracking: number;
                    weight: number;
                };
            };
            large: {
                height: number;
                shape: number;
                iconSize: number;
                leftRightPadding: number;
                LeftPaddingWithIcon: number;
                rightPaddingWithIcon: number;
                paddingBetweenElements: number;
                labelTextAlignment: string;
                labelText: {
                    font: string;
                    lineHeight: number;
                    size: number;
                    tracking: number;
                    weight: number;
                };
            };
        };
    } | {
        color: {
            container: string;
            containerOutline: string;
            labelText: string;
            icon: string;
        };
        state: {
            enabled: {
                container: {
                    outlineColor: string;
                    outlineWidth: number;
                    elevation: import("@escoleme/medesign-tokens/dist/es/types/System/Elevation").ElevationLevel;
                };
                labelText: {
                    color: string;
                };
                icon: {
                    color: string;
                };
            };
            disabled: {
                container: {
                    outlineColor: string;
                    outlineOpacity: number;
                };
                labelText: {
                    color: string;
                    opacity: number;
                };
                icon: {
                    color: string;
                    opacity: number;
                };
            };
            hovered: {
                container: {
                    outlineColor: string;
                    stateLayerColor: string;
                    stateLayerOpacity: number;
                };
                labelText: {
                    color: string;
                };
                icon: {
                    color: string;
                };
            };
            focused: {
                container: {
                    outlineColor: string;
                    stateLayerColor: string;
                    stateLayerOpacity: number;
                };
                labelText: {
                    color: string;
                };
                icon: {
                    color: string;
                };
            };
            pressed: {
                container: {
                    outlineColor: string;
                    stateLayerColor: string;
                    stateLayerOpacity: number;
                };
                labelText: {
                    color: string;
                };
                icon: {
                    color: string;
                };
            };
        };
        layout: {
            small: {
                height: number;
                shape: number;
                iconSize: number;
                leftRightPadding: number;
                LeftPaddingWithIcon: number;
                rightPaddingWithIcon: number;
                paddingBetweenElements: number;
                labelTextAlignment: string;
                labelText: {
                    font: string;
                    lineHeight: number;
                    size: number;
                    tracking: number;
                    weight: number;
                };
            };
            medium: {
                height: number;
                shape: number;
                iconSize: number;
                leftRightPadding: number;
                LeftPaddingWithIcon: number;
                rightPaddingWithIcon: number;
                paddingBetweenElements: number;
                labelTextAlignment: string;
                labelText: {
                    font: string;
                    lineHeight: number;
                    size: number;
                    tracking: number;
                    weight: number;
                };
            };
            large: {
                height: number;
                shape: number;
                iconSize: number;
                leftRightPadding: number;
                LeftPaddingWithIcon: number;
                rightPaddingWithIcon: number;
                paddingBetweenElements: number;
                labelTextAlignment: string;
                labelText: {
                    font: string;
                    lineHeight: number;
                    size: number;
                    tracking: number;
                    weight: number;
                };
            };
        };
    };
    layout: {
        height: number;
        shape: number;
        iconSize: number;
        leftRightPadding: number;
        LeftPaddingWithIcon: number;
        rightPaddingWithIcon: number;
        paddingBetweenElements: number;
        labelTextAlignment: string;
        labelText: {
            font: string;
            lineHeight: number;
            size: number;
            tracking: number;
            weight: number;
        };
    };
    isIconAlignLeft: boolean;
    minHeight: string;
    height: string;
    padding: string;
    borderRadius: string;
    paddingBetweenElements: string;
    fontFamily: string;
    lineHeight: string;
    fontSize: string;
    fontWeight: string;
    pointerEvents: string;
};
export declare const ButtonBase: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, IButtonProps, never>;
