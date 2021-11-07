import { Theme, light } from "@escoleme/medesign-tokens";
import React, { useContext } from "react";
import styled, {ThemeContext} from "styled-components";
import Button from ".";
import { IButtonProps } from "./Button.types";
import chroma from 'chroma-js'

const getBackgroundOverlay = (background: string, opacity: number, stateLayer: string) => {
  const [red, green, blue] = chroma(stateLayer).rgb();
  const layerOpacity = `rgba(${red}, ${green}, ${blue}, ${opacity})`;
  return `linear-gradient(0deg, ${layerOpacity}, ${layerOpacity}), ${background}`;
}

const getBackgroundOpacity = (opacity: number, background: string) => {
  const [red, green, blue] = chroma(background).rgb()
  return `rgba(${red},${green},${blue},${opacity})`;
}

export const getStyles = ({
    size = "normal",
    variant = "filled",
    ...props
}: IButtonProps) => {

  const { comp, sys } = useContext(ThemeContext);
  const button = comp.button;
  const { color } = sys;


//   const {
//     buttonSizes,
//     componentVariants,
//     buttonStates,
//   } = useContext(ThemeContext);

//   const { button } = componentVariants;

  const variantStyles = button.filled;

  

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
        background: `${variantStyles.state.enabled.container.color}`,
        border: `none`,
        color: `${variantStyles.state.enabled.labelText.color}`,
        cursor: `${props.disabled ? "not-allowed" : "pointer"}`,
        transition: ``,
      },
      hover: {
        color: `${variantStyles.state.hovered.labelText.color}`,
        background: getBackgroundOverlay(variantStyles.color.container, variantStyles.state.hovered.container.stateLayerOpacity, variantStyles.state.hovered.container.stateLayerColor),
      },
      focus: {
        color: `${variantStyles.state.focused.labelText.color}`,
        background: getBackgroundOverlay(variantStyles.color.container, variantStyles.state.focused.container.stateLayerOpacity, variantStyles.state.focused.container.stateLayerColor),
        borderColor: `none`,
        outline: `none`,
      },
      active: {
        background: `${variantStyles.state.enabled.container.color}`,
        border: `none`,
        color: `${variantStyles.state.enabled.labelText.color}`,
      },
      disabled: {
        color: getBackgroundOpacity(variantStyles.state.disabled.labelText.opacity, variantStyles.state.disabled.labelText.color),
        background: getBackgroundOpacity(variantStyles.state.disabled.container.opacity, variantStyles.state.disabled.container.color),
        border: `none`,
        outline: `none`,
      }
    },
  };

//   let styles = {
//     variantStyles,
//     ...sizeStyles,
//     pointerEvents: "auto",
//   };

//   // Botão com estado de bem-sucedido
//   if (props.success) {
//     styles = { ...styles, variantStyles: buttonStates.success };
//   }

//   // Botão com estado de carregando
//   if (props.loading) {
//     // styles = { ...styles, variantStyles: buttonStates.loading };
//     styles = { ...styles, variantStyles: {
//       ...styles.variantStyles,
//       background: styles.variantStyles.hoverBackground,
//       focusBackground: styles.variantStyles.hoverBackground,
//       activeBackground: styles.variantStyles.hoverBackground,
//       hoverBackground: styles.variantStyles.hoverBackground,
//       activeBorder: styles.variantStyles.hoverBackground,
//       border: styles.variantStyles.hoverBackground,
//       focusBorder: styles.variantStyles.hoverBackground,
//       hoverBorder: styles.variantStyles.hoverBackground,
//     } };
//   }

  // Botão com estado de "danger"
  if (props.danger) {
    styles = {
      ...styles,
      states: {
        ...styles.states,
        enabled: {
          ...styles.states.enabled,
          background: color.error,
          color: color.onError,
        },
        hover: {
          ...styles.states.hover,
          color: `${color.onError}`,
          background: getBackgroundOverlay(color.error, variantStyles.state.hovered.container.stateLayerOpacity, color.onError),
        },
        focus: {
          ...styles.states.focus,
          color: `${color.onError}`,
          background: getBackgroundOverlay(color.error, variantStyles.state.focused.container.stateLayerOpacity, color.onError),
        },
        active: {
          ...styles.states.active,
          color: `${color.onError}`,
          background: `${color.error}`,
        }
      }
    };
  }

//   // Botão em uppercase
//   if (props.uppercase) {
//     styles = {
//       ...styles,
//       typography: {
//         ...styles.typography,
//         case: 'uppercase'
//       }
//     }
//   } else {
//     styles = {
//       ...styles,
//       typography: {
//         ...styles.typography,
//         case: 'normal'
//       }
//     }
//   }

  // Desativando os pointer events
  if (props.disabled || props.loading || props.success) {
    styles.pointerEvents = 'none'
  }

  return styles;
}

export const FilledButton = styled.button<IButtonProps>`
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
    font-familiy: ${(props) => getStyles(props).fontFamily};
    line-height: ${(props) => getStyles(props).lineHeight};
    font-size: ${(props) => getStyles(props).fontSize};
    font-weight: ${(props) => getStyles(props).fontWeight};
    
    /* Appearance */

    background: ${(props) => getStyles(props).states.enabled.background};
    border: ${props => getStyles(props).states.enabled.border};
    color: ${props => getStyles(props).states.enabled.color};
    cursor: ${(props) => getStyles(props).states.enabled.cursor};
    pointer-events: ${(props) => getStyles(props).pointerEvents};

    ///transition: opacity 15ms linear,background-color 15ms linear;

    > *:not(:last-child):not(:only-child) {
        margin-right: 0;
    }

    /* States */

    &:hover {
        color: ${props => getStyles(props).states.hover.color};
        background: ${props => getStyles(props).states.hover.background};
        border-color: ${props => getStyles(props).style.state.enabled.container.color};
    }

    &:focus {
        color: ${props => getStyles(props).states.focus.color};
        background: ${props => getStyles(props).states.focus.background};
        border-color: ${props => getStyles(props).states.focus.borderColor};
        outline: ${props => getStyles(props).states.focus.outline};
    }

    &:active {
        background: ${(props) => getStyles(props).states.active.background};
        border: 1px solid ${props => getStyles(props).states.active.border};
        color: ${props => getStyles(props).states.active.color};
    }

    ${props => {
      if (props.disabled) {
        return (`
          color: ${() => getStyles(props).states.disabled.color};
          background: ${() => getStyles(props).states.disabled.background};
          border: ${() => getStyles(props).states.disabled.border};
          outline: ${() => getStyles(props).states.disabled.outline};
        `);
      }
    }}

    &:disabled {
      color: ${props => getStyles(props).states.disabled.color};
      background: ${props => getStyles(props).states.disabled.background};
      border: ${props => getStyles(props).states.disabled.border};
      outline: ${props => getStyles(props).states.disabled.outline};
    }
`; 

export const LinkFilledButton = styled(FilledButton).attrs({ as: "a" })`
  text-decoration: none;
`;

export const defaultProps = {
  size: "default",
  appearance: "default",
  icon: null,
  iconAlign: "left",
  disabled: false,
  loading: false,
  success: false
};
