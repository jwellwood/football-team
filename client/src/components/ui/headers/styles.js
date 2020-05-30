import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles(theme => ({
  number_avatar: {
    width: 30,
    height: 30,
    fontSize: '0.8rem',
    fontWeight: 'bold'
  },
  tableHeader: {
    background: theme.palette.secondary.dark
  },
  tableAvatar: {
    background: theme.palette.secondary.light,
    width: '34px',
    height: '34px',
    fontSize: '1rem'
  },
  name: {
    color: '#fff',
    fontWeight: 'bold'
  }
}));
