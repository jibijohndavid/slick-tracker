import { ThemeProvider } from '@material-ui/styles';
import React from 'react';

import MainLayout from './layouts/MainLayout';
import Routes from './Routes';
import theme from './theme';

function App(): React.ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <MainLayout>
        <Routes />
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
