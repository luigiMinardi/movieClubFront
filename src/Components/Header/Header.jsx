import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import xilften from '../../assets/images/xilften.png';
import netflix from '../../assets/images/netflix.png';
import * as S from './Header.styles';
import Button from "../Button";
import { connect } from "react-redux";

const Header = (props) => {
    const [amILeft, setAmILeft] = useState(false);

    const navigate = useNavigate()

    const sendMe = () => {
        navigate('/');
    }

    const checkIfIsLeft = (e) => {
        // console.log(e.detail) // TODO: Use e.detail to auto animate the logo on double click, onclick go to wherever you want.
        let wrapper = document.getElementById('wrapper').getBoundingClientRect();
        // wrapper.left is the same as getElementById('wrapper').offSetLeft and the same goes to width.
        let x = e.clientX - wrapper.left; // e.clientX picks the mouse position relative to the client width (left to right).
        if (x < wrapper.width / 2) {
            setAmILeft(true); // is left
        } else {
            setAmILeft(false); //  is right
        }
    }

    return (
        <S.Header>
            <S.LogoWrapper
                id='wrapper'
                onMouseEnter={checkIfIsLeft}
                isLeft={amILeft}
            >
                <S.LogoFlipper>
                    <S.FlipFront>
                        <S.Logo isHome={props.imHome} src={xilften} alt='logo' onClick={sendMe} />
                    </S.FlipFront>
                    <S.FlipBack>
                        <S.Logo isHome={props.imHome} src={netflix} alt='logo' onClick={sendMe} />
                    </S.FlipBack>
                </S.LogoFlipper>
            </S.LogoWrapper>

            <S.HeaderContainer>
                {props?.user?.isAdmin && <>
                    <Button param='/admin'>Admin</Button>
                    <div style={{paddingRight: '1.5em'}}></div>
                </>
                }
            {props.children}
        </S.HeaderContainer>
        </S.Header >
    )
}

export default connect((store) => ({
    user: store.authenticatedUser.user
}))(Header);