import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Panel from "./components/Panel";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./theme/GlobalStyles";
import WebFont from "webfontloader";
import { useTheme } from "./theme/useTheme";

import "./index.css";
import Appearance from "./components/Appearance";

const Container = styled.div``;

function App() {
  const { theme, themeLoaded, getFonts } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  useEffect(() => {
    setSelectedTheme(theme);
  }, [themeLoaded, theme]);

  useEffect(() => {
    WebFont.load({
      google: {
        families: getFonts(),
      },
    });
  }, []);

  return (
    <>
      {themeLoaded && (
        <ThemeProvider theme={selectedTheme}>
          <GlobalStyles />
          <Container style={{ fontFamily: selectedTheme.font }}>
            <Appearance setter={setSelectedTheme} />
            <Header />
            <Panel themeName={theme} />
            <Footer />
          </Container>
        </ThemeProvider>
      )}
    </>
  );
}

export default App;
