import React from 'react';
import styles from './MainLayout.module.scss';

import Sidebar from './components/Sidebar';

interface IMainLayoutProps {
  children: any;
}

const MainLayout: React.FC<IMainLayoutProps> = ({
  children,
}: IMainLayoutProps) => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.body}>{children}</div>
    </div>
  );
};

export default MainLayout;
