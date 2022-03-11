import styled from 'styled-components';
import { gray} from '../../styles/colors';

export const MailField = styled.div`
    background-color: ${props => props.bg};
    height: 2.7em;
    width: 90vw;
    border-radius: .2em;

    position: relative;
`

export const MailLabel = styled.label`
    position: absolute;
    top: 50%;
    left: 1em;

    color: ${gray};
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

    :focus + ${MailLabel} {
        top: 20%;
        font-size: small;
        font-weight: bold;
    }
`
