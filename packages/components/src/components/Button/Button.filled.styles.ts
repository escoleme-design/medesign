import React from "react";
import styled, {ThemeContext} from "styled-components";
import { getBackgroundOpacity, getBackgroundOverlay } from "../../helpers/utils";
import { ButtonBase } from "./Button.styles";
import { IButtonProps } from "./Button.types";
import merge from 'lodash.merge'

export const getStyles = ({
    size = "normal",
    variant = "filled",
    ...props
}: IButtonProps) => {

  const { comp, sys } = React.useContext(ThemeContext);
  const button = comp.button;
  const { color } = sys;

  const style = button.filled;

//   const sizeStyles = buttonSizes[size] ? buttonSizes[size] : buttonSizes.normal;

  let styles = {
    style: style,
    minHeight: `${style.layout.height}px`,
    height: `${style.layout.height}px`,
    padding: `0 ${style.layout.leftRightPadding}px`,
    borderRadius: `${style.layout.shape}px`,
    fontFamily: `${style.state.enabled.labelText.font}`,
    lineHeight: `${style.state.enabled.labelText.lineHeight}`,
    fontSize: `${style.state.enabled.labelText.size}px`,
    fontWeight: `${style.state.enabled.labelText.weight}`,
    pointerEvents: `auto`,
    transtion: ``,
    states: {
      enabled: {
        background: `${style.state.enabled.container.color}`,
        color: `${style.state.enabled.labelText.color}`,
        cursor: `${props.disabled ? "not-allowed" : "pointer"}`,
        transition: ``,
      },
      hover: {
        color: `${style.state.hovered.labelText.color}`,
        background: getBackgroundOverlay(
          style.color.container,
          style.state.hovered.container.stateLayerOpacity,
          style.state.hovered.container.stateLayerColor
        ),
      },
      focus: {
        color: `${style.state.focused.labelText.color}`,
        background: getBackgroundOverlay(
          style.color.container,
          style.state.focused.container.stateLayerOpacity,
          style.state.focused.container.stateLayerColor
        ),
        outline: `none`,
      },
      active: {
        background: getBackgroundOverlay(
          style.color.container,
          style.state.pressed.container.stateLayerOpacity,
          style.state.pressed.container.stateLayerColor
        ),
        color: `${style.state.pressed.labelText.color}`,
      },
      disabled: {
        color: getBackgroundOpacity(
          style.state.disabled.labelText.opacity,
          style.state.disabled.labelText.color
        ),
        background: getBackgroundOpacity(
          style.state.disabled.container.opacity,
          style.state.disabled.container.color
        ),
        outline: `none`,
      }
    },
  };

  // Botão com estado de bem-sucedido
  if (props.success) {
    styles = merge(styles, {
      states: {
        enabled: {
          background: color.success,
          color: color.onSuccess,
        },
        hover: {
          color: `${color.onSuccess}`,
          background: getBackgroundOverlay(color.success, style.state.hovered.container.stateLayerOpacity, color.onSuccess),
        },
        focus: {
          color: `${color.onSuccess}`,
          background: getBackgroundOverlay(color.success, style.state.focused.container.stateLayerOpacity, color.onSuccess),
        },
        active: {
          color: `${color.onSuccess}`,
          background: `${color.success}`,
        }
      }
    })
  }

  // Botão com estado de "danger"
  if (props.danger) {
    styles = merge(styles, {
      states: {
        enabled: {
          background: color.error,
          color: color.onError,
        },
        hover: {
          color: `${color.onError}`,
          background: getBackgroundOverlay(color.error, style.state.hovered.container.stateLayerOpacity, color.onError),
        },
        focus: {
          color: `${color.onError}`,
          background: getBackgroundOverlay(color.error, style.state.focused.container.stateLayerOpacity, color.onError),
        },
        active: {
          color: `${color.onError}`,
          background: `${color.error}`,
        }
      }
    })
  }

  // Desativando os pointer events
  if (props.disabled || props.loading || props.success) {
    styles.pointerEvents = 'none'
  }

  return styles;
}

export const FilledButton = styled(ButtonBase)<IButtonProps>`
    /* Size */

    // min-width: 0px;
    ${(props) => props.block && `min-width: 100%;`}
    min-height: ${(props) => getStyles(props).minHeight};
    height: ${(props) => getStyles(props).height};
    padding: ${(props) => getStyles(props).padding};
    border-radius: ${(props) => getStyles(props).borderRadius};


    /* Typograph */

    white-space: nowrap;
    font-family: ${(props) => getStyles(props).fontFamily};
    line-height: ${(props) => getStyles(props).lineHeight};
    font-size: ${(props) => getStyles(props).fontSize};
    font-weight: ${(props) => getStyles(props).fontWeight};
    
    /* Appearance */

    background: ${(props) => getStyles(props).states.enabled.background};
    border: none;
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

export const LinkFilledButton = styled(FilledButton).attrs({ as: "a" })`
  text-decoration: none;
  ${(props) => props.block && `min-width: calc(100% - ${getStyles(props).style.layout.leftRightPadding*2}px);`}
`;
