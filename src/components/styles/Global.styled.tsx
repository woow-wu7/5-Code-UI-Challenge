import { createGlobalStyle } from "styled-components";
import CSSReset from "./ResetCSS";

const GlobalStyle = createGlobalStyle`
  ${CSSReset},
  body {
    color: ${(props) => props.theme.bodyColor};
    background:  ${(props) => props.theme.bodyBg};
  }
`;

export default GlobalStyle;
