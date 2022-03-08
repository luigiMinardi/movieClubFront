import React from "react";
import xilften from '../../assets/images/xilften.png';
import * as S from './styles';

const Header = () => {
    return (
        <S.Header>
            <S.Logo src={xilften} alt='logo' />
            <S.HeaderContainer>
                <S.ButtonHeader disabled={true}>Languages</S.ButtonHeader>
                <S.ButtonHeader>Sign In</S.ButtonHeader>
            </S.HeaderContainer>
        </S.Header>
    )
}

export default Header;