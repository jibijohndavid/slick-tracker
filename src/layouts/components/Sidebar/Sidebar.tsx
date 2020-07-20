import React from 'react';
import useStyles from './styles';

import Nav from '../Nav';

const Sidebar = () => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <Nav />
      <div className={styles.quickBar}>Sidebar</div>
    </div>
  );
};

export default Sidebar;
