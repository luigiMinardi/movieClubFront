import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';

import { baseURL } from '../../utils';

import * as S from './Register.styles';
import { colorDot8, darkGray, lightGray, red, white } from '../../styles/colors';

import AbsoluteBackgroundImage from '../../Components/AbsoluteBackgroundImage';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Field from '../../Components/Field';
import { LOGIN, REGISTER, REGISTERED } from '../../redux/actions';

const Register = (props) => {


    let navigate = useNavigate();

    const [inputData, setInputData] = useState({
        name: null,
        age: null,
        surname: null,
        email: null,
        nickname: null,
        password: null,
    });
    const [errorResponse, setErrorResponse] = useState({
        name: null,
        age: null,
        surname: null,
        email: null,
        nickname: null,
        password: null,
    });
    const [step, setStep] = useState(false);

    const handleInputData = (e) => {
        setInputData({ ...inputData, [e.target.name]: e.target.value.trim() ? e.target.value : null })
        setErrorResponse({ ...errorResponse, [e.target.name]: !e.target.value.trim() ? errorResponse[e.target.name] : null })
    }

    // console.log('inptdta', inputData)
    // console.log('id', props.data.id)
    // console.log('dta', props.data)
    const register = async (e, stage) => {
        // console.log("stage", stage)
        // console.log('e', e.target.offsetParent.children)
        for (let element in e.target.offsetParent.children) {
            // console.log('elmt', e.target.offsetParent.children[element])
            if (e.target.offsetParent.children[element].tagName === 'SECTION') {
                e.target.offsetParent.children[element].children[0].children[0].value = '';
                // console.log('elmt', e.target.offsetParent.children[element].children[0].children[0]);
            }
        }
        try {
            switch (step) {
                case false:

                    if (props.data.step) {
                        let body = {
                            email: props.data.email,
                            password: inputData.password
                        }
                        let result = await axios.post(`${baseURL}/users/login`, body)
                        // console.log(result.data)
                        if (result.status === 200) {
                            setStep(true)
                            props.dispatch({ type: REGISTER, id: result.data.user.id, token: result.data.token })
                        }
                    } else {
                        let body = {
                            email: inputData.email,
                            name: inputData.name,
                            password: inputData.password,
                        }
                        let result = await axios.post(`${baseURL}/users/`, body)
                        // let result = {
                        //     status: 201,
                        //     data: {
                        //         email: "em@il.com",
                        //         name: "inputData",
                        //         password: "inputData"
                        //     }
                        // }
                        if (result.status === 201) {
                            // console.log(inputData.name)
                            // console.log(result.data.user.id)
                            setStep(true)
                            props.dispatch({ type: REGISTER, payload: { email: inputData.email, name: inputData.name, step: 1, id: result.data.user.id } })
                            // props.dispatch({ type: REGISTER, payload: { email: result.data.email, name: result.data.name, step: 1 } })
                        } else if (result.status === 200) {
                            setErrorResponse({ ...errorResponse, email: result.data.msg })

                        } else {
                            console.log(result.data)
                        }

                    }
                    break;
                case true:
                    // console.log('case 1')
                    setStep(false)

                    let body = {
                        email: props.data.email,
                        password: inputData.password
                    }
                    let result = await axios.post(`${baseURL}/users/login`, body)
                    if (result.status === 200) {
                        let update_body = {}
                        for (let prop in inputData) {
                            if (inputData[prop] && prop !== 'password') {
                                update_body[prop] = inputData[prop]
                            }
                            // console.log(inputData[prop])
                        }
                        let config = {
                            headers: { Authorization: `Bearer ${result.data.token}` }
                        };
                        let update = await axios.put(`${baseURL}/users/${result.data.user.id}`, update_body, config)
                        // console.log(update.data)

                        props.dispatch({ type: LOGIN, payload: result.data })

                        props.dispatch({ type: REGISTERED })
                        navigate('/browse')
                    } else {
                        console.log(result.data)
                    }
                    break;
                default:
                    console.log('Something bizarre happened')
                    break;
            }

        } catch (error) {
            // console.log(error.response.data.error.message.match(/password|name|email/i)[0])
            console.log(error)
            console.log(error.response)
            setErrorResponse({ ...errorResponse, [error.response.data.error.message.match(/password|name|email/i)[0]]: error.response.data.error.message })
        }
    }

    return (
        <>
            <Header />

            <S.RegisterSection>
                <AbsoluteBackgroundImage />

                <S.SignUpCardWrapper>
                    {step === false ?
                        <S.SignUpCard>
                            <S.H1>Sign Up</S.H1>
                            <S.FieldWrapper>
                                {
                                    !props.data.step ?
                                        <Field
                                            id='name'
                                            type='text'
                                            name='name'
                                            label='Name'

                                            bg={darkGray}
                                            labelColor={lightGray}
                                            inputColor={white}
                                            pipeColor={white}

                                            w='100%'
                                            h='3.125em'

                                            hasChange={handleInputData}
                                            error={errorResponse['name']}
                                        />
                                        : <div> Wellcome back <span style={{ color: red }}>{props.data.name}</span>! <br /> Let's continue your registration!</div>
                                }
                            </S.FieldWrapper>
                            <S.FieldWrapper>
                                {
                                    !props.data.step ?
                                        <Field
                                            id='email'
                                            type='email'
                                            name='email'
                                            label='Email'

                                            bg={darkGray}
                                            labelColor={lightGray}
                                            inputColor={white}
                                            pipeColor={white}

                                            w='100%'
                                            h='3.125em'

                                            hasChange={handleInputData}
                                            error={errorResponse['email']}
                                        />
                                        : <div> Email: <span style={{ color: red }}>{props.data.email}</span> <br /> Please tell me your password again to proceed.</div>
                                }
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
                                    error={errorResponse['password']}
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
                            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                                <S.RegisterButton func={register} param={['e', step]} >Register</S.RegisterButton>
                                {props.data.step && <S.RegisterButton func={() => {
                                    props.dispatch({ type: REGISTERED })
                                }} >I'm not this user!</S.RegisterButton>}
                            </div>
                        </S.SignUpCard>


                        : step === true ?
                            <S.SignUpCard>
                                <S.H1>Complete your account</S.H1>
                                <S.FieldWrapper>
                                    <Field
                                        id='name'
                                        type='text'
                                        name='name'
                                        label={`Name: ${props.data.name}`}

                                        bg={darkGray}
                                        labelColor={lightGray}
                                        inputColor={white}
                                        pipeColor={white}

                                        w='100%'
                                        h='3.125em'

                                        hasChange={handleInputData}
                                    />
                                </S.FieldWrapper>
                                {/* // TODO: Return from back if the name passed is a valid nickName */}
                                <S.FieldWrapper>
                                    <Field
                                        id='age'
                                        type='number'
                                        name='age'
                                        label='Age'

                                        bg={darkGray}
                                        labelColor={lightGray}
                                        inputColor={white}
                                        pipeColor={white}

                                        w='100%'
                                        h='3.125em'

                                        hasChange={handleInputData}
                                        error={errorResponse['age']}
                                    />
                                </S.FieldWrapper>
                                <S.FieldWrapper>
                                    <Field
                                        id='surname'
                                        type='text'
                                        name='surname'
                                        label='Surname'

                                        bg={darkGray}
                                        labelColor={lightGray}
                                        inputColor={white}
                                        pipeColor={white}

                                        w='100%'
                                        h='3.125em'

                                        hasChange={handleInputData}
                                        error={errorResponse['surname']}
                                    />
                                </S.FieldWrapper>
                                <S.FieldWrapper>
                                    <Field
                                        id='nickname'
                                        type='text'
                                        name='nickname'
                                        label='Nickname'

                                        bg={darkGray}
                                        labelColor={lightGray}
                                        inputColor={white}
                                        pipeColor={white}

                                        w='100%'
                                        h='3.125em'

                                        hasChange={handleInputData}
                                        error={errorResponse['nickname']}
                                    />
                                </S.FieldWrapper>
                                <S.FieldWrapper>
                                    <Field
                                        id='email'
                                        type='email'
                                        name='email'
                                        label={`Email: ${props.data.email}`}

                                        bg={darkGray}
                                        labelColor={lightGray}
                                        inputColor={white}
                                        pipeColor={white}

                                        w='100%'
                                        h='3.125em'

                                        hasChange={handleInputData}
                                    />
                                </S.FieldWrapper>

                                <S.RegisterButton func={register} param={['e', step]} >Register</S.RegisterButton>
                            </S.SignUpCard>


                            : <S.SignUpCard>
                                <div>Erro Step {">="} 3</div>
                                <S.RegisterButton func={register} param={step} >Register</S.RegisterButton>
                            </S.SignUpCard>
                    }
                </S.SignUpCardWrapper>

                <Footer
                    pr='2.8em'
                    pl='2.8em'
                    bg={colorDot8()}
                    title='Questions? Make a Issue'
                    titleMarginLeft='4.8em'
                />
            </S.RegisterSection>
        </>
    )
}

export default connect((state) => ({
    data: state.registrationData
}))(Register);