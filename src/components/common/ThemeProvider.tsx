import { ThemeProvider } from "styled-components";
import type { PropsWithChildren } from "react";

interface IThemeProvider {
  theme: {
    body: string;

    modalBg: string;
    textBg: string;
    iconBg: string;
    tagBg: string;

    text: string;
    inputBorder: string;

    btnBg: string;
    btnText: string;
  };
}

const ThemeProviderWrapper: React.FC<PropsWithChildren<IThemeProvider>> = (
  props
) => {
  return <ThemeProvider {...props}>{props.children}</ThemeProvider>;
};

export default ThemeProviderWrapper;
