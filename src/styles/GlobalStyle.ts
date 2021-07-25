import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 100%;

    @media ${theme.mediaQueries.desktopSmall} {
      font-size: 87.5%;
    }

    @media ${theme.mediaQueries.tabletLandscape} {
      font-size: 75%;
    }
  }

  body {
    background: linear-gradient(to bottom, ${theme.colors.witchHaze} 0%, ${theme.colors.grannySmithApple} 100%);
    background-repeat: no-repeat;
    color: ${theme.greys.nero};
    font-family: ${theme.fonts.roboto};
    line-height: 1;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    color: inherit;
    font-size: inherit;
    margin: 0;
    padding: 0;
  }

  img,
  svg {
    border: 0;
    display: block;
    height: auto;
    max-width: 100%;
  }

  a {
    &:link,
    &:visited {
      text-decoration: none;
    }

    &:hover,
    &:active {
      outline: 0;
    }
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  audio,
  canvas,
  video {
    display: inline-block;
    max-width: 100%;
  }

  #root {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;

    @media ${theme.mediaQueries.tabletPortrait} {
      align-items: flex-start;
    }
  }
`;

export default GlobalStyle;
