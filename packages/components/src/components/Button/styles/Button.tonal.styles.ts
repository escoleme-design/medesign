import { useContext } from "react";
import styled, {ThemeContext} from "styled-components";
import merge from 'lodash/merge';

import { ButtonBase } from "./Button.base.styles";

import { getBackgroundOpacity, getBackgroundOverlay } from "../../../helpers/utils";
import { IButtonProps } from "../Button.types";

export const getFilledTonalStyles = (props: IButtonProps) => {

  const { comp, sys } = useContext(ThemeContext);
  const button = comp.button;
  const { color } = sys;

  const style = button.tonal;

  let styles = {
    // component styles
    style: style,

    // States
    states: {
      enabled: {
        background: `${style.state.enabled.container.color}`,
        border: `none`,
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
        borderColor: `none`,
        outline: `none`,
      },
      active: {
        background: `${style.state.enabled.container.color}`,
        color: `${style.state.enabled.labelText.color}`,
        border: `none`,
      },
      disabled: {
        color: getBackgroundOpacity(style.state.disabled.labelText.opacity, style.state.disabled.labelText.color),
        background: getBackgroundOpacity(style.state.disabled.container.opacity, style.state.disabled.container.color),
        border: `none`,
        outline: `none`,
      }
    },
  };

  if (props.success) {
    styles = merge(styles, {
      states: {
        enabled: {
          background: color.successContainer,
          color: color.onSuccessContainer,
        },
        hover: {
          color: `${color.onSuccessContainer}`,
          background: getBackgroundOverlay(color.successContainer, style.state.hovered.container.stateLayerOpacity, color.onSuccessContainer),
        },
        focus: {
          color: `${color.onSuccessContainer}`,
          background: getBackgroundOverlay(color.successContainer, style.state.focused.container.stateLayerOpacity, color.onSuccessContainer),
        },
        active: {
          color: `${color.onSuccessContainer}`,
          background: `${color.successContainer}`,
        }
      }
    })
  }

  if (props.danger) {
    styles = merge(styles, {
      states: {
        enabled: {
          background: color.errorContainer,
          color: color.onErrorContainer,
        },
        hover: {
          color: `${color.onErrorContainer}`,
          background: getBackgroundOverlay(color.errorContainer, style.state.hovered.container.stateLayerOpacity, color.onErrorContainer),
        },
        focus: {
          color: `${color.onErrorContainer}`,
          background: getBackgroundOverlay(color.errorContainer, style.state.focused.container.stateLayerOpacity, color.onErrorContainer),
        },
        active: {
          color: `${color.onErrorContainer}`,
          background: `${color.errorContainer}`,
        }
      }
    })
  }

  return styles;
}

export const FilledTonalButton = styled(ButtonBase)<IButtonProps>`

  /* Appearance */

  background: ${(props) => getFilledTonalStyles(props).states.enabled.background};
  border: ${props => getFilledTonalStyles(props).states.enabled.border};
  color: ${props => getFilledTonalStyles(props).states.enabled.color};
  cursor: ${(props) => getFilledTonalStyles(props).states.enabled.cursor};

  /* States */

  &:hover {
    color: ${props => getFilledTonalStyles(props).states.hover.color};
    background: ${props => getFilledTonalStyles(props).states.hover.background};
    border-color: ${props => getFilledTonalStyles(props).style.state.enabled.container.color};
  }

  &:focus {
    color: ${props => getFilledTonalStyles(props).states.focus.color};
    background: ${props => getFilledTonalStyles(props).states.focus.background};
    border-color: ${props => getFilledTonalStyles(props).states.focus.borderColor};
    outline: ${props => getFilledTonalStyles(props).states.focus.outline};
  }

  &:active {
    background: ${(props) => getFilledTonalStyles(props).states.active.background};
    border: 1px solid ${props => getFilledTonalStyles(props).states.active.border};
    color: ${props => getFilledTonalStyles(props).states.active.color};
  }

  &:disabled {
    color: ${props => getFilledTonalStyles(props).states.disabled.color};
    background: ${props => getFilledTonalStyles(props).states.disabled.background};
    border: ${props => getFilledTonalStyles(props).states.disabled.border};
    outline: ${props => getFilledTonalStyles(props).states.disabled.outline};
  }
`; 

export const LinkFilledTonalButton = styled(FilledTonalButton).attrs({ as: "a" })`
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
        color: ${getFilledTonalStyles(props).states.disabled.color};
        background: ${getFilledTonalStyles(props).states.disabled.background};
        outline: ${getFilledTonalStyles(props).states.disabled.outline};
        pointer-events: none;
        `;
      }
    }
  }
`;
