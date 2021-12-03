import { IButtonProps } from "../Button.types";
export declare const getOutlinedStyles: (props: IButtonProps) => {
    style: {
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
    states: {
        enabled: {
            background: string;
            border: string;
            color: string;
            cursor: string;
            transition: string;
        };
        hover: {
            color: string;
            background: string;
        };
        focus: {
            color: string;
            background: string;
            borderColor: string;
            outline: string;
        };
        active: {
            background: string;
            border: string;
            color: string;
        };
        disabled: {
            background: string;
            color: string;
            border: string;
            outline: string;
        };
    };
};
export declare const OutlinedButton: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, IButtonProps, never>;
export declare const LinkOutlinedButton: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, IButtonProps & {
    as: string;
}, "as">;
