import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    height: 56,
  },
  details: {
    display: 'flex',
    height: 48,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderColor: 'blace1e4eak',
    margin: 4,
  },
  textStyle: {
    fontSize: 12,
    color: 'blue',
    margin: '0 8px',
  },
  task: {
    display: 'inline-block',
    fontSize: 14,
    margin: '0 4px',
    color: '#ffb74d',
  },
  bellIcon: {
    color: '#ffb74d',
    fontSize: 24,
  },
  iconStyle: {
    color: '#e1e4ea',
    fontSize: 24,
  },
});

export default useStyles;
