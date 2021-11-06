import React from 'react';

import { Element, LinkElement } from './Button.styles'
import { IButtonProps } from './Button.types';
import { automationAttribute } from '../../helpers/utils';

const Button: React.ForwardRefRenderFunction<HTMLButtonElement, IButtonProps> = (props: IButtonProps, _ref) => {
  
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
  const ButtonStyle = props.href ? LinkElement : Element;

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