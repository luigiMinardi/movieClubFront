import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';

import { LOGIN } from '../../redux/actions';
import { baseURL } from '../../utils';

import * as S from './Login.styles';
import { colorDot8, darkGray, lightGray, white } from '../../styles/colors';

import AbsoluteBackgroundImage from '../../Components/AbsoluteBackgroundImage';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Field from '../../Components/Field';

const Login = (props) => {

    let navigate = useNavigate();

    const [inputData, setInputData] = useState({ mailNick: '', password: '' });
    const [errorResponse, setErrorResponse] = useState('');

    const handleInputData = (e) => {
        setInputData({ ...inputData, [e.target.name]: e.target.value })
        console.log(inputData)
    }

    const login = async () => {
        try {
            let body = {
                email: inputData.mailNick,
                password: inputData.password
            }

            let result = await axios.post(`${baseURL}/users/login`, body)

            if (result.data.msg === 'Invalid user or password.') {
                setErrorResponse(result.data.msg)
            } else {
                props.dispatch({ type: LOGIN, payload: result.data })

                setTimeout(() => {
                    navigate('/browse')
                }, 1_500)
            }


        } catch (e) {
            console.log(e)
        }
    }

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
                                name='mailNick'
                                label='Email or nickname'

                                bg={darkGray}
                                labelColor={lightGray}
                                inputColor={white}
                                pipeColor={white}

                                w='100%'
                                h='3.125em'

                                hasChange={handleInputData}
                            />
                        </S.FieldWrapper>
                        <S.FieldWrapper>
                            <Field
                                id='pass'
                                name='password'
                                type='password'
                                label='Password'

                                bg={darkGray}
                                labelColor={lightGray}
                                inputColor={white}
                                pipeColor={white}

                                w='100%'
                                h='3.125em'

                                test='mailNick'
                                testValue=''

                                hasChange={handleInputData}
                            />
                            <button onClick={() => {
                                let input = document.getElementById('pass');
                                input.type = input.type === 'password' ? input.type = 'text' : input.type = 'password'
                            }}>
                                SHOW
                            </button>
                        </S.FieldWrapper>
                        <S.LoginButton onClick={() => login()}>Login</S.LoginButton>
                        {errorResponse}
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

export default connect()(Login);