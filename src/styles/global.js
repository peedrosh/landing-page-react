import { createGlobalStyle } from "styled-components";

export const GlobalCss = createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background: #ffffff;
    color: #333;
    font-size: 1.6rem;
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
  }

  h1 {
    font-weight: 500;
  }
  
  h2, h3, h4 {
    font-weight: 400;
  }

  a {
    text-decoration: none;
  }

  p {
    color: #999;
    font-size: 1.6rem;
    line-height: 130%;
  }

  img {
    width: 100%;
  }
`