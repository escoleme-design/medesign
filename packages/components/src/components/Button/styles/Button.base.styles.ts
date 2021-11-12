import { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import merge from "lodash.merge";

import { IButtonProps } from "../Button.types";

export const getBaseStyles = ({
    size = "normal",
    variant = "filled",
    rtl = false,
    iconAlign = 'left',
    loading = false,
    disabled = false,
    icon = undefined,
    block = false,
    label = undefined,
    success = false
}: IButtonProps) => {
  
    const { comp } = useContext(ThemeContext);
    const button = comp.button;

    let isIconAlignLeft =  rtl ? !(iconAlign === 'left') : (iconAlign === 'left');
    const style = button[variant];
  
    //   const sizeStyles = buttonSizes[size] ? buttonSizes[size] : buttonSizes.normal;
  
    let styles = {
        // component styles
        style,

        // layout and size       
        isIconAlignLeft,
        minHeight: `${style.layout.height}px`,
        height: `${style.layout.height}px`,
        padding: `0 ${style.layout.leftRightPadding}px`,
        borderRadius: `${style.layout.shape}px`,
        paddingBetweenElements: `${label ? style.layout.paddingBetweenElements : 0}px`,

        // Typography
        fontFamily: `${style.state.enabled.labelText.font}`,
        lineHeight: `${style.state.enabled.labelText.lineHeight}`,
        fontSize: `${style.state.enabled.labelText.size}px`,
        fontWeight: `${style.state.enabled.labelText.weight}`,
        pointerEvents: `auto`,
    };
    
    // Caso o botão tenha um icone o padding vai ser alterado baseado no design token
    if ((icon || loading) && isIconAlignLeft) {
        styles = merge(styles, {
            padding: `0px ${style.layout.rightPaddingWithIcon}px 0px ${style.layout.LeftPaddingWithIcon}px`,
        })
    } else if ((icon || loading) && !isIconAlignLeft) {
        styles = merge(styles, {
            padding: `0px ${style.layout.LeftPaddingWithIcon}px 0px ${style.layout.rightPaddingWithIcon}px`,
        })
    }
  
    // Desativando o botão
    if (disabled || loading || success) {
        styles.pointerEvents = 'none'
    }
    
    return styles;
  }

export const ButtonBase = styled.button<IButtonProps>`

    /* Layout */

    display: inline-flex;
    vertical-align: middle;
    align-items: center;
    justify-content: center;

    /* Safari button margins reset */
    /* See https://github.com/google/material-design-lite/issues/4008 */
    margin-top: 0px;
    margin-left: 0px;

    /* Size */

    ${(props) => props.block && `min-width: 100%;`}
    min-height: ${(props) => getBaseStyles(props).minHeight};
    height: ${(props) => getBaseStyles(props).height};
    padding: ${(props) => getBaseStyles(props).padding};
    border-radius: ${(props) => getBaseStyles(props).borderRadius};

    /* Typography */

    white-space: nowrap;
    font-family: ${(props) => getBaseStyles(props).fontFamily};
    line-height: ${(props) => getBaseStyles(props).lineHeight};
    font-size: ${(props) => getBaseStyles(props).fontSize};
    font-weight: ${(props) => getBaseStyles(props).fontWeight};

    /* Appearance */
    
    ///transition: opacity 15ms linear,background-color 15ms linear;
    pointer-events: ${(props) => getBaseStyles(props).pointerEvents};

    /* Margin for icon */

    ${props => {

        // Se o botão tiver um icone ou estiver com o status de carregando então deve
        // inserir uma margin para o icone
        if (props.icon || props.loading) {

            // margin direita para caso o botão esteja no lado esquerdo
            if (getBaseStyles(props).isIconAlignLeft) {
                return (`
                    span:first-child {
                        ${`margin-right: ${getBaseStyles(props).paddingBetweenElements};`}
                    }
                `);
            
            // margin esquerda para caso o botão esteja no lado direito
            } else if (!getBaseStyles(props).isIconAlignLeft) {
                return (`
                    span:last-child {
                        ${`margin-left: ${getBaseStyles(props).paddingBetweenElements};`}
                    }
                `);
            }
        }

    }};
`;