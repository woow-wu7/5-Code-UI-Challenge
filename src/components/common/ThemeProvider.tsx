import { ThemeProvider } from "styled-components";
import type { PropsWithChildren } from "react";
import type { ITheme } from "../styles/ThemeStyle";

const ThemeProviderWrapper: React.FC<PropsWithChildren<ITheme>> = (props) => {
  return <ThemeProvider {...props}>{props.children}</ThemeProvider>;
};

export default ThemeProviderWrapper;
