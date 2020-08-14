import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  breadcrumbContainer: {
    '& .MuiTypography-root': {
      fontSize: 12,
      fontWeight: 500,
      textTransform: 'uppercase',
      color: '#597191',
    },
    '& .MuiSvgIcon-fontSizeSmall': {
      fontSize: 22,
    },
  },
});
export default useStyles;
