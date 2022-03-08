import styled from 'styled-components';

export const Button = styled.button`
    height: 2em;

    background-color: #e50914;

    padding: 0 1em;

    cursor: pointer;

    :disabled {
        filter: brightness(.5);
        cursor: not-allowed;
    }
`