import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import React from 'react';

import useStyles from './styles';

type Iprops = {
  Arr: string[];
}

const Breadcrumb = ({ Arr }: Iprops) => {
  const styles = useStyles();
  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
      className={styles.breadcrumbContainer}
    >
      {Arr.map((link: string) => (
        <Link color="inherit" key={link} href="/">
          {link}
        </Link>
      ))}
    </Breadcrumbs>
  );
};

export default Breadcrumb;
