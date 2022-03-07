import React from 'react';
import * as S from './styles';
import xilften from '../../assets/images/xilften.png';
import greaterthan from '../../assets/images/greaterthan.svg';
import background from '../../assets/images/background-home-movies.jpg';

const Home = () => {
    return (
        <S.Home>
            <S.Header>
                <S.Logo src={xilften} alt='logo' />
                <S.HeaderContainer>
                    <S.ButtonHeader disabled={true}>Languages</S.ButtonHeader>
                    <S.ButtonHeader>Sign In</S.ButtonHeader>
                </S.HeaderContainer>
            </S.Header>

            <S.GetStartedSection>
                <S.GetStartedBackgroundImageWrapper>
                    <S.GetStartedBackgroundImage src={background} alt="Background Home showing movies" />
                    <S.GetStartedBackgroundGradient></S.GetStartedBackgroundGradient>
                </S.GetStartedBackgroundImageWrapper>

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
        </S.Home>
    )
}

export default Home;