import { createGlobalStyle } from "styled-components";
// fonts
import Shabnam from "./assets/fonts/shabnam-font/Shabnam.woff";
import ShabnamThin from "./assets/fonts/shabnam-font/Shabnam-Thin.woff";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'shabnam';
        src: local('shabnam'),
        url(${Shabnam}) format('woff');
    }
    @font-face {
        font-family: 'shabnamThin';
        src: local('shabnamThin'),
        url(${ShabnamThin}) format('woff');
        font-weight: 100;
    }
    * , *::before , *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'shabnam' , sans-serif;
    }
    :root {
        --primary : #3A86EE;
        --red : #DC3545;
        --border : #EEEEEE;
        --gray : #F0F0F1;
        --background : #FFFFFF;
    }
    body {
        direction: rtl;
    }
    li {
        list-style-type: none;
    }
`;
