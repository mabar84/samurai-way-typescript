import {createGlobalStyle} from 'styled-components';
import {myTheme} from './Theme.styled';

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *::selection {
    color: ${myTheme.colors.secondary};
    background-color: ${myTheme.colors.text};
  }

  *:focus-visible {
    outline: 1px solid currentColor;
      //outline: 1px solid ${myTheme.colors.text};
  }

  * {
    scrollbar-width: none;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${myTheme.colors.background};
    color: ${myTheme.colors.text}
  }

  &::-webkit-scrollbar {
    width: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${myTheme.colors.primary};
    border-radius: 2px;
  }

  &::-webkit-scrollbar-button {
    height: 8px;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    overflow: hidden;

    ${myTheme.media.less1280} {
      max-width: 1000px;
    }

    ${myTheme.media.less1200} {
      max-width: calc(100vw - 20px);
    }
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }


`;

