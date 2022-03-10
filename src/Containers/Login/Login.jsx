import React from 'react';
import * as S from './styles';

import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import AbsoluteBackgroundImage from '../../Components/AbsoluteBackgroundImage';
import Button from '../../Components/Button';

const Login = () => {
    return (
        <S.SignIn>
            <Header />

            <S.LoginSection>
                <AbsoluteBackgroundImage />

                <S.SignInCard>

                    <Button>Login</Button>
                </S.SignInCard>
                <Footer bg="rgba(0,0,0,.8)" />
            </S.LoginSection>

        </S.SignIn>
    )
}

export default Login;