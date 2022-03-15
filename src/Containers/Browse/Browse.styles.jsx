import styled from 'styled-components';
import Button from '../../Components/Button';
import { black, white } from '../../styles/colors';

export const Browse = styled.div`
    background-color: ${black};
    color: ${white};
`

export const ButtonHeader = styled(Button)`
    margin-right: 1.5em;

    font-size: 1.15em;
    padding: 0 .5em;

    @media (min-width: 550px) {
        padding: 0 1em;
        font-size: medium;
    }
`
