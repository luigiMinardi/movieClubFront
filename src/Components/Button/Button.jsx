import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Button.styles';

const Button = (props) => {

    let navigate = useNavigate();

    const sendMe = (url) => {
        navigate(url);
    }

    const sendMeOrCustomFunction = (func = sendMe, param = '/') => {
        func(param)
    }

    return (
        <S.Button {...props} onClick={() => { sendMeOrCustomFunction(props.func, props.param) }}>{props.children}</S.Button>
    )
}

export default Button;