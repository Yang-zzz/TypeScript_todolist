import React from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}
  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }
`;

export default GlobalStyle;
