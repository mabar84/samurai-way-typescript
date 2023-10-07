import {createGlobalStyle} from "styled-components";
import {myTheme} from "./Theme.styled";

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *::selection {
    color: ${myTheme.colors.secondary_background};
    background-color: ${myTheme.colors.title};
  }

  * {
    scrollbar-width: none;
  }

  body::-webkit-scrollbar {
    width: 0;
  }

  body::-webkit-scrollbar-track {
    background: transparent;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${myTheme.colors.body_background};
    color: ${myTheme.colors.text}
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    overflow: hidden;

    ${myTheme.media.less1360} {
      max-width: 1000px;
    }

    ${myTheme.media.less1080} {
      max-width: calc(100vw - 60px);
      margin: 0 30px;
    }

    ${myTheme.media.less700} {
      max-width: calc(100vw - 20px);
      margin: 0 10px;
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

