import React from 'react';

import { Wrapper } from './Button.styles'
import { ButtonProps } from './Button.types';

const Button: React.FC<ButtonProps> = ({ onClick }) => {
    return (
        <Wrapper>
            <button type="button" onClick={onClick}>
            sadasd
        </button>
        </Wrapper>
    )
}

export default Button