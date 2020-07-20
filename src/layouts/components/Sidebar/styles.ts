import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    width: 300,
    padding: 20,
    backgroundColor: '#fff',
  },
  quickBar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'calc(100vh - 100px)', // viewhieght - nav element - padding
  },
});

export default useStyles;
