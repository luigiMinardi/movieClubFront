import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Button.styles';

const Button = (props) => {

    let navigate = useNavigate();

    const sendMe = (url) => {
        navigate(url);
    }

    const sendMeOrCustomFunction = (func = sendMe, paramArray) => {
        let param = paramArray[1] ? paramArray[1] : '/';

        if (props.onClick) {
            console.log('Use "func={yourFunction}" instead of "onClick={yourFunction}",')
            console.log('if you want to use a event set the param as "e", if passing one array set "e" as the first arg,')
            console.log('if you have any argument in the function, put in "param={yourArg}",')
            return console.log('for more than one arg, put in one array "param={[funcArg, "foo", 123, false]}".');
        }
        switch (Object.prototype.toString.call(param)) {
            case '[object Boolean]':
                return func(param);
            case '[object String]':
                if (param === 'e') {
                    return func(paramArray[0]);
                }
                return func(param);
            case '[object Number]':
                return func(param);
            case '[object Function]':
                return func(param);
            case '[object Array]':
                if (param[0] === 'e') {
                    param.splice(0, 1);
                    return func(paramArray[0], ...param);
                }
                return func(...param);
            default: return console.log("Hey the value of the 'param' prop is", [Object.prototype.toString.call(param).split(' ')[1].split(']')[0]], 'you need to pass a "Boolean", "String", "Number", "Function", "Undefined" (will be the default param ("/")) or "Array" for this to work.')
        }
    }

    return (
        <S.Button {...props} onClick={(e) => { sendMeOrCustomFunction(props.func, [e, props.param]) }}>{props.children}</S.Button>
    )
}

export default Button;