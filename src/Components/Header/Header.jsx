import React from "react";
import xilften from '../../assets/images/xilften.png';
import * as S from './styles';

const Header = (props) => {
    return (
        <S.Header>
            <S.Logo src={xilften} alt='logo' />
            <S.HeaderContainer>
                {props.children}
            </S.HeaderContainer>
        </S.Header>
    )
}

export default Header;