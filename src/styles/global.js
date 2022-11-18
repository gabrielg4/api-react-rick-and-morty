import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        border: 0;
        outline: 0;
        font-family: 'Ubuntu', sans-serif;
        font-size: 1.6rem;
        color: #fff;
    }

    html {  
        font-size: 62.5%;
    }

    html, body {
        overflow-x: hidden;
    }

    body {
        background-color: #040011;
    }
`;

export default GlobalStyle;