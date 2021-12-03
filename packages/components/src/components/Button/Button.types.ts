import React from 'react';
import { tupleString } from '../../helpers/utils';

const style = tupleString('filled', 'tonal', 'outlined', 'text');
export type Style = typeof style[number];

const ButtonHTMLTypes = tupleString('button', 'submit', 'reset');
export type ButtonHTMLType = (typeof ButtonHTMLTypes)[number];

const ButtonTargets = tupleString('_black', '_self', '_parent', "_top");
export type ButtonTarget = (typeof ButtonTargets)[number];

const ButtonIconAligns = tupleString('left', 'right');
export type ButtonIconAlign = (typeof ButtonIconAligns)[number];

const ButtonSizes = tupleString('small', 'medium', 'large');
export type ButtonSize = (typeof ButtonSizes)[number];

export interface IButtonProps {
  id?: string;
  className?: string;
  variant?: Style;
  href?: string;
  type?: ButtonHTMLType;
  target?: ButtonTarget;
  disabled?: boolean;
  disabledOnClick?: boolean;
  block?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
  loading?: boolean;
  label?: string;
  success?: boolean;
  danger?: boolean;
  'data-testid'?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref?: React.Ref<any>;
  tabIndex?: number;
  rtl?: boolean;
  icon?: JSX.Element;
  iconAlign?: ButtonIconAlign;
  loadingLabel?: string;
  size: ButtonSize;
}

export type AnchorButtonProps = 
  IButtonProps &
  Omit<React.AnchorHTMLAttributes<any>, 'type' | 'onClick'>;
  
export type NativeButtonProps = {
  htmlType?: ButtonHTMLType;
} & IButtonProps &
  Omit<React.ButtonHTMLAttributes<any>, 'type' | 'onClick'>;
  
export type ButtonProps = Partial<AnchorButtonProps & NativeButtonProps>;
