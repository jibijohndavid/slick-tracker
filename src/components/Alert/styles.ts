import { makeStyles } from '@material-ui/core/styles';
import palette from '../../utils/theme/theme/light/palette';

const useStyles = makeStyles({
  alertContainer: {
    display: 'flex',
    alignItems: 'end',
    fontSize: 12,
    fontWeight: 500,
    color: palette.text.primary,
    borderWidth: 1,
    padding: '8px 20px 8px 8px',
    margin: 10,
    borderColor: palette.success.main,
    backgroundColor: '#47c7961a', // #47c7961a'

    '& .MuiAlert-icon': {
      color: palette.white,
      height: 30,
      width: 30,
      padding: 6,
      fontSize: 18,
      borderRadius: 4,
      backgroundColor:palette.success.main,
    },
    '& .MuiIconButton-label': {
      color: palette.success.main,
    },
  },
});

export default useStyles;
