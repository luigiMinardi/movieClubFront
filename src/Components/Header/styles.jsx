import styled from 'styled-components';

export const Header = styled.nav`
    height: 7em;

    display: flex;
    align-items: center;
    position: relative;
    z-index: 1;

    font-size: small;

    @media (min-width: 550px) {
        font-size: 1em;
    }

    /* @media (min-width: 950px) {
    } */
`

export const Logo = styled.img`

    width: 6em;
    height: 2.5em;
    margin-left: 2em;

    @media (min-width: 550px) {
        margin-left: 3em;
        width: 8em;
        height: 3.1em;
    }

    @media (min-width: 950px) {
        width: 10.5em;
        height: 4em;
    }
`

export const HeaderContainer = styled.div`
    width: 88%;
    justify-self: flex-end;

    display: flex;
    justify-content: flex-end;
`