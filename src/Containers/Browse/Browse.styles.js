import styled from 'styled-components';
import Button from '../../Components/Button';
import { black, colorDot3, darkerGray, darkGray, gray, white } from '../../styles/colors';

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
let sliderPy = '9rem'

export const NavigateButton = styled.button`
    width: ${arrowWidth};
    height: ${movieHeigh};
    border-radius: .312em;
    position: absolute;
    bottom: 0;
    top: calc(${sliderPy} / 3);
    background-color: ${colorDot3()};
    color: ${white};
    z-index: 3;
    visibility: hidden;

    :nth-of-type(2n) { // Right Button
        right: 0;
    }

    :nth-of-type(2n+1) { // Left Button
        left: 0;
    }
`

export const Indicators = styled.div`
    width: 20.25em;
    position: absolute;
    right: 0;
    top: 0;
    visibility: hidden;
`

export const Indicator = styled.div`
    width: .938em;
    height: .125em;
    margin-left: .125rem;
    background-color: ${props => props.active === props.index ? white : gray};
    display: inline-block;

    :nth-of-type(1) {
        margin-left: 0;
    }
`

export const Container = styled.section`
    position: relative;

    :hover ${NavigateButton}, :hover ${Indicators} {
        visibility: visible;
    }

    :not(:nth-of-type(1)) {
        margin-top: -25%;
    }

    @media (min-width: 550px) {
        :not(:nth-of-type(1)) {
            margin-top: -15%;
        }
    }
    @media (min-width: 950px) {
        :not(:nth-of-type(1)) {
            margin-top: -10%;
        }
    }
    @media (min-width: 1450px) {
        :not(:nth-of-type(1)) {
            margin-top: -5%;
        }
    }
`

export const Title = styled.span`
    font-size: x-large;
    margin-left: ${arrowWidth};
`

export const Slider = styled.div`
    width: 100%;
    overflow-x: scroll;
    overflow-y: visible;
    white-space: nowrap;
    position: relative;
    padding-top: calc(${sliderPy} - ${sliderPy} /1.25);
    padding-bottom: ${sliderPy};

    ::-webkit-scrollbar {
        display: none;
    }
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

    :nth-of-type(1) { //First movie
        margin-left: ${arrowWidth};
    }
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

export const Buttons = styled.div`
    display: flex;
`

export const MovieButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.25rem;
    height: 1.25rem;
    border: .125em solid ${gray};
    text-align: center;
    font-size: .5rem;
    margin-right: .312em;
    border-radius: 100%;
    background-color: ${darkGray};
    cursor: pointer;

    :hover {
        border-color: ${white};
    }

    :nth-of-type(5) { // Last button
        margin-left: auto;
        margin-right: 0;
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
    display: grid;
    grid-template-columns: repeat(3, fr);
    grid-template-rows: auto;
    grid-template-areas:
    "match rate .";
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
