import styled from 'styled-components';

export const FooterWrapper = styled.footer`

    box-sizing: border-box;
    max-width: 62.5rem;
    margin: 0 auto;

    padding-top: 4.375em;
    padding-left: 2.8em;
    padding-right: 2.8em;

    color: #757575;
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

    color: #757575;

    > * {
        flex-basis: 25%;
    }
`
