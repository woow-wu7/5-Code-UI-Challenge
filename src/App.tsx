import Switch from "./components/common/Switch";
import Modal from "./components/common/Modal";
import { useState } from "react";

import ThemeProvider from "./components/common/ThemeProvider";
import GlobalStyle from "./components/styles/GlobalStyle";
import { lightTheme, darkTheme } from "./components/styles/ThemeStyle";

function App() {
  const [isLight, setIsLight] = useState(true);

  const theme = isLight ? lightTheme : darkTheme;

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Switch status={isLight} change={setIsLight}></Switch>
        <Modal></Modal>
      </ThemeProvider>
    </>
  );
}

export default App;
