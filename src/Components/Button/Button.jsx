import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Button.styles';

const Button = (props) => {
    const navigate = useNavigate();
    const sendMe = () => {
        if (props.url) {
            navigate(props.url);
        }
    }
    return (
        <S.Button {...props} onClick={sendMe}>{props.children}</S.Button>
    )
}

export default Button;