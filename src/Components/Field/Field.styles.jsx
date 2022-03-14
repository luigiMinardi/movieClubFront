import styled, { css } from 'styled-components';
import { gray } from '../../styles/colors';

export const Field = styled.div`
    background-color: ${props => props.bg};
    height: ${props => props.h || '2.7em'};
    width: ${props => props.w};
    border-radius: .2em;

    position: relative;

    @media (min-width: 550px) {
        width: ${props => props.w550};
    }
    @media (min-width: 950px) {
        font-size: large;
        width: ${props => props.w950};
        height:${props => props.h950 || '3.45rem'};
        border-radius: ${props => props.rounded950};
    }
    @media (min-width: 1450px) {
        height: ${props => props.h1450};
    }
`

export const Label = styled.label`
    position: absolute;
    top: 50%;
    left: 1em;

    color: ${props => props.labelColor || gray};
    cursor: text;
    user-select: none;

    transition: font .1s ease,top .1s ease,transform .1s ease,-webkit-transform .1s ease,-moz-transform .1s ease,-o-transform .1s ease;
    transform: translateY(-50%);
`

export const Input = styled.input`
    box-sizing: border-box;

    width: 100%;
    height: 100%;

    padding-left: .8em;
    padding-top: .2em;

    color: ${props => props.inputColor || 'default'};

    font-size: 1.01em;

    caret-color: ${props => props.pipeColor || 'default'};

    :focus + ${Label}, :valid + ${Label} {
        top: 20%;
        font-size: small;
        font-weight: bold;
    }

    ${props => props.hasText === true && css`
        + ${Label} {
            top: 20%;
            font-size: small;
            font-weight: bold;
        }
    `}
`
