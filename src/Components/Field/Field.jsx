import React from "react";
import * as S from './Field.styles';

const Field = (props) => {
    return (
        <S.MailField bg={props.bg}>
            <S.MailInput {...props}></S.MailInput>
            <S.MailLabel onClick={() => { document.getElementById(`${props.id}`).focus() }}>Email Adress</S.MailLabel>
        </S.MailField>
    )
}

export default Field;