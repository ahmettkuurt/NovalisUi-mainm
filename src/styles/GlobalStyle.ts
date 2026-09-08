import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    --contact-right: max(18px, env(safe-area-inset-right, 0px));
    --contact-bottom: max(calc(36px + env(safe-area-inset-bottom, 0px)), var(--contact-footer-clearance, 0px));
    --contact-size: 54px;
    --contact-gap: 12px;
    --contact-panel-bottom: calc(var(--contact-bottom) + 2 * var(--contact-size) + 2 * var(--contact-gap));
  }

  @media (max-width: 560px) {
    :root {
      --contact-right: max(14px, env(safe-area-inset-right, 0px));
      --contact-bottom: max(calc(30px + env(safe-area-inset-bottom, 0px)), var(--contact-footer-clearance, 0px));
      --contact-size: 48px;
    }
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