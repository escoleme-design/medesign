import React from 'react';

import { ButtonProps, IButtonProps } from './Button.types';
import { automationAttribute } from '../../helpers/utils';
import { FilledButton, LinkFilledButton } from './Button.filled.styles';
import { FilledTonalButton, LinkFilledTonalButton } from './Button.tonal.styles';
import { LinkOutlinedButton, OutlinedButton } from './Button.outlined.styles';
import { LinkTextButton, TextButton } from './Button.text.styles';
 
// const Button: React.ForwardRefRenderFunction<HTMLButtonElement, IButtonProps> = (props: IButtonProps, _ref) => {
const Button = (props: ButtonProps) => {
  
  const content: JSX.Element[] = [];
  const icon: React.ReactNode = props.success ? <>success</> : props.icon;
  const iconNode = icon ? <p>icon</p> : null;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => {
      const { onClick, disabled } = props;

      if(disabled) {
          e.preventDefault();
          return;
      }

      (onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)?.(e);
  }

  // Icone de carregando
  if (props.loading) {
    content.push(<button>loading</button>);
  }

  // Botão com ícone à esquerda
  if (iconNode && props.iconAlign === "left") {
    content.push(iconNode);
  }

  // Conteúdo do botão
  if (props.children) {
      content.push(<>{props.children}</>);
  }

  // Botão com ícone à direita
  if (iconNode && props.iconAlign === "right") {
    content.push(iconNode);
  }

    // Se tiver a propriedade href então o botão vai ser um a senão vai ser um button.
    let ButtonStyle;
    if (props.variant === 'filled') {
      ButtonStyle = props.href ? LinkFilledButton : FilledButton;
    } else if (props.variant === "tonal") {
      ButtonStyle = props.href ? LinkFilledTonalButton : FilledTonalButton;
    } else if (props.variant === "outlined") {
      ButtonStyle = props.href ? LinkOutlinedButton : OutlinedButton;
    } else if (props.variant === "text") {
      ButtonStyle = props.href ? LinkTextButton : TextButton;
    } else {
      ButtonStyle = FilledButton;
    }

  return (
    <ButtonStyle
      {...automationAttribute("button")}
      onClick={handleClick}
      {...props}
    >
      {content}
    </ButtonStyle>
  );
}

export default Button;