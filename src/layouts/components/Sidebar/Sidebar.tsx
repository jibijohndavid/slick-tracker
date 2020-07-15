import React from 'react';
import styles from './Sidebar.module.scss';

import Nav from '../Nav';

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <Nav />
      <div className={styles.quickBar}>Sidebar</div>
    </div>
  );
};

export default Sidebar;
