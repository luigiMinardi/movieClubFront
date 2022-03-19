import styled from 'styled-components';
import { gray } from '../../styles/colors';

export const FooterWrapper = styled.footer`

    background-color: ${props => props.bg || 'transparent'};
    position: inherit;
    box-sizing: border-box;
    max-width: ${props => props.maxWidth || undefined};
    width: ${props => !props.maxWidth ? '100%' : undefined};
    margin: ${props => props.margin || '0'};

    padding-top: ${props => props.pt || '0'};
    padding-left: ${props => props.pl || '0'};
    padding-right: ${props => props.pr || '0'};

    color: ${gray};
`

export const FooterContainer = styled.div`
    box-sizing: border-box;
    padding-bottom: 1.25em;
`

export const FooterBox = styled.div`
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const FooterGrid = styled.div`
    box-sizing: border-box;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    color: ${gray};

    > * {
        flex-basis: 25%;
    }
`

export const Title = styled.h4`
    align-self: flex-start;
    margin-left: ${props => props.marginLeft || '0'};
`