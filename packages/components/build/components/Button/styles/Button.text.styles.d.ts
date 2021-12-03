import { IButtonProps } from "../Button.types";
export declare const getStyles: (props: IButtonProps) => {
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
    };
    states: {
        enabled: {
            background: string;
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
            outline: string;
        };
        active: {
            background: string;
            color: string;
        };
        disabled: {
            background: string;
            color: string;
            outline: string;
        };
    };
};
export declare const TextButton: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, IButtonProps, never>;
export declare const LinkTextButton: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, IButtonProps & {
    as: string;
}, "as">;
