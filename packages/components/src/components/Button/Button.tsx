import React, { useContext } from 'react';
import { CodeOutlined } from '@escoleme/meicons-react';

import { FilledButton, LinkFilledButton } from './styles/Button.filled.styles';
import { FilledTonalButton, LinkFilledTonalButton } from './styles/Button.tonal.styles';
import { LinkOutlinedButton, OutlinedButton } from './styles/Button.outlined.styles';
import { LinkTextButton, TextButton } from './styles/Button.text.styles';

import { automationAttribute } from '../../helpers/utils';
import { ButtonProps } from './Button.types';
import { ThemeContext } from 'styled-components';

const Button = ({
  iconAlign = 'left',
  variant = 'filled',
  ...props
}: ButtonProps) => {

  const { comp } = useContext(ThemeContext);
  const button = comp.button;

  const buttonStyles = button[variant];

  const content: JSX.Element[] = [];
  const icon = props.success ? <CodeOutlined style={{ fontSize: buttonStyles.layout.iconSize }} /> : props.icon;

  const iconNode = icon ? icon : null;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => {
    const { onClick, disabled, loading } = props;

    if(disabled || loading) {
      e.preventDefault();
      return;
    }

    (onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)?.(e);
  }

  // Icone de carregando
  if (props.loading) {
    content.push(<CodeOutlined spin style={{ fontSize: 18 }} />);
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
  let ButtonStyle;
  if (variant === 'filled') {
    ButtonStyle = props.href ? LinkFilledButton : FilledButton;
  } else if (variant === "tonal") {
    ButtonStyle = props.href ? LinkFilledTonalButton : FilledTonalButton;
  } else if (variant === "outlined") {
    ButtonStyle = props.href ? LinkOutlinedButton : OutlinedButton;
  } else if (variant === "text") {
    ButtonStyle = props.href ? LinkTextButton : TextButton;
  } else {
    ButtonStyle = FilledButton;
  }

  if(props.rtl) {
    content.reverse()
  }

  return (
    <ButtonStyle
      {...automationAttribute("button")}
      onClick={handleClick}
      {...props}
      iconAlign={iconAlign}
    >
      {content}
    </ButtonStyle>
  );
}

export default Button;