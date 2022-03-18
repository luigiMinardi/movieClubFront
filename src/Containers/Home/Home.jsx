import React from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './Home.styles';
import greaterthan from '../../assets/images/greaterthan.svg';
import profilepic from '../../assets/images/profilepic.png';
import { white } from '../../styles/colors';

import AbsoluteBackgroundImage from '../../Components/AbsoluteBackgroundImage';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Field from '../../Components/Field';
import { LOGOUT } from '../../redux/actions';
import { connect } from 'react-redux';

const Home = (props) => {

    let navigate = useNavigate()

    const logOut = () => {
        props.dispatch({ type: LOGOUT });
    }

    return (
        <>
            <Header imHome>
                <S.ButtonHeader param='/browse'>Catalog</S.ButtonHeader>
                {props.user?.token
                    ?
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <img onClick={() => { navigate('/YourAccount') }} src={profilepic} alt={props.user.user.name} style={{ width: '2em', height: 'auto', marginRight: '1.3em', cursor: 'pointer' }} />
                        <S.ButtonHeader func={logOut}>Click to Sign Off</S.ButtonHeader>
                    </div>
                    : <S.ButtonHeader param='/login'>Sign In</S.ButtonHeader>
                }            </Header>

            <S.GetStartedSection>
                <AbsoluteBackgroundImage />

                <S.CardText>
                    <S.H1>Unlimited movies, TV shows, and more.</S.H1>
                    <S.H2>Watch anywhere. Cancel anytime.</S.H2>
                    <S.H3>Ready to watch? Enter your email to create or restart your membership.</S.H3>

                    <S.MailSection>
                        <S.FieldWrapper>
                            <Field
                                type="email"
                                name="email"
                                autoComplete='email'
                                minLength='5'
                                id="input-email"
                                label='Email Adress'

                                bg={white}

                                w='90vw'
                                w550='65vw'
                                h950='3.45rem'
                                w950='25rem'
                                rounded950='.2em 0 0 .2em'
                                h1450='4rem'
                            />
                        </S.FieldWrapper>

                        <S.ButtonWrapper>
                            <S.ButtonGetStarted param='/'>Get Started <S.SvgArrow src={greaterthan} /> </S.ButtonGetStarted>
                        </S.ButtonWrapper>
                    </S.MailSection>
                </S.CardText>
            </S.GetStartedSection>

            <Footer pt='4.375em' pr='2.8em' pl='2.8em' margin='0 auto' maxWidth='62.5rem' title="Questions? Make a Issue" />
        </>
    )
}

export default connect((store) => ({
    user: store.authedUser
}))(Home);