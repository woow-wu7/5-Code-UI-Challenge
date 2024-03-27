import { useState } from "react";
import ThemeProvider from "./components/common/ThemeProvider";
import Switch from "./components/common/Switch";
import Modal from "./components/common/Modal";
import GlobalStyle from "./components/styles/Global.styled";
import Layout from "./components/styles/Layout.styled";
import { lightTheme, darkTheme } from "./components/styles/ThemeStyle";

function App() {
  const [isLight, setIsLight] = useState(false);

  const theme = isLight ? lightTheme : darkTheme;

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <Layout>
          <Switch
            status={isLight}
            change={setIsLight}
            turnOffThem={true}
            activeColor="#FFFFFF"
            inactiveColor="#898d93"
            activeBg="#b1b5bc"
            inactiveBg="#141416"
            width={120}
          />
          <Modal />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
