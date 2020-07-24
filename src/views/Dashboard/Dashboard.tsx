import { Card, CardContent, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

export interface IDashboardProps {
  message: string;
}

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    margin: '0 auto',
  },
  pos: { marginBottom: 12 },
});

const Dashboard: React.FC<IDashboardProps> = ({ message }: IDashboardProps) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          align="center"
          color="textSecondary"
          variant="h2"
          gutterBottom
        >
          {message}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Dashboard;
