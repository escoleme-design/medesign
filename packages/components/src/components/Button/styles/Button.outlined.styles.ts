import { useContext } from "react";
import styled, {ThemeContext} from "styled-components";
import merge from 'lodash.merge'

import { ButtonBase } from "./Button.base.styles";

import { getBackgroundOpacity, getBackgroundOverlay } from "../../../helpers/utils";
import { IButtonProps } from "../Button.types";

export const getOutlinedStyles = (props: IButtonProps) => {

  const { comp, sys } = useContext(ThemeContext);
  const button = comp.button;
  const { color } = sys;

  const style = button.outlined;

  let styles = {
    // component styles
    style: style,

    // States
    states: {
      enabled: {
        background: `transparent`,
        border: `${style.state.enabled.container.outlineWidth}px solid ${style.state.enabled.container.outlineColor}`,
        color: `${style.state.enabled.labelText.color}`,
        cursor: `${props.disabled ? "not-allowed" : "pointer"}`,
        transition: ``,
      },
      hover: {
        color: `${style.state.hovered.labelText.color}`,
        background: getBackgroundOverlay(style.color.container, style.state.hovered.container.stateLayerOpacity, style.state.hovered.container.stateLayerColor),
      },
      focus: {
        color: `${style.state.focused.labelText.color}`,
        background: getBackgroundOverlay(style.color.container, style.state.focused.container.stateLayerOpacity, style.state.focused.container.stateLayerColor),
        borderColor: `${style.state.focused.container.outlineColor}`,
        outline: `none`,
      },
      active: {
        background: getBackgroundOverlay(style.color.container, style.state.pressed.container.stateLayerOpacity, style.state.pressed.container.stateLayerColor),
        border: `${style.state.enabled.container.outlineWidth}px solid ${style.state.enabled.container.outlineColor}`,
        color: `${style.state.pressed.labelText.color}`,
      },
      disabled: {
        background: `transparent`,
        color: getBackgroundOpacity(style.state.disabled.labelText.opacity, style.state.disabled.labelText.color),
        border: `${style.state.enabled.container.outlineWidth}px solid ${getBackgroundOpacity(style.state.disabled.container.outlineOpacity, style.state.disabled.container.outlineColor)}`,
        outline: `none`,
      }
    },
  };

  if (props.success) {
    styles = merge(styles, {
      states: {
        enabled: {
          border: `${style.state.enabled.container.outlineWidth}px solid ${color.success}`,
          color: color.success,
        },
        hover: {
          color: `${color.success}`,
          background: getBackgroundOpacity(style.state.hovered.container.stateLayerOpacity, color.success),
        },
        focus: {
          color: `${color.success}`,
          background: getBackgroundOpacity(style.state.focused.container.stateLayerOpacity, color.success),
          borderColor: `${color.success}`,
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
          border: `${style.state.enabled.container.outlineWidth}px solid ${color.error}`,
          color: color.error,
        },
        hover: {
          color: `${color.error}`,
          background: getBackgroundOpacity(style.state.hovered.container.stateLayerOpacity, color.error),
        },
        focus: {
          color: `${color.error}`,
          background: getBackgroundOpacity(style.state.focused.container.stateLayerOpacity, color.error),
          borderColor: `${color.error}`,
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

export const OutlinedButton = styled(ButtonBase)<IButtonProps>`

  /* Appearance */

  background: ${(props) => getOutlinedStyles(props).states.enabled.background};
  border: ${props => getOutlinedStyles(props).states.enabled.border};
  color: ${props => getOutlinedStyles(props).states.enabled.color};
  cursor: ${(props) => getOutlinedStyles(props).states.enabled.cursor};

  /* States */

  &:hover {
    color: ${props => getOutlinedStyles(props).states.hover.color};
    background: ${props => getOutlinedStyles(props).states.hover.background};
  } 

  &:focus {
    color: ${props => getOutlinedStyles(props).states.focus.color};
    background: ${props => getOutlinedStyles(props).states.focus.background};
    border-color: ${props => getOutlinedStyles(props).states.focus.borderColor};
    outline: ${props => getOutlinedStyles(props).states.focus.outline};
  }

  &:active {
    background: ${(props) => getOutlinedStyles(props).states.active.background};
    border: 1px solid ${props => getOutlinedStyles(props).states.active.border};
    color: ${props => getOutlinedStyles(props).states.active.color};
  }

  ${props => {
    if (props.disabled) {
      return (`
        color: ${() => getOutlinedStyles(props).states.disabled.color};
        background: ${() => getOutlinedStyles(props).states.disabled.background};
        border: ${() => getOutlinedStyles(props).states.disabled.border};
        outline: ${() => getOutlinedStyles(props).states.disabled.outline};
      `);
    }
  }}

  &:disabled {
    color: ${props => getOutlinedStyles(props).states.disabled.color};
    background: ${props => getOutlinedStyles(props).states.disabled.background};
    border: ${props => getOutlinedStyles(props).states.disabled.border};
    outline: ${props => getOutlinedStyles(props).states.disabled.outline};
  }

`; 

export const LinkOutlinedButton = styled(OutlinedButton).attrs({ as: "a" })`
  text-decoration: none;
`;
// ${(props) => props.block && `min-width: calc(100% - ${getOutlinedStyles(props).style.layout.leftRightPadding*2}px);`}
