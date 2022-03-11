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

    /* Default config */
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
    /* End of default config */
`

export default GlobalStyle;