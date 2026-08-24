import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    width: 100%;
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  body {
    width: 100%;
    min-width: 320px;
    margin: 0;
    overflow-x: hidden;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.textPrimary};
    font-family: Inter, Arial, sans-serif;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  button,
  input,
  textarea,
  select {
    font: inherit;
  }

  img {
    display: block;
    max-width: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul,
  ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  #root {
    width: 100%;
    min-height: 100vh;
    overflow-x: hidden;
  }

  @media (hover: hover) and (pointer: fine) {
  body,
  a,
  button {
    cursor: none;
  }

  input,
  textarea,
  select {
    cursor: text;
  }
}
`;