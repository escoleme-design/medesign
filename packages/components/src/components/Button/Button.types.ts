import React from 'react';
import { tupleString } from '../../helpers/utils';
import { Theme, light } from '@escoleme/medesign-tokens'

const style = tupleString('filled', 'tonal', 'outlined', 'text');
export type Style = typeof style[number];

// const ButtonShapes = tupleString('default', 'circle', 'round');
// export type ButtonShape = typeof ButtonShapes[number];

const ButtonHTMLTypes = tupleString('button', 'submit', 'reset');
export type ButtonHTMLType = (typeof ButtonHTMLTypes)[number];

const ButtonTargets = tupleString('_black', '_self', '_parent', "_top");
export type ButtonTarget = (typeof ButtonTargets)[number];

const ButtonIconAligns = tupleString('left', 'right');
export type ButtonIconAlign = (typeof ButtonIconAligns)[number];

export interface IButtonProps {
    id?: string;
    className?: string;
    size?: any;
    uppercase?: boolean;
    variant?: Style;
    href?: string;
    type?: ButtonHTMLType;
    target?: ButtonTarget;
    onClick?: React.MouseEventHandler<HTMLElement>;
    children?: React.ReactNode;
    block?: boolean;
    disabled?: boolean;
    loading?: boolean;
    success?: boolean;
    danger?: boolean;
    /**
     * Muda a cor baseado no background do componente pai
     */
    onColor?: boolean;
    'data-testid'?: string;


    
    /**
     * Mostra um icone junto com o texto para ajudar a identificar a ação.
     */
    icon?: React.ReactNode;
    /** Align Icon Left or Right */
    iconAlign?: ButtonIconAlign;
    rel?: string; // TODO: use `noopener` as default
    // /** @internal */
    labelDefaultVisible?: boolean;
    /**
     * Visually hidden label to communicate the loading state to visually
     * impaired users.
     */
    loadingLabel?: string;
    /**
     The ref to the HTML DOM element
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ref?: React.Ref<any>;
}
