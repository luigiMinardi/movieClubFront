import React from "react";
import * as S from './Footer.styles';

const Footer = (props) => {
    return (
        <S.FooterWrapper
            bg={props.bg}
            pt={props.pt}
            pl={props.pl}
            pr={props.pr}
            margin={props.margin}
            maxWidth={props.maxWidth}
        >
            <S.FooterContainer>
                <S.FooterBox>
                    <S.Title marginLeft={props.titleMarginLeft} >{props.title}</S.Title>
                    <S.FooterGrid>
                        <h5>FAQ</h5>
                        <h5>Help Center</h5>
                        <h5>Account</h5>
                        <h5>Media Center</h5>

                        <h5>Investor Relations</h5>
                        <h5>Jobs</h5>
                        <h5>Redeem Gift Cards</h5>
                        <h5>Buy Gift Cards</h5>

                        <h5>Ways to Watch</h5>
                        <h5>Terms of Use</h5>
                        <h5>Privacy</h5>
                        <h5>Cookie Preferences</h5>

                        <h5>Corporate Information</h5>
                        <h5>Contact Us</h5>
                        <h5>Speed Test</h5>
                        <h5>Legal Notices</h5>

                        <h5>Only on Netflix</h5>
                    </S.FooterGrid>
                </S.FooterBox>
            </S.FooterContainer>
        </S.FooterWrapper>
    )
}

export default Footer;