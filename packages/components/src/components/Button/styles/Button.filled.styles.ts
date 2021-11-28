import { useContext } from "react";
import styled, {ThemeContext} from "styled-components";
import merge from 'lodash/merge';

import { ButtonBase } from "./Button.base.styles";

import { getBackgroundOpacity, getBackgroundOverlay } from "../../../helpers/utils";
import { IButtonProps } from "../Button.types";

export const getFilledStyles = (props: IButtonProps) => {

  const { comp, sys } = useContext(ThemeContext);
  const button = comp.button;
  const { color } = sys;

  const style = button.filled;

  let styles = {
    // component styles
    style: style,

    // States
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

  return styles;
}

export const FilledButton = styled(ButtonBase)<IButtonProps>`

  /* Appearance */

  background: ${(props) => getFilledStyles(props).states.enabled.background};
  border: none;
  color: ${props => getFilledStyles(props).states.enabled.color};
  cursor: ${(props) => getFilledStyles(props).states.enabled.cursor};

  /* States */

  &:hover {
    color: ${props => getFilledStyles(props).states.hover.color};
    background: ${props => getFilledStyles(props).states.hover.background};
  }

  &:focus {
    color: ${props => getFilledStyles(props).states.focus.color};
    background: ${props => getFilledStyles(props).states.focus.background};
    outline: ${props => getFilledStyles(props).states.focus.outline};
  }

  &:active {
    background: ${(props) => getFilledStyles(props).states.active.background};
    color: ${props => getFilledStyles(props).states.active.color};
  }

  &:disabled {
    color: ${props => getFilledStyles(props).states.disabled.color};
    background: ${props => getFilledStyles(props).states.disabled.background};
    outline: ${props => getFilledStyles(props).states.disabled.outline};
  }
`; 

export const LinkFilledButton = styled(FilledButton).attrs({ as: "a" })`
  text-decoration: none;

  ${props => {
    if (props.block) {
      return `
        padding: 0px;
        `;
      }
    }
  }

  ${props => {
    if (props.disabled) {
      return `
        color: ${getFilledStyles(props).states.disabled.color};
        background: ${getFilledStyles(props).states.disabled.background};
        outline: ${getFilledStyles(props).states.disabled.outline};
        pointer-events: none;
        `;
      }
    }
  }
`;
