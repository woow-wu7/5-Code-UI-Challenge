import { createGlobalStyle } from "styled-components";
import CSSReset from "./ResetCSS";

const GlobalStyle = createGlobalStyle`
  ${CSSReset},
  body {
    color: ${(props) => props.theme.color};
    background:  ${(props) => props.theme.background};
  }
`;

export default GlobalStyle;
