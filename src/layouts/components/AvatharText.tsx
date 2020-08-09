import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

interface IProps {
  imgSrc: string;
  txtOne: string;
  txtTwo: string;
}

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      display: 'flex',
      padding: 12,
    },
  }),
);

const AvatharText = (props: IProps) => {
  const { imgSrc, txtOne, txtTwo } = props;
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Avatar alt="Remy Sharp" src={imgSrc} />
      <div style={{ flexDirection: 'column', paddingLeft: 16 }}>
        <div style={{ color: 'blue' }}>{txtOne}</div>
        <div style={{ color: 'blue', fontWeight: 'bold' }}>
          {txtTwo}
        </div>
      </div>
    </div>
  );
};

export default AvatharText;
