import React from 'react';
import * as S from './styles';

const Button = (props) => {
    return (
        <S.Button {...props}>{props.children}</S.Button>
    )
}

export default Button;