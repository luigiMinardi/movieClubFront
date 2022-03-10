import styled from 'styled-components';

export const SignIn = styled.div`
    background-color: black;
    color: white;
`

export const LoginSection = styled.section`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    
        text-align: center;
        position: relative;
    
        height: auto;
    `

export const SignInCard = styled.section`
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