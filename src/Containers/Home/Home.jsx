import React from 'react';
import * as S from './styles';
import greaterthan from '../../assets/images/greaterthan.svg';

import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import AbsoluteBackgroundImage from '../../Components/AbsoluteBackgroundImage';

const Home = () => {
    return (
        <S.Home>
            <Header>
                <S.ButtonHeader disabled={true}>Languages</S.ButtonHeader>
                <S.ButtonHeader url='/login'>Sign In</S.ButtonHeader>
            </Header>

            <S.GetStartedSection>
                <AbsoluteBackgroundImage />

                <S.CardText>
                    <S.H1>Unlimited movies, TV shows, and more.</S.H1>
                    <S.H2>Watch anywhere. Cancel anytime.</S.H2>
                    <S.H3>Ready to watch? Enter your email to create or restart your membership.</S.H3>

                    <S.MailSection>
                        <S.FieldWrapper>
                            <S.MailField>
                                <S.MailInput type="email" name="email" autoComplete='email' minLength='5' id="input-email"></S.MailInput>
                                <S.MailLabel onClick={() => { document.getElementById('input-email').focus() }}>Email Adress</S.MailLabel>
                            </S.MailField>
                        </S.FieldWrapper>

                        <S.ButtonWrapper>
                            <S.ButtonGetStarted>Get Started <S.SvgArrow src={greaterthan} /> </S.ButtonGetStarted>
                        </S.ButtonWrapper>
                    </S.MailSection>
                </S.CardText>
            </S.GetStartedSection>

            <Footer pt='4.375em' pr='2.8em' pl='2.8em' margin='0 auto' maxWidth='62.5rem' />
        </S.Home>
    )
}

export default Home;