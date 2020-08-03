import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';

interface IProps {
  btnColor: any;
  btnText: string;
  btnIcon?: any;
}

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    width: '100%',
  },
}));

const GeneralButton = (props: IProps) => {
  const { btnText, btnIcon, btnColor } = props;
  const classes = useStyles();

  const ColorButton = withStyles((theme: Theme) => ({
    root: {
      color: theme.palette.getContrastText(btnColor[300]),
      backgroundColor: btnColor[500],
      '&:hover': {
        backgroundColor: btnColor[700],
      },
    },
  }))(Button);

  return (
    <div>
      <ColorButton
        variant="contained"
        color={'default'}
        className={classes.button}
        startIcon={btnIcon}
      >
        {btnText}
      </ColorButton>
    </div>
  );
};

export default GeneralButton;
