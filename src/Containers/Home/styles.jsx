import styled from 'styled-components';

export const Home = styled.div`
    width: 100vw;
    height: 100vh;

    background-color: #282A36;
    color: white;
`

export const Header = styled.nav`
    background-color: #000;

    width: 100vw;
    height: 7em;

    display: flex; 
    align-items: center;

    font-size: small;

    @media (min-width: 550px) {
        font-size: 1em;
    }

    /* @media (min-width: 950px) {
    } */
`

export const Logo = styled.img`
    width: 10.5em;
    height: 4em;

    margin-left: 1em;

    @media (min-width: 550px) {
        margin-left: 3em;
    }
`

export const Button = styled.button`
    height: 2em;

    background-color: #e50914;

    padding: 0 1em;

    cursor: pointer;

    :disabled {
        filter: brightness(.5);
        cursor: not-allowed;
    }
`

export const ButtonHeader = styled(Button)`
    border-radius: .188em;
    margin-right: 1.5em;
`


export const HeaderContainer = styled.div`
    width: 88%;
    justify-self: flex-end;
    
    display: flex;
    justify-content: flex-end;
`

export const SvgArrow = styled.img`
    margin-left: .5em;
    width: .4em;
`

export const ButtonGetStarted = styled(Button)`
    font-size: medium;
    height: 2.3em;

    :hover {
        filter: brightness(1.1);
    }

    @media (min-width: 950px) {
        font-size: x-large;
        border-radius: 0 .2em .2em 0;
        height: 3.45rem;
    }
`

export const GetStartedSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    text-align: center;
    
    padding: 0 1.5em;
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

    input:focus + label {
        top: 20%;
        font-size: small;
        font-weight: bold;
    }

    @media (min-width: 550px) {
        width: 65vw;
    }

    @media (min-width: 950px) {
        font-size: large;
        width: 25rem;
        height:3.45rem;
        border-radius: .2em 0 0 .2em;
    }
`

export const MailLabel = styled.label`
    position: absolute;
    top: 50%;
    left: 1em;
    
    color: grey;
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
`

export const H1 = styled.h1`
    font-size: 1.5em;
    @media (min-width: 550px) {
        font-size: 2.8em;
    }
`

export const H2 = styled.h2`
    font-size: 1em;
    font-weight: 400;
    @media (min-width: 550px) {
        font-size: x-large;
    }
`

export const H3 = styled.h3`
    font-size: 1em;
    font-weight: 400;
    padding: 0 1.8em;
    @media (min-width: 950px) {
        font-size: 1.1em;
    }
`