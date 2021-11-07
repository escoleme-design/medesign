import React from 'react';
import { tupleString } from '../../helpers/utils';

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
    variant?: Style;
    href?: string;
    type?: ButtonHTMLType;
    target?: ButtonTarget;
    disabled?: boolean;
    block?: boolean;
    onClick?: React.MouseEventHandler<HTMLElement>;
    loading?: boolean;
    children?: React.ReactNode;
    success?: boolean;
    danger?: boolean;
    onColor?: boolean;
    'data-testid'?: string;
    /**
     The ref to the HTML DOM element
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ref?: React.Ref<any>;



    
    size?: any;


    

    icon?: React.ReactNode;
    /** Align Icon Left or Right */
    iconAlign?: ButtonIconAlign;
    rel?: string; // TODO: use `noopener` as default
    loadingLabel?: string;
}
