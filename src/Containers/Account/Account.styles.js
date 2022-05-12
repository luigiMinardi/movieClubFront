import styled from 'styled-components';
import Button from '../../Components/Button';
import { black, darkerGray, gray, white } from '../../styles/colors';

//! NEED REFACTOR

export const ButtonHeader = styled(Button)`
    margin-right: 1.5em;

    font-size: 1.15em;
    padding: 0 .5em;

    @media (min-width: 550px) {
        padding: 0 1em;
        font-size: medium;
    }
`

let movieWidth = '15.5vw'
let movieHeigh = '12.5em'
let arrowWidth = '3.125rem'

export const Title = styled.span`
    font-size: x-large;
    margin-left: ${arrowWidth};
    display: block;
    margin-bottom: 1em;
`

export const Banner = styled.img`
    object-fit: cover;
    height: 100%;
    width: 100%;
    border-radius: .625em;
`

export const Description = styled.section`
    position: absolute;
    width: ${movieWidth};

    box-sizing: border-box;
    margin-top: -.625em;
    padding: .625em;
    border-radius: 0 0 .625em .625em;

    background-color: ${darkerGray};

    visibility: hidden;
    display: none;
    transition: visibility 1s ease-out;
`

export const Movie = styled.div`
    width: ${movieWidth};
    height: ${movieHeigh};
    display: inline-block;
    position: relative;
    color: ${white};
    padding: 0 .125rem;
    font-size: .8rem;
    transition: all .8s ease-in-out;

    :hover {
        transform: scale(1.3);
        z-index: 2;
    }
    :hover > ${Description} {
        display: block;
        animation: transform_show_from_right .8s;
        animation-delay: 100ms;
        animation-fill-mode: forwards;
    }
    :hover > ${Banner} {
        border-radius: .625em .625em 0 0;
    }
    @media (max-width: 950px) {
        :hover, :hover > ${Description} {
            width: 50vw;
        }
    }

    @keyframes transform_show_from_right {
        0% {
            transform: scale(0);
            right: 100rem;
        }
        1%{
            visibility: visible;
        }

        95%{
            right: .2em;
        }
        100%{
            transform: scale(1);
            right: initial;
            visibility: visible;
        }
    }
`

export const Match = styled.span`
    color: #46d369;
    font-weight: bold;
    grid-area: match;
`

export const Rating = styled.span`
    color: ${black};
    background-color: orange;
    border-radius: .25em;
    font-size: smaller;
    font-weight: bold;
    padding-inline: .2em;
    text-align: center;
    grid-area: rate;
    justify-self: center;
`

export const Data = styled.section`
    padding-top: .75em;
    display: flex;
    justify-content:  space-around;
`

export const Type = styled.span`
        display: flex;
        justify-content: space-between;
        align-items: center;
`

export const MidDot = styled.span`
    font-size: x-large;
    color: ${gray};
    font-weight: bold;
`