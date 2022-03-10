import styled from 'styled-components';
import Button from '../../Components/Button';

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

export const SignInCardWrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: flex-start;

    width: 28.125rem;
`

export const SignInCard = styled.div`
    background-color: rgba(0, 0, 0, 0.8);
    
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    
    text-align: center;
    position: relative;
    
    padding: 3.75rem 4.25rem 2.5rem;
    margin-bottom: 5.625em;

    height: 30rem;
    width: 100%;

    border-radius: .188em;

    @media (min-width: 550px) {
        height: 40rem;
    }
`

export const LoginButton = styled(Button)`
    height: 3em;
`

export const H1 = styled.h1`
    margin-top: 0;
`