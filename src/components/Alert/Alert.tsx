import Alert from '@material-ui/lab/Alert';
import React from 'react';

import useStyles from './styles';

type AlertType = {
  alertType: 'success' | 'info' | 'warning' | 'error';
  alertText: string;
  // alertIcon?: string;
};

const Alerts = ({ alertType, alertText }: AlertType) => {
  const styles = useStyles();

  return (
    <Alert
      variant="outlined"
      // icon={alertIcon}
      onClose={() => true}
      severity={alertType}
      className={styles.alertContainer}
    >
      {alertText}
    </Alert>
  );
};
export default Alerts;
