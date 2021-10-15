import React, { FC } from 'react';

import { Wrapper } from './Button.styles'
import { ButtonProps } from './Button.types';

const Button: FC<ButtonProps> = ({ type, text, onClick }) => {
    return (
        <Wrapper>
            <button type="button" onClick={onClick}>
            {text}
        </button>
        </Wrapper>
    )
}

export default Button