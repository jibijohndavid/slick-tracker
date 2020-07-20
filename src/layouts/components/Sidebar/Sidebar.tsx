import React from 'react';
import useStyles from './styles';

import Nav from '../Nav';

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
