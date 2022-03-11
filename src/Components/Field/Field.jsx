import React from "react";
import * as S from './Field.styles';

const Field = (props) => {
    return (
        <S.MailField {...props} id={undefined} type={undefined} name={undefined} autoComplete={undefined} maxLength={undefined} minLength={undefined} >
            <S.MailInput {...props}></S.MailInput>
            <S.MailLabel labelColor={props.labelColor} pipeColor={props.pipeColor} onClick={() => { document.getElementById(`${props.id}`).focus() }}>{props.label}</S.MailLabel>
        </S.MailField>
    )
}

export default Field;