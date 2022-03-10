import styled from 'styled-components';

export const BackgroundImageWrapper = styled.div`
    position: absolute;
    top: -7em;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
`

export const BackgroundImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: fixed;
`

export const BackgroundGradient = styled.div`
    background: rgba(0,0,0,.4);
    background-image: linear-gradient(to bottom,#000 0,rgba(0,0,0,0) 50%, rgba(0,0,0,.8) 100%);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    @media (min-width: 550px) {
        background-image: linear-gradient(to top,rgba(0,0,0,.8) 0,rgba(0,0,0,0) 40%, rgba(0,0,0,0) 80%,rgba(0,0,0,.8) 100%);
    }
    @media (min-width: 950px) {
        background-image: linear-gradient(to top,rgba(0,0,0,.8) 0,rgba(0,0,0,0) 60%,rgba(0,0,0,.8) 100%);
    }
`