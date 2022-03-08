import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    button {
        border: none;
        margin: 0;
        padding: 0;
        width: auto;
        overflow: visible;

        background: transparent;

        color: inherit;
        font: inherit;
        text-align: inherit;

        line-height: normal;
        outline: none;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    h1 {
        font-size: 2rem;
    }

    h2 { 
        font-size: 1.5rem;
    }

    h3 {
        font-size: 1.17rem;
    }
`

export default GlobalStyle;