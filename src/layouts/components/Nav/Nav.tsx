import { Typography } from "@material-ui/core";
import React from "react";

import useStyles from "./styles";

const Nav = () => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <Typography variant="h4" component="h4" color="textSecondary">
        Nav
      </Typography>
    </div>
  );
};

export default Nav;
