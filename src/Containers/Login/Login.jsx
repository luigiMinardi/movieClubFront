import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';

import { LOGIN } from '../../redux/actions';
import { baseURL } from '../../utils';

import * as S from './Login.styles';
import { colorDot8, darkGray, gray, lightGray, white } from '../../styles/colors';

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
        <>
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
                            <button onClick={(e) => {
                                let input = document.getElementById('pass');
                                if (input.type === 'password') {
                                    input.type = 'text'
                                    e.target.innerHTML = 'HIDE'
                                } else {
                                    input.type = 'password'
                                    e.target.innerHTML = 'SHOW'
                                }
                            }}>
                                SHOW
                            </button>
                        </S.FieldWrapper>
                        <S.LoginButton func={login}>Login</S.LoginButton>
                        {errorResponse}
                        <p style={{ color: gray, fontSize: 'large' }}>Not a member yet? <a style={{ color: white, cursor: 'pointer' }} onClick={() => navigate('/signup')} onMouseEnter={e => e.target.style.textDecoration = 'underline'} onMouseLeave={e => e.target.style.textDecoration = 'none'}>Sign up now.</a></p>
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
        </>
    )
}

export default connect()(Login);