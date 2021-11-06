import { Theme, light } from "@escoleme/medesign-tokens";
import React, { useContext } from "react";
import styled, {ThemeContext} from "styled-components";
import Button from ".";
import { IButtonProps } from "./Button.types";

export const getStyles = ({
    size = "normal",
    variant = "contained",
    ...props
}: IButtonProps) => {
  const { comp } = useContext(ThemeContext);

//   const {
//     buttonSizes,
//     componentVariants,
//     buttonStates,
//   } = useContext(ThemeContext);

//   const { button } = componentVariants;

//   const variantStyles = button[variant] ? button[variant] : button.contained;
//   // const variantStyles = button.outlined;
//   const sizeStyles = buttonSizes[size] ? buttonSizes[size] : buttonSizes.normal;

  let styles = {};

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

//   // Desativando os pointer events
//   if (props.disabled || props.loading || props.success) {
//     styles.pointerEvents = 'none'
//   }

  return styles;
}

export const Element = styled.button`
    display: inline-flex;
    vertical-align: middle;
    align-items: center;
    justify-content: center;
`;

export const Text = styled.span`
  display: inline-block;
  vertical-align: middle;
  line-height: normal;
  /* Sub-pixel position adjustment */
  /* See: https://github.com/auth0/cosmos/pull/947 */
  /* See: https://github.com/auth0/cosmos/pull/1045 */
  margin-top: 1px;
`;

export const LinkElement = styled(Element).attrs({ as: "a" })`
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
