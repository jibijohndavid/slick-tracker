import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  alertContainer: {
    display: 'flex',
    alignItems: 'end',
    fontSize: 12,
    fontWeight: 500,
    color: '#002B5D',
    borderWidth: 1,
    padding: '8px 20px 8px 8px',
    margin: 10,
    borderColor: '#47c796', // '#47c796'
    backgroundColor: '#47c7961a', // #47c7961a'
    // borderColor:styleprops.alertCustomColor, //'#47c796'
    // backgroundColor:styleprops.alertCustomBgColor, //#47c7961a'
    '& .MuiAlert-icon': {
      color: '#fff',
      height: 30,
      width: 30,
      padding: 6,
      fontSize: 18,
      borderRadius: 4,
      backgroundColor: '#47c796',
      // backgroundColor: styleprops.alertCustomColor,
    },
    '& .MuiIconButton-label': {
      color: '#47c796',
      // color:styleprops.alertCustomColor,
    },
  },
});

export default useStyles;
