import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
 html {
    font-size: 75%;
    background-color: ${props => props.theme.appBackground};
  }
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    line-height: 1.5em;
  }
`;
