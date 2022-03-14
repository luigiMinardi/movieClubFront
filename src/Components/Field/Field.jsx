import React, { useState } from "react";
import * as S from './Field.styles';

const Field = (props) => {

    const [hasText, setHasText] = useState(false);

    const changeCSSAndReturnOnChangeFunction = (func, e) => {
        if (e.target.value === '') {
            setHasText(false);
        } else {
            setHasText(true);
        }
        if (func) {
            return func(e)
        }
    }

    return (
        <S.Field {...props} id={undefined} type={undefined} name={undefined} autoComplete={undefined} maxLength={undefined} minLength={undefined} >
            <S.Input
                {...props}
                required={props.required || true}
                hasText={hasText}
                onChange={(e) => { changeCSSAndReturnOnChangeFunction(props.hasChange, e) }}
            ></S.Input>
            <S.Label
                labelColor={props.labelColor}
                pipeColor={props.pipeColor}
                onClick={() => { document.getElementById(`${props.id}`).focus() }}
            >
                {props.label}
            </S.Label>
        </S.Field>
    )
}

export default Field;