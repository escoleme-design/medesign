import { Theme, light } from "@escoleme/medesign-tokens";
import React, { useContext } from "react";
import styled, {ThemeContext} from "styled-components";
import { IButtonProps } from "./Button.types";
import { getBackgroundOpacity } from "../../helpers/utils";

export const getStyles = ({
    size = "normal",
    variant = "filled",
    ...props
}: IButtonProps) => {

  const { comp, sys } = useContext(ThemeContext);
  const button = comp.button;
  const { color } = sys;

  const variantStyles = button.text;

//   const sizeStyles = buttonSizes[size] ? buttonSizes[size] : buttonSizes.normal;

let styles = {
    style: variantStyles,
    minHeight: `${variantStyles.layout.height}px`,
    height: `${variantStyles.layout.height}px`,
    padding: `0 ${variantStyles.layout.leftRightPadding}px`,
    borderRadius: `${variantStyles.layout.shape}px`,
    fontFamily: `${variantStyles.state.enabled.labelText.font}`,
    lineHeight: `${variantStyles.state.enabled.labelText.lineHeight}`,
    fontSize: `${variantStyles.state.enabled.labelText.size}px`,
    fontWeight: `${variantStyles.state.enabled.labelText.weight}`,
    pointerEvents: `auto`,
    transtion: ``,
    states: {
        enabled: {
            background: `transparent`,
            color: `${variantStyles.color.labelText}`,
            cursor: `${props.disabled ? "not-allowed" : "pointer"}`,
            transition: ``,
        },
        hover: {
        color: `${variantStyles.state.hovered.labelText.color}`,
        background: getBackgroundOpacity(variantStyles.state.hovered.container.stateLayerOpacity, variantStyles.state.hovered.container.stateLayerColor),
        },
        focus: {
        color: `${variantStyles.state.focused.labelText.color}`,
        background: getBackgroundOpacity(variantStyles.state.focused.container.stateLayerOpacity, variantStyles.state.focused.container.stateLayerColor),
        outline: `none`,
        },
        active: {
        background: getBackgroundOpacity(variantStyles.state.pressed.container.stateLayerOpacity, variantStyles.state.pressed.container.stateLayerColor),
        color: `${variantStyles.state.pressed.labelText.color}`,
        },
        disabled: {
        background: `transparent`,
        color: getBackgroundOpacity(variantStyles.state.disabled.labelText.opacity, variantStyles.state.disabled.labelText.color),
        outline: `none`,
        }
    },
  };

  // Botão com estado de bem-sucedido
  if (props.success) {
    styles = {
      ...styles,
      states: {
        ...styles.states,
        enabled: {
          ...styles.states.enabled,
          color: color.success,
        },
        hover: {
          ...styles.states.hover,
          color: `${color.success}`,
          background: getBackgroundOpacity(variantStyles.state.hovered.container.stateLayerOpacity, color.success),
        },
        focus: {
          ...styles.states.focus,
          color: `${color.success}`,
          background: getBackgroundOpacity(variantStyles.state.focused.container.stateLayerOpacity, color.success),
        },
        active: {
          ...styles.states.active,
          color: `${color.success}`,
          background: `${color.success}`,
        }
      }
    };
  }

  // Botão com estado de "danger"
  if (props.danger) {
    styles = {
        ...styles,
        states: {
          ...styles.states,
          enabled: {
            ...styles.states.enabled,
            color: color.error,
          },
          hover: {
            ...styles.states.hover,
            color: `${color.error}`,
            background: getBackgroundOpacity(variantStyles.state.hovered.container.stateLayerOpacity, color.error),
          },
          focus: {
            ...styles.states.focus,
            color: `${color.error}`,
            background: getBackgroundOpacity(variantStyles.state.focused.container.stateLayerOpacity, color.error),
          },
          active: {
            ...styles.states.active,
            color: `${color.error}`,
            background: `${color.error}`,
          }
        }
      };
  }

  // Desativando os pointer events
  if (props.disabled || props.loading || props.success) {
    styles.pointerEvents = 'none'
  }

//   if (props.onColor) {
//     styles = {
//       ...styles,
//       states: {
//         ...styles.states,
//         enabled: {
//           ...styles.states.enabled,
//           border: `${variantStyles.state.enabled.container.outlineWidth}px solid ${variantStyles.state.enabled.container.outlineColor}`,
//           color: `${variantStyles.state.enabled.labelText.color}`,
//         },
//         hover: {
//           ...styles.states.hover,
//           color: `${variantStyles.state.hovered.labelText.color}`,
//           background: getBackgroundOverlay(variantStyles.color.container, variantStyles.state.hovered.container.stateLayerOpacity, variantStyles.state.hovered.container.stateLayerColor),
//         },
//         focus: {
//           ...styles.states.focus,
//           color: `${variantStyles.state.focused.labelText.color}`,
//           background: getBackgroundOverlay(variantStyles.color.container, variantStyles.state.focused.container.stateLayerOpacity, variantStyles.state.focused.container.stateLayerColor),
//           borderColor: `${variantStyles.state.focused.container.outlineColor}`,
//         },
//         active: {
//           ...styles.states.active,
//           background: getBackgroundOverlay(variantStyles.color.container, variantStyles.state.pressed.container.stateLayerOpacity, variantStyles.state.pressed.container.stateLayerColor),
//           border: `${variantStyles.state.enabled.container.outlineWidth}px solid ${variantStyles.state.enabled.container.outlineColor}`,
//           color: `${variantStyles.state.pressed.labelText.color}`,
//         }
//       }
//     };
//   }

  return styles;
}

export const TextButton = styled.button<IButtonProps>`
    display: inline-flex;
    vertical-align: middle;
    align-items: center;
    justify-content: center;

    /* Size */

    // min-width: 0px;
    ${(props) => props.block && `min-width: 100%;`}
    min-height: ${(props) => getStyles(props).minHeight};
    height: ${(props) => getStyles(props).height};
    padding: ${(props) => getStyles(props).padding};
    border-radius: ${(props) => getStyles(props).borderRadius};

    /* Safari button margins reset */
    /* See https://github.com/google/material-design-lite/issues/4008 */
    margin-top: 0px;
    margin-left: 0px;

    /* Typograph */

    white-space: nowrap;
    font-family: ${(props) => getStyles(props).fontFamily};
    line-height: ${(props) => getStyles(props).lineHeight};
    font-size: ${(props) => getStyles(props).fontSize};
    font-weight: ${(props) => getStyles(props).fontWeight};
    
    /* Appearance */

    color: ${props => getStyles(props).states.enabled.color};
    cursor: ${(props) => getStyles(props).states.enabled.cursor};
    pointer-events: ${(props) => getStyles(props).pointerEvents};
    background: ${(props) => getStyles(props).states.enabled.background};
    border: none;

    ///transition: opacity 15ms linear,background-color 15ms linear;

    > *:not(:last-child):not(:only-child) {
        margin-right: 0;
    }

    /* States */

    &:hover {
        color: ${props => getStyles(props).states.hover.color};
        background: ${props => getStyles(props).states.hover.background};
    } 

    &:focus {
        color: ${props => getStyles(props).states.focus.color};
        background: ${props => getStyles(props).states.focus.background};
        outline: ${props => getStyles(props).states.focus.outline};
    }

    &:active {
        background: ${(props) => getStyles(props).states.active.background};
        color: ${props => getStyles(props).states.active.color};
    }

    ${props => {
      if (props.disabled) {
        return (`
          color: ${() => getStyles(props).states.disabled.color};
          background: ${() => getStyles(props).states.disabled.background};
          outline: ${() => getStyles(props).states.disabled.outline};
        `);
      }
    }}

    &:disabled {
      color: ${props => getStyles(props).states.disabled.color};
      background: ${props => getStyles(props).states.disabled.background};
      outline: ${props => getStyles(props).states.disabled.outline};
    }
`; 

export const LinkTextButton = styled(TextButton).attrs({ as: "a" })`
  text-decoration: none;
  ${(props) => props.block && `min-width: calc(100% - ${getStyles(props).style.layout.leftRightPadding*2}px);`}
`;
