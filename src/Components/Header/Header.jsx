import React from "react";
import { useNavigate } from "react-router-dom";
import xilften from '../../assets/images/xilften.png';
import * as S from './Header.styles';

const Header = (props) => {

    const navigate = useNavigate()
    const sendMe = () => {
        navigate('/');

    }
    return (
        <S.Header>
            <S.Logo isHome={props.imHome} src={xilften} alt='logo' onClick={sendMe} />
            <S.HeaderContainer>
                {props.children}
            </S.HeaderContainer>
        </S.Header>
    )
}

export default Header;