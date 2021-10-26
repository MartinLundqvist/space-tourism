import React from 'react';
import { ThemeType } from './Theme';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  body {
    margin: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${(props) => props.theme.colors.dark};
    

  }
`;

export default GlobalStyle;
