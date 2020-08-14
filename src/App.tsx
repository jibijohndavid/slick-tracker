import { ThemeProvider } from '@material-ui/styles';
import React from 'react';

import Alerts from './layouts/components/Alert/Alert';
import Breadcrumb from './layouts/components/Breadcrumb/Breadcrumb';
// import MainLayout from './layouts/MainLayout';
// import Routes from './Routes';
import theme from './theme';

function App(): React.ReactElement {
  const BreadcrumbLinks = [
    'home',
    'home',
    'tabcontent 1',
    'tab content 2',
    'tab content 3',
  ];

  return (
    <ThemeProvider theme={theme}>
      <Breadcrumb Arr={BreadcrumbLinks} />
      <Alerts
        alertType="success"
        alertCustomColor="47c796"
        alertCustomBgColor="#47c7961a"
        alertText=" Lorem Ipsum is simply dummy text of the printing and typesetting "
      />
      {/* <MainLayout>
        <Routes />
      </MainLayout> */}
    </ThemeProvider>
  );
}

export default App;
