import React from 'react';
import { ThemeProvider } from '@material-ui/styles';

import theme from './theme';
import Routes from './Routes';

function App(): React.ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
