import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  body {
    font-family: 'Sunflower', sans-serif;
    button {
      cursor: pointer;
    },
    ul {
      padding: 0;
      max-width: 524.7px;
    }
  }
`;

export default GlobalStyle;