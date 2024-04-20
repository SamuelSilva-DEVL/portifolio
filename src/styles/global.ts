import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    body {
        font-family: ${props => props.theme.font.family};
        background-color: #171923;
        overflow: hidden;
    }

    body::-webkit-scrollbar {
        width: 8px;
    }

    body::-webkit-scrollbar-track {
        background-color: #e8e8e8;
        border-radius: 9999px;
    }

    body::-webkit-scrollbar-thumb {
        background-color: #7a7a7a;
        border-radius: 9999px;
    }
`
