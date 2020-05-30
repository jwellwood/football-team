import React from 'react';
// MUI
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

export const useStyles = makeStyles((theme) => ({
  root: {
    color: '#fff',
    fontWeight: 'bold',
  },
}));

const ValueText = ({ children }) => {
  const classes = useStyles();
  return (
    <Typography component='span' variant='subtitle1' className={classes.root}>
      {children}
    </Typography>
  );
};

export default ValueText;
