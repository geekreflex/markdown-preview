import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Panel from "./components/Panel";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./theme/GlobalStyles";
import WebFont from "webfontloader";
import { useTheme } from "./theme/useTheme";

import "./index.css";

const Container = styled.div`
  margin: 5px auto 5px auto;
`;

function App() {
  const { theme, themeLoaded, getFonts } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  useEffect(() => {
    setSelectedTheme(theme);
  }, [themeLoaded]);

  useEffect(() => {
    WebFont.load({
      google: {
        families: getFonts(),
      },
    });
  });

  return (
    <>
      {themeLoaded && (
        <ThemeProvider theme={selectedTheme}>
          <GlobalStyles />
          <Container style={{ fontFamily: selectedTheme.font }}>
            <div>
              <Header />
              <Panel />
              <Footer />
            </div>
          </Container>
        </ThemeProvider>
      )}
    </>
  );
}

export default App;
