import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    border: none;
    text-decoration: none;
    box-sizing: border-box;
  }

  html, body, #root {
    background-color: #fafafafa;
    height: 100vh;
    font-family: 'Inter', sans-serif;
    color: #fafafafa;

    // 1920px and UP - Full HD
    font-size: 10px;

    // 1680px
    @media screen and (max-width: 1680px) {
      font-size: 9.5px;
    }

    // 1440px
    @media screen and (max-width: 1440px) {
      font-size: 9.5px;
    }

    // 1366px and Below - HD
    @media screen and (max-width: 1366px) {
      font-size: 9px;
    }
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  table {
    border-collapse: collapse;
  }
`
