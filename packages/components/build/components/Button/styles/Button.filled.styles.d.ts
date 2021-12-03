import { IButtonProps } from "../Button.types";
export declare const getFilledStyles: (props: IButtonProps) => {
    style: {
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
            color: string;
            background: string;
            outline: string;
        };
    };
};
export declare const FilledButton: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, IButtonProps, never>;
export declare const LinkFilledButton: import("styled-components").StyledComponent<"button", import("styled-components").DefaultTheme, IButtonProps & {
    as: string;
}, "as">;
