import { Theme, light } from "@escoleme/medesign-tokens";
import React, { useContext } from "react";
import styled, {ThemeContext} from "styled-components";
import Button from ".";
import { IButtonProps } from "./Button.types";
import chroma from 'chroma-js'

export const getStyles = ({
    size = "normal",
    variant = "filled",
    ...props
}: IButtonProps) => {

  const { comp } = useContext(ThemeContext);
  const button = comp.button;


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
    pointerEvents: "auto",
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

//   // Botão com estado de "danger"
//   if (props.danger) {
//     styles = { ...styles, variantStyles: buttonStates.danger };
//   }

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

//   // Botão ocupando todo o width do componente pai
//   if (props.block) {
//     styles.minWidth = '100%'
//   }

  // Desativando os pointer events
  if (props.disabled || props.loading || props.success) {
    styles.pointerEvents = 'none'
  }

  return styles;
}

export const FilledButton = styled.button`
    display: inline-flex;
    vertical-align: middle;
    align-items: center;
    justify-content: center;

    /* Size */

    // min-width: 0px;
    min-height: ${(props) => getStyles(props).style.layout.height}px;
    height: ${(props) => getStyles(props).style.layout.height}px;
    padding: 0 ${(props) => getStyles(props).style.layout.leftRightPadding}px;
    border-radius: ${(props) => getStyles(props).style.layout.shape}px;

    /* Safari button margins reset */
    /* See https://github.com/google/material-design-lite/issues/4008 */
    margin-top: 0px;
    margin-left: 0px;

    /* Typograph */

    white-space: nowrap;
    font-familiy: ${(props) => getStyles(props).style.state.enabled.labelText.font};
    line-height: ${(props) => getStyles(props).style.state.enabled.labelText.lineHeight};
    font-size: ${(props) => getStyles(props).style.state.enabled.labelText.size}px;
    font-weight: ${(props) => getStyles(props).style.state.enabled.labelText.weight};
    
    /* Appearance */

    background: ${(props) => getStyles(props).style.state.enabled.container.color};
    border: 1px solid ${props => getStyles(props).style.state.enabled.container.color};
    color: ${props => getStyles(props).style.state.enabled.labelText.color};

    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
    pointer-events: ${(props) => getStyles(props).pointerEvents};
    ///transition: opacity 15ms linear,background-color 15ms linear;

    > *:not(:last-child):not(:only-child) {
        margin-right: 0;
    }

    /* States */

    &:hover {
        color: ${props => getStyles(props).style.state.hovered.labelText.color};
        background: ${props => {
            const container = getStyles(props).style.color.container;
            const stateLayerOpacity = getStyles(props).style.state.hovered.container.stateLayerOpacity;
            const stateLayerColor = getStyles(props).style.state.hovered.container.stateLayerColor;
            const [red, green, blue] = chroma(stateLayerColor).rgb()

            return `linear-gradient(0deg, rgba(${red}, ${green}, ${blue}, ${stateLayerOpacity}), rgba(${red}, ${green}, ${blue}, ${stateLayerOpacity})), ${container}`;
        }};
        border-color: ${props => getStyles(props).style.state.enabled.container.color};
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
