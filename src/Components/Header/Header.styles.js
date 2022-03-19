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
`

export const Logo = styled.img`
    object-fit: cover;
    width: 6em;
    height: 2.5em;

    cursor: ${props => !props.isHome ? 'pointer' : 'default'};
`

export const LogoFlipper = styled.div`
    width: 6em;
    height: 2.5em;
    position: relative;

    transition: transform .5s ease-in-out;
    transform-origin: 50% 50%;
    transform-style: preserve-3d;
`

export const LogoWrapper = styled.div`
    perspective: 1000px;
    
    margin-left: 2em;
    width: 6em;
    height: 2.5em;

    &:hover, &:active, &:focus{
        ${LogoFlipper} {
            transform: ${props => props.isLeft ? 'rotateY(-180deg)' : 'rotateY(180deg)'};
        }
    }

    @media (min-width: 550px) {
        margin-left: 3em;
        width: 8em;
        height: 3.1em;
        ${LogoFlipper}, ${Logo} {
            width: 8em;
            height: 3.1em;
        }
    }
    @media (min-width: 950px) {
        width: 10.5em;
        height: 4em;
        ${LogoFlipper}, ${Logo} {
            width: 10.5em;
            height: 4em;
        }
    }
`

export const FlipFront = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    backface-visibility: hidden;
`

export const FlipBack = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    backface-visibility: hidden;

    transform: rotateY(180deg);
`

export const HeaderContainer = styled.div`
    width: 88%;
    justify-self: flex-end;

    display: flex;
    justify-content: flex-end;
`