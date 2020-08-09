import useMediaQuery from "@material-ui/core/useMediaQuery";
import { ThemeProvider } from "@material-ui/styles";
import React from "react";

import MainLayout from "./layouts/MainLayout";
import Routes from "./Routes";
import { darkTheme, lightTheme } from "./theme";

function App(): React.ReactElement {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  return (
    <ThemeProvider theme={prefersDarkMode ? darkTheme : lightTheme}>
      <MainLayout>
        <Routes />
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
