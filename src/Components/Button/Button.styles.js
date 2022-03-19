import styled from 'styled-components';
import { red } from '../../styles/colors';

export const Button = styled.button`
    height: 2em;

    background-color: ${red};
    border-radius: .188em;

    padding: 0 1em;

    cursor: pointer;

    :disabled {
        filter: brightness(.5);
        cursor: not-allowed;
    }
`