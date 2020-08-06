import React from 'react';
import Button from '@material-ui/core/Button';
import Spinner from '../loading/Spinner';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

interface Props {
  children?: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
}

const SubmitButton: React.FC<Props> = ({ children, disabled, loading }) => {
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
