import { makeStyles } from '@material-ui/styles';
import palette from '../../utils/theme/theme/light/palette';


const useStyles = makeStyles({
  breadcrumbContainer: {
    '& .MuiTypography-root': {
      fontSize: 12,
      fontWeight: 500,
      textTransform: 'uppercase',
      color: palette.text.secondary,
    },
    '& .MuiSvgIcon-fontSizeSmall': {
      fontSize: 22,
    },
  },
});
export default useStyles;
