import React from 'react';
import useStyles from './styles';

import Sidebar from './components/Sidebar';

interface IMainLayoutProps {
  children: React.ReactChild;
}

const MainLayout = ({ children }: IMainLayoutProps) => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.body}>{children}</div>
    </div>
  );
};

export default MainLayout;
