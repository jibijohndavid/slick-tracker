import React from 'react';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import CloseIcon from '@material-ui/icons/Close';
import Card from '@material-ui/core/Card';
import useStyles from './styles';
import IconButton from '@material-ui/core/IconButton';

interface IProps {
  taskCount: number;
  onCloseClick?: () => void;
}

const NotificationComponent = (props: IProps) => {
  const { taskCount, onCloseClick } = props;
  const classes = useStyles();
  const tasks = <p className={classes.task}>{taskCount} Tasks</p>;

  return (
    <div className={classes.root}>
      <Card className={classes.root} >
        <div className={classes.details}>
          <NotificationsNoneIcon className={classes.bellIcon} />
          <p className={classes.textStyle}>
            You have {tasks} <br></br>
           scheduled for today
      </p>
          <IconButton
            onClick={onCloseClick}
          >
            <CloseIcon className={classes.iconStyle} />
          </IconButton>
        </div>
      </Card>
    </div>
  );
};

export default NotificationComponent;
