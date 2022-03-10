import styled from 'styled-components';
import Button from '../../Components/Button';

export const Home = styled.div`

    background-color: black;
    color: white;
`

export const ButtonHeader = styled(Button)`
    border-radius: .188em;
    margin-right: 1.5em;

    font-size: 1.15em;
    padding: 0 .5em;

    @media (min-width: 550px) {
        padding: 0 1em;
        font-size: medium;
    }
`

export const SvgArrow = styled.img`
    margin-left: .5em;
    width: .4em;
`

export const ButtonGetStarted = styled(Button)`
    font-size: medium;
    height: 2.3rem;

    :hover {
        filter: brightness(1.1);
    }

    @media (min-width: 950px) {
        font-size: x-large;
        border-radius: 0 .2rem .2rem 0;
        height: 3.45rem;
    }
    @media (min-width: 1450px) {
        height: 4rem;
    }
`

export const GetStartedSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    text-align: center;
    position: relative;

    padding: 0 1.5em;
    height: 30rem;

    @media (min-width: 550px) {
        height: 40rem;
    }
`

export const ButtonWrapper = styled.div`
    margin-top: 1em;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: 950px) {
        margin-top: 0;
        justify-content: flex-start;
    }
`

export const FieldWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (min-width: 950px) {
        justify-content: flex-end;
    }
`

export const MailSection = styled.section`
    display:flex;
    flex-wrap: wrap;

    @media (min-width: 950px) {
        flex-wrap: nowrap;
    }
`

export const MailField = styled.div`
    background-color: white;
    height: 2.7em;
    width: 90vw;
    border-radius: .2em;

    position: relative;

    @media (min-width: 550px) {
        width: 65vw;
    }

    @media (min-width: 950px) {
        font-size: large;
        width: 25rem;
        height:3.45rem;
        border-radius: .2em 0 0 .2em;
    }
    @media (min-width: 1450px) {
        height: 4rem;
    }
`

export const MailLabel = styled.label`
    position: absolute;
    top: 50%;
    left: 1em;

    color: #757575;
    cursor: text;
    user-select: none;

    transition: font .1s ease,top .1s ease,transform .1s ease,-webkit-transform .1s ease,-moz-transform .1s ease,-o-transform .1s ease;
    transform: translateY(-50%);
`

export const MailInput = styled.input`
    width: 100%;
    height: 100%;
    padding-left: 1em;
    padding-top: .2em;
    border: none;
    background-color: transparent;

    font-size: 1.01em;

    :focus {
        outline: none;
    }

    :focus + label {
        top: 20%;
        font-size: small;
        font-weight: bold;
    }
`

export const CardText = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const H1 = styled.h1`
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 0;

    @media (min-width: 550px) {
        font-size: 3.3rem;
        max-width: 10em;
        margin: 0 auto;
    }
    @media (min-width: 1450px) {
        font-size:4rem;
    }
`

export const H2 = styled.h2`
    font-size: 1.2rem;
    font-weight: 400;
    @media (min-width: 550px) {
        font-size: x-large;
    }
`

export const H3 = styled.h3`
    font-size: 1.2rem;
    font-weight: 400;
    padding: 0 1.8em;

    @media (min-width: 550px) {
        font-size: 1.5rem;
    }
    @media (min-width: 950px) {
        font-size: 1.2rem;
    }
`

