import React from 'react';
import { ThemeProvider } from '@material-ui/styles';

import theme from './theme';
import MainLayout from './layouts/MainLayout';
import Routes from './Routes';

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
