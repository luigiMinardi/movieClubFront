import React from 'react';
import * as S from './Login.styles';

import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import AbsoluteBackgroundImage from '../../Components/AbsoluteBackgroundImage';

const Login = () => {
    return (
        <S.SignIn>
            <Header />

            <S.LoginSection>
                <AbsoluteBackgroundImage />

                <S.SignInCardWrapper>
                    <S.SignInCard>
                        <S.H1>Sign In</S.H1>
                        <input></input>
                        <input></input>
                        <S.LoginButton>Login</S.LoginButton>
                    </S.SignInCard>
                </S.SignInCardWrapper>

                <Footer pr='2.8em' pl='2.8em' bg="rgba(0,0,0,.8)" title='Questions? Make a Issue' titleMarginLeft='4.8em' />
            </S.LoginSection>
        </S.SignIn>
    )
}

export default Login;