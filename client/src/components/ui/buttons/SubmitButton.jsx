import React from 'react';
//MUI
import Button from '@material-ui/core/Button';
import { useStyles } from './styles'; // Styles
import Spinner from '../loading/Spinner';

const SubmitButton = ({ children, disabled, loading }) => {
  const classes = useStyles();
  return !loading ? (
    <Button
      type='submit'
      fullWidth
      variant='contained'
      color='primary'
      className={classes.button}
      disabled={disabled}
    >
      {children || 'Submit'}
    </Button>
  ) : (
    <Spinner isButton />
  );
};

export default SubmitButton;
