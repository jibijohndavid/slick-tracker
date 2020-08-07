import { Typography } from "@material-ui/core";
import React from "react";

import Nav from "../Nav";
import useStyles from "./styles";

const Sidebar = () => {
  const styles = useStyles();

  return (
    <aside className={styles.container}>
      <Nav />
      <div className={styles.quickBar}>
        <Typography variant="h4" component="h4" color="textSecondary">
          Sidebar
        </Typography>
      </div>
    </aside>
  );
};

export default Sidebar;
