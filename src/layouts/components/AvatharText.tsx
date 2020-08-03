import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

interface IProps {
  imgSrc: string;
  txtOne: string;
  txtTwo: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }),
);

const AvatharText = (props: IProps) => {
  const { imgSrc, txtOne, txtTwo } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar alt="Remy Sharp" src={imgSrc} />
      <div style={{ flexDirection: 'column' }}>
        <div style={{ color: 'blue' }}>{txtOne}</div>
        <div style={{ color: 'blue', fontWeight: 'bold' }}>
          {txtTwo}
        </div>
      </div>
    </div>
  );
};

export default AvatharText;
