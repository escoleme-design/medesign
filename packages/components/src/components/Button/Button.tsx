import React, { useContext, useState } from 'react';
import { CodeOutlined } from '@escoleme/meicons-react';

import { FilledButton, LinkFilledButton } from './styles/Button.filled.styles';
import { FilledTonalButton, LinkFilledTonalButton } from './styles/Button.tonal.styles';
import { LinkOutlinedButton, OutlinedButton } from './styles/Button.outlined.styles';
import { LinkTextButton, TextButton } from './styles/Button.text.styles';

import { automationAttribute } from '../../helpers/utils';
import { ButtonProps } from './Button.types';
import { ThemeContext } from 'styled-components';


const Button = React.forwardRef(
  (
    {
      iconAlign = 'left',
      variant = 'filled',
      size ='medium',
      ...props
    }: ButtonProps,
    ref: ButtonProps['ref']
  ) => {

  const { comp } = useContext(ThemeContext);
  const button = comp.button;

  const buttonStyles = button[variant];
  const { iconSize } = buttonStyles.layout[size] ? buttonStyles.layout[size] : buttonStyles.layout.medium;

  const content: JSX.Element[] = [];
  const icon = props.icon;

  const iconNode = icon ? icon : null;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => {
    const { onClick, disabled, disabledOnClick, loading } = props;

    if(disabledOnClick || disabled || loading) {
      e.preventDefault();
      return;
    }

    (onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)?.(e);
  }


  // Icone de carregando
  if (props.loading) {
    content.push(<CodeOutlined spin style={{ fontSize: iconSize }} />);
  }

  // Botão com ícone à esquerda
  if (iconNode && iconAlign === "left") {
    content.push(iconNode);
  }

  // Conteúdo do botão
  if (props.label) {

    // Se estiver carregando e tiver uma LoadingLabel
    if (props.loading && props.loadingLabel) {
      content.push(<>{props.loadingLabel}</>);

    // Conteúdo normal
    } else {
      content.push(<span style={{
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }}>{props.label}</span>);
    }
  }

  // Botão com ícone à direita
  if (iconNode && iconAlign === "right") {
    content.push(iconNode);
  }

  // Se tiver a propriedade href então o botão vai ser um a senão vai ser um button.
  let ButtonStyle = FilledButton;

  if (variant === 'filled') {
    ButtonStyle = props.href ? LinkFilledButton : FilledButton;
  } else if (variant === "tonal") {
    ButtonStyle = props.href ? LinkFilledTonalButton : FilledTonalButton;
  } else if (variant === "outlined") {
    ButtonStyle = props.href ? LinkOutlinedButton : OutlinedButton;
  } else if (variant === "text") {
    ButtonStyle = props.href ? LinkTextButton : TextButton;
  }

  if(props.rtl) {
    content.reverse()
  }

  return (
    <ButtonStyle
      {...automationAttribute("button")}

      {...props}
      onClick={handleClick}
      iconAlign={iconAlign}
      size={size}
      loading={props.loading}
      ref={ref}
    >
      {content}
    </ButtonStyle>
  );
});

Button.displayName = 'Button';

export default Button;
