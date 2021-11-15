import { useContext } from "react";
import styled, {ThemeContext} from "styled-components";
import merge from 'lodash.merge'

import { ButtonBase } from "./Button.base.styles";

import { getBackgroundOpacity, getBackgroundOverlay } from "../../../helpers/utils";
import { IButtonProps } from "../Button.types";

export const getStyles = (props: IButtonProps) => {

  const { comp, sys } = useContext(ThemeContext);
  const button = comp.button;
  const { color } = sys;

  const style = button.text;

  let styles = {
    // component styles
    style: style,

    // States
    states: {
      enabled: {
        background: `transparent`,
        color: `${style.color.labelText}`,
        cursor: `${props.disabled ? "not-allowed" : "pointer"}`,
        transition: ``,
      },
      hover: {
      color: `${style.state.hovered.labelText.color}`,
      background: getBackgroundOpacity(style.state.hovered.container.stateLayerOpacity, style.state.hovered.container.stateLayerColor),
      },
      focus: {
      color: `${style.state.focused.labelText.color}`,
      background: getBackgroundOpacity(style.state.focused.container.stateLayerOpacity, style.state.focused.container.stateLayerColor),
      outline: `none`,
      },
      active: {
      background: getBackgroundOpacity(style.state.pressed.container.stateLayerOpacity, style.state.pressed.container.stateLayerColor),
      color: `${style.state.pressed.labelText.color}`,
      },
      disabled: {
      background: `transparent`,
      color: getBackgroundOpacity(style.state.disabled.labelText.opacity, style.state.disabled.labelText.color),
      outline: `none`,
      }
    },
  };

  if (props.success) {
    styles = merge(styles, {
      states: {
        enabled: {
          color: color.success,
        },
        hover: {
          color: `${color.success}`,
          background: getBackgroundOpacity(style.state.hovered.container.stateLayerOpacity, color.success),
        },
        focus: {
          color: `${color.success}`,
          background: getBackgroundOpacity(style.state.focused.container.stateLayerOpacity, color.success),
        },
        active: {
          color: `${color.success}`,
          background: getBackgroundOpacity(style.state.pressed.container.stateLayerOpacity, color.success),
        }
      }
    })
  }

  if (props.danger) {
    styles = merge(styles, {
      states: {
        enabled: {
          color: color.error,
        },
        hover: {
          color: `${color.error}`,
          background: getBackgroundOpacity(style.state.hovered.container.stateLayerOpacity, color.error),
        },
        focus: {
          color: `${color.error}`,
          background: getBackgroundOpacity(style.state.focused.container.stateLayerOpacity, color.error),
        },
        active: {
          color: `${color.error}`,
          background: getBackgroundOpacity(style.state.pressed.container.stateLayerOpacity, color.error),
        }
      }
    })
  }

  return styles;
}

export const TextButton = styled(ButtonBase)<IButtonProps>`

  /* Appearance */

  color: ${props => getStyles(props).states.enabled.color};
  cursor: ${(props) => getStyles(props).states.enabled.cursor};
  background: ${(props) => getStyles(props).states.enabled.background};
  border: none;

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
  `;
  // ${(props) => props.block && `min-width: calc(100% - ${getStyles(props).style.layout.leftRightPadding*2}px);`}
