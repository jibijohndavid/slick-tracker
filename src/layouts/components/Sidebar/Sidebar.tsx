import React from 'react';

import Nav from '../Nav';
import useStyles from './styles';

const Sidebar = () => {
  const styles = useStyles();

  return (
    <aside className={styles.container}>
      <Nav />
      <div className={styles.quickBar}>Sidebar</div>
    </aside>
  );
};

export default Sidebar;
