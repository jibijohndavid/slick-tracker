import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

type IProps = {
  imgSrc: string;
  txtOne: string;
  txtTwo: string;
  altText: string;
}

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      display: 'flex',
      padding: 12,
    },
  }),
);

const AvatarText = ({ imgSrc, txtOne, txtTwo, altText }: IProps) => {

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Avatar alt={altText} src={imgSrc} />
      <div style={{ flexDirection: 'column', paddingLeft: 16 }}>
        <div style={{ color: 'blue' }}>{txtOne}</div>
        <div style={{ color: 'blue', fontWeight: 'bold' }}>
          {txtTwo}
        </div>
      </div>
    </div>
  );
};

export default AvatarText;
