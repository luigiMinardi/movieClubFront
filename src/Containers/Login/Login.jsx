import React from 'react';
import * as S from './Login.styles';

import AbsoluteBackgroundImage from '../../Components/AbsoluteBackgroundImage';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Field from '../../Components/Field';
import { colorDot8, darkGray, lightGray, white } from '../../styles/colors';

const Login = () => {
    return (
        <S.SignIn>
            <Header />

            <S.LoginSection>
                <AbsoluteBackgroundImage />

                <S.SignInCardWrapper>
                    <S.SignInCard>
                        <S.H1>Sign In</S.H1>
                        <S.FieldWrapper>
                            <Field
                                id="mail-nick"
                                type="text"
                                label='Email or nickname'

                                bg={darkGray}
                                labelColor={lightGray}
                                inputColor={white}
                                pipeColor={white}

                                w='100%'
                                h='3.125em'
                            />
                        </S.FieldWrapper>
                        <S.FieldWrapper>
                            <Field
                                id="pass"
                                type="password"
                                label='Password'

                                bg={darkGray}
                                labelColor={lightGray}
                                inputColor={white}
                                pipeColor={white}

                                w='100%'
                                h='3.125em'
                            />
                            <button onClick={() => {
                                let input = document.getElementById('pass');
                                input.type = input.type === 'password' ? input.type = 'text' : input.type = 'password'
                            }}>
                                SHOW
                            </button>
                        </S.FieldWrapper>
                        <S.LoginButton>Login</S.LoginButton>
                    </S.SignInCard>
                </S.SignInCardWrapper>

                <Footer
                    pr='2.8em'
                    pl='2.8em'
                    bg={colorDot8()}
                    title='Questions? Make a Issue'
                    titleMarginLeft='4.8em'
                />
            </S.LoginSection>
        </S.SignIn>
    )
}

export default Login;